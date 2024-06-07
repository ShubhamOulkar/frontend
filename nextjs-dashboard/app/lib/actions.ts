'use server';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

const FormSchema = z.object({
  invoiceId: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const InvoiceFormCheck = FormSchema.omit({ invoiceId: true, date: true });

// const EditFormCheck = FormSchema.omit({ date: true });

function checkData(formData: FormData) {
  // validate form data
  const rowFormData = Object.fromEntries(formData.entries());
  // const { invoiceId, customerId, amount, status } = EditFormCheck.parse(rowFormData);
  const { customerId, amount, status } = InvoiceFormCheck.parse(rowFormData);
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  return { customerId, amountInCents, status, date };
}

function revalidateRedirect() {
  //   clear this cache and trigger a new request to the serve
  revalidatePath('/ui/invoices');

  // redirect to invoice page
  redirect('/ui/invoices');

  return;
}

export async function createInvoice(formData: FormData) {
  // validate
  const { customerId, amountInCents, status, date } = checkData(formData);

  // store in DB and handle error
  await sql`INSERT INTO invoices (customer_id, amount, status, date)
            VALUES (${customerId},${amountInCents.toString()},${status},${date})`;

  console.log('storing into database.....');
  // redirect
  revalidateRedirect();
}

export async function deleteInvoice(id: string) {
  // delete invoice by id
  await sql`DELETE FROM invoices
            WHERE id = ${id};
            `;
  console.log(`Deleted invoice ${id}`);
  // redirect
  revalidateRedirect();
}

export async function editInvoice(id: string, formData: FormData) {
  // validate
  const { customerId, amountInCents, status, date } = checkData(formData);
  // store in DB and handle error
  await sql`UPDATE invoices 
            SET customer_id = ${customerId},
                amount = ${amountInCents.toString()},
                status = ${status},
                date = ${date}
            WHERE id = ${id}
            `;

  console.log('Form edited');
  // redirect
  revalidateRedirect();
}
