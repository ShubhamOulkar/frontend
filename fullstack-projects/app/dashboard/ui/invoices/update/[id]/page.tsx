import EditInvoiceForm from "./edit-form";
import { fetchInvoiceById, fetchCustomers } from "@/app/lib/data";
import { notFound, usePathname } from "next/navigation";
import Breadcrumbs from "../../breadcrumbs";
import { useRouter } from "next/router";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit invoice",
};

export default async function Page({ params }: { params: { id: string } }) {
  // console.log('params', params);
  const { id } = params;
  const [customers, invoice] = await Promise.all([
    fetchCustomers(),
    fetchInvoiceById(id),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/ui/invoices" },
          {
            label: "Update Invoice",
            href: "/dsahboard/ui/invoices/update",
            active: true,
          },
        ]}
      />
      <EditInvoiceForm customers={customers} invoice={invoice} />
    </>
  );
}
