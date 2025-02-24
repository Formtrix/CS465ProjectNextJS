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
    <main className="flex flex-col overflow-y-auto">
      <div className="container mx-auto flex-grow">
        <h1
          className={`${quicksand.className}  text-xl font-semibold fixed bg-gray-200`}
        >
          Invoices
        </h1>
        <div className="fixed bg-gray-200 top-14 right-4">
          <CreateInvoice />
        </div>
      </div>
      <div className="flex-grow mt-32 pt-16">
        {" "}
        {/* Adjust margin and padding to account for fixed elements */}
        <Suspense key={search} fallback={<InvoicesTableSkeleton />}>
          <Table search={search} />
        </Suspense>
      </div>
    </main>
  );
}

// Check out urlClientSideStateM.txt, searchUseStateControlledEnv.txt and pagination.txt for more information on how to manage state in a Next.js application.
// Lifting the state to the server and using URL search parameters in a server-side rendered (SSR) or static site generation (SSG) context has several benefits compared to managing state entirely on the client side with useState and useEffect. Here are some of the key benefits:

// Benefits of Lifting State to the Server
// SEO Benefits:

// Search Engine Indexing: When search parameters are part of the URL, search engines can index different states of your application, improving SEO.
// Shareable URLs: URLs with search parameters can be shared and bookmarked, preserving the state of the application for users who revisit or share the link.
// Performance:

// Initial Load: Server-side rendering can provide a fully rendered HTML page to the client, reducing the time to first meaningful paint and improving perceived performance.
// Reduced Client-Side JavaScript: By handling state on the server, you reduce the amount of JavaScript that needs to be executed on the client, leading to faster load times and better performance on low-powered devices.
// Consistency:

// Single Source of Truth: The server can act as the single source of truth for the state, ensuring consistency across different clients and sessions.
// Simplified State Management: By lifting state to the server, you avoid the complexity of managing state synchronization between the client and server.
// Scalability:

// Server-Side Caching: Server-side rendered pages can be cached more effectively, reducing the load on your servers and improving scalability.
// Edge Caching: With static site generation (SSG) and server-side rendering (SSR), you can leverage edge caching to serve content faster to users around the world.
// Security:

// Sensitive Data Handling: By handling state on the server, you can better control access to sensitive data and reduce the risk of exposing it to the client.
