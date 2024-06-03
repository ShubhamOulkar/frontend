'use server';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { CreateInvoice } from '../ui/invoices/buttons';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const Invoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  // validate form data
  const rowFormData = Object.fromEntries(formData.entries());
  const { customerId, amount, status } = Invoice.parse(rowFormData);
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // store in DB and handle error
  await sql`INSERT INTO invoices (customer_id, amount, status, date)
            VALUES (${customerId},${amountInCents},${status},${date})`;

  console.log('storing into database.....');

  //   clear this cache and trigger a new request to the serve
  revalidatePath('/ui/invoices');

  // redirect to invoice page
  redirect('/ui/invoices');
}
