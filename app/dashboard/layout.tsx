import SideNav from "@/app/ui/dashboard/sidenav";

// PPR experimental
// Don't forget to implement PPR and see if it fits for production
// export const experimental_ppr = true;
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full flex-none md:w-72">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 space-y-6 bg-gray-200">
        <div className="max-w-7xl mx-auto w-full h-full">{children}</div>
      </div>
    </div>
  );
}
