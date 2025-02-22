import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { quicksand } from "@/app/ui/fonts";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Page(props: {
  searchParams?: Promise<{
    search?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";

  return (
    <main className="flex flex-col h-screen">
      <div className="flex-shrink-0">
        <h1 className={`${quicksand.className} mb-4 text-xl md:text-2xl`}>
          Invoices
        </h1>
        <div className="flex items-center justify-between gap-2 md:mt-4">
          <Search className="rounded-full" placeholder="Search invoices...." />
          <CreateInvoice />
        </div>
      </div>
      <div className="flex-grow overflow-y-auto mt-6">
        <Suspense key={search} fallback={<InvoicesTableSkeleton />}>
          <Table search={search} />
        </Suspense>
      </div>
    </main>
  );
}
