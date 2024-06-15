"use server";

import { randomUUID } from "crypto";
import {
  SignupFormSchema,
  FormState,
  LoginForm,
  LoginFormSchema,
} from "../lib/definitions";
import { sql } from "@vercel/postgres";
// import { createSession } from "../lib/stateless-session";
// import { deleteSession } from "@/app/lib/stateless-session";
import { createSession } from "../lib/database-sessions";
import { deleteSession } from "../lib/database-sessions";
import { verifySession } from "../lib/data-access-layer";
import { redirect } from "next/navigation";
const bcrypt = require("bcrypt");

export async function login(state: LoginForm, formData: FormData) {
  // validation
  const validation = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // if validation faild return early
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
          email: [],
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
        password: [],
      },
    };
  }

  // redirect to profile page
  redirect("/profile");
}

export async function signup(state: FormState, formData: FormData) {
  // validate form data
  const validation = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm: formData.get("confirm"),
  });

  //   if validation failed return early
  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }

  //  Prepare data for insertion into database
  const { name, email, password } = validation.data;
  // e.g. Hash the user's password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);
  const id = randomUUID();
  try {
    console.log("Storing into database....");
    await sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${id}, ${name}, ${email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    console.log("new user created...");
  } catch (error) {
    console.error("new user signup error: ", error);
    return {
      errors: {
        name: [],
        email: ["This email already exist."],
        password: [],
      },
    };
  }

  // create user session
  await createSession(id);

  // redirect to profile page
  redirect("/profile");
}

export async function logout() {
  const { isAuth, userId } = await verifySession();

  if (!isAuth) return null;

  deleteSession();
  redirect("/login");
}

async function fetchUser(email: string) {
  // fetch user
  const user = await sql`select * from users
   where email=${email}`;

  return user;
}
