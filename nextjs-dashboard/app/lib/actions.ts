'use server';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

type SignupState = {
  errors?: {
    name?: string[];
    email: string[];
    password?: string[];
    confirm?: string[];
  };
};

const FormSchema = z.object({
  invoiceId: z.string(),
  customerId: z.string({ invalid_type_error: 'Please select a customer.' }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const InvoiceFormCheck = FormSchema.omit({ invoiceId: true, date: true });

const SignupSchema = z
  .object({
    name: z.string(),
    email: z.string().email({ message: 'Password is not correct' }),
    password: z
      .string()
      .min(6, { message: 'Password should be at least 6 characters' }),
    confirm: z
      .string()
      .min(6, { message: 'Password should be at least 6 characters' }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'], // path of error
  });

function revalidateRedirect(path: string) {
  //   clear this cache and trigger a new request to the serve
  revalidatePath(path);

  // redirect to invoice page
  redirect(path);
}

export async function userSignup(state: any, formData: FormData) {
  console.log('Validation started ....');

  // validate
  const signupFields = SignupSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirm: formData.get('confirmpassword'),
  });
  // console.log('formData', formData);
  // console.log(signupFields);

  if (!signupFields.success) {
    console.log('Validation faild');
    return {
      errors: signupFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = signupFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    console.log('creating new user ....');
    // create user in database
    await sql`INSERT INTO users (id, name, email, password)
        VALUES (${randomUUID()}, ${name}, ${email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;`;

    // sign in new user

    console.log('new user joined');
  } catch (error) {
    console.log('New user signup error ===>', error);
  }
}

export async function createInvoice(state: any, formData: FormData) {
  // validate
  const validateFields = InvoiceFormCheck.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  // console.log('validateFields', validateFields);
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const { customerId, amount, status } = validateFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  try {
    // store in DB and handle error
    await sql`INSERT INTO invoices (customer_id, amount, status, date)
            VALUES (${customerId},${amountInCents?.toString()},${status},${date})`;

    console.log('storing into database.....');
  } catch (error) {
    console.log('🚒....create invoice error: ', error);
  }

  // redirect
  revalidateRedirect('/ui/invoices');
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
    console.log('🚒....delete invoice error: ', error);
    return error;
  }

  // redirect
  revalidateRedirect('/ui/invoices');
}

export async function editInvoice(state: any, formData: FormData, id: string) {
  // check authorized user
  // const session = await getSession();
  // const userRole = session?.user?.role;

  // Check if user is authorized to perform the action
  // if (userRole !== 'admin') {
  //   throw new Error(
  //     'Unauthorized access: User does not have admin privileges.',
  //   );
  // }
  // Proceed with the action for authorized users

  // validate
  const validateFields = InvoiceFormCheck.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  // console.log('validateFields', validateFields);
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
  const { customerId, amount, status } = validateFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
  try {
    // store in DB and handle error
    await sql`UPDATE invoices 
            SET customer_id = ${customerId},
                amount = ${amountInCents?.toString()},
                status = ${status},
                date = ${date}
            WHERE id = ${id}
            `;

    console.log('Form edited : ', id);
  } catch (error) {
    console.log('🚒....edit invoice error: ', error);
  }

  // redirect
  revalidateRedirect('/ui/invoices');
}

export async function authenticate(state: any, formData: FormData) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CallbackRouteError':
          return 'Invalid username and password';
        case 'CredentialsSignin':
          // console.log('error message: ', error.message);
          return 'Invalid credentials.';
        default:
          // console.log('error message: ', error.message);
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
