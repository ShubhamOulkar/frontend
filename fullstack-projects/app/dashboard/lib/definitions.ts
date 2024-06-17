import { z } from "zod";
// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: "pending" | "paid";
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, "amount"> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: "pending" | "paid";
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: "pending" | "paid";
};

export type CreateInvoiceState =
  | {
      errors?: {
        customerId?: string[];
        amount?: string[];
        status?: string[];
      };
      message?: string;
    }
  | undefined;

export type SignupState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        confirm?: string[];
      };
      message?: string;
    }
  | undefined;

export type LoginState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string[];
    }
  | undefined;

export const CreateFormSchema = z.object({
  invoiceId: z.string(),
  customerId: z.string({ invalid_type_error: "Please select a customer." }),
  amount: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0." }),
  status: z.enum(["pending", "paid"], {
    invalid_type_error: "Please select an invoice status.",
  }),
  date: z.string(),
});

export const SignupSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "user name should be more than 2 characters" })
      .trim(),
    email: z.string().email({ message: "Password is not correct" }).trim(),
    password: z
      .string()
      .min(8, { message: "Password should be at least 8 characters." })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      })
      .trim(),
    confirm: z.string().trim(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Password does not match",
    path: ["confirm"], // path of error
  });

export const LoginSchema = z.object({
  email: z.string().email({ message: "invalid email" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters" })
    .trim(),
});
