"use server";

import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
// import { signIn } from '@/auth';
// import { AuthError } from 'next-auth';
const bcrypt = require("bcrypt");
import { randomUUID } from "crypto";
import { SignupState } from "./definitions";
import { SignupSchema } from "./definitions";
import { createSession } from "@/app/nextjs-auth/lib/database-sessions";
import { CreateFormSchema } from "./definitions";
import { CreateInvoiceState } from "./definitions";
import { verifySession } from "@/app/nextjs-auth/lib/data-access-layer";
import { deleteSession } from "@/app/nextjs-auth/lib/database-sessions";
import { LoginState } from "./definitions";
import { LoginSchema } from "./definitions";

const InvoiceFormCheck = CreateFormSchema.omit({ invoiceId: true, date: true });

function revalidateRedirect(path: string) {
  //   clear this cache and trigger a new request to the serve
  revalidatePath(path);

  // redirect to invoice page
  redirect(path);
}

export async function userSignup(state: SignupState, formData: FormData) {
  console.log("Validation started ....");

  // validate
  const signupFields = SignupSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm: formData.get("confirmpassword"),
  });

  if (!signupFields.success) {
    console.log("Validation faild");
    return {
      errors: signupFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = signupFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const id = randomUUID();
  try {
    console.log("creating new user ....");
    // create user in database
    await sql`INSERT INTO users (id, name, email, password)
        VALUES (${id}, ${name}, ${email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;`;

    // create new session
    await createSession(id);
    console.log("new user joined");
  } catch (error) {
    console.log("New user signup error ===>", error);
    return {
      errors: {
        email: ["This email already exist."],
      },
    };
  }

  // redirect
  revalidateRedirect("/dashboard/ui/summary");
}

export async function login(state: LoginState, formData: FormData) {
  // validate inputs
  const validation = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // return error if inputs are not valid
  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validation.data;

  try {
    // fetch user
    const user = await sql`select * from users
                          where email=${email}`;

    // verify user password
    const passwordMatch = await bcrypt.compare(password, user.rows[0].password);

    if (!passwordMatch) {
      return {
        errors: {
          password: ["Try correct password"],
        },
      };
    }

    // create user session
    await createSession(user.rows[0].id);
  } catch (error) {
    console.error("user does not exist");
    return {
      errors: {
        email: ["user does not exist"],
        password: ["invalid password"],
      },
    };
  }

  // redirect user on complete validation
  revalidateRedirect("/dashboard/ui/summary");
}

export async function logout() {
  const { isAuth, userId } = await verifySession();

  if (!isAuth) return null;

  deleteSession();
  redirect("/dashboard/login");
}

export async function createInvoice(
  state: CreateInvoiceState,
  formData: FormData
) {
  // validate
  const validateFields = InvoiceFormCheck.safeParse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  // console.log('validateFields', validateFields);
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  const { customerId, amount, status } = validateFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];

  try {
    // store in DB and handle error
    await sql`INSERT INTO invoices (customer_id, amount, status, date)
            VALUES (${customerId},${amountInCents?.toString()},${status},${date})`;

    console.log("storing into database.....");
  } catch (error) {
    console.log("🚒....create invoice error: ", error);
    return {
      message: "Failed to store invoice in database",
    };
  }

  // redirect
  revalidateRedirect("/dashboard/ui/invoices");
}

export async function deleteInvoice(id: string) {
  // throw new Error('Failed to Delete Invoice');
  // delete invoice by id
  try {
    await sql`DELETE FROM invoices
            WHERE id = ${id};
            `;
    console.log(`Deleted invoice ${id}`);
  } catch (error) {
    console.log("🚒....delete invoice error: ", error);
    return error;
  }

  // redirect
  revalidateRedirect("/dashboard/ui/invoices");
}

export async function editInvoice(
  id: string,
  state: CreateInvoiceState,
  formData: FormData
) {
  // validate
  const validateFields = InvoiceFormCheck.safeParse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  // console.log('validateFields', validateFields);
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }
  const { customerId, amount, status } = validateFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];
  try {
    // store in DB and handle error
    await sql`UPDATE invoices 
            SET customer_id = ${customerId},
                amount = ${amountInCents?.toString()},
                status = ${status},
                date = ${date}
            WHERE id = ${id}
            `;

    console.log("Form edited : ", id);
  } catch (error) {
    console.log("🚒....edit invoice error: ", error);
    return {
      message: "Failted to store edited data in database.",
    };
  }

  // redirect
  revalidateRedirect("/dashboard/ui/invoices");
}
