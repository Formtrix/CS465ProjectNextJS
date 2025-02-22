import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { quicksand } from "@/app/ui/fonts";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchInvoicesPages } from "@/app/lib/data";

export default async function Page(props: {
  searchParams?: Promise<{
    search?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(search);

  return (
    <main>
      <h1 className={`${quicksand.className} mb-4 text-xl md:text-2xl`}>
        Invoices
      </h1>
      <div className="flex items-center justify-between gap-2 md:mt-4">
        <Search className="rounded-full" placeholder="Search invoices...." />
        {/* Apply rounded-md class */}
        <CreateInvoice />
      </div>
      <Suspense key={search + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table search={search} currentPage={currentPage} />
      </Suspense>
      <div className="flex justify-center mt-5">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
