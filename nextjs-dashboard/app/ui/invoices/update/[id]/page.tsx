import EditInvoiceForm from '@/app/ui/invoices/edit-form';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { usePathname } from 'next/navigation';
import Breadcrumbs from '../../breadcrumbs';
import { useRouter } from 'next/router';

export default async function Page({ params }: { params: { id: string } }) {
  // console.log('params', params);
  const { id } = params;
  const [customers, invoice] = await Promise.all([
    fetchCustomers(),
    fetchInvoiceById(id),
  ]);
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/ui/invoices' },
          {
            label: 'Update Invoice',
            href: '/ui/invoices/update',
            active: true,
          },
        ]}
      />
      <EditInvoiceForm customers={customers} invoice={invoice} />
    </>
  );
}
