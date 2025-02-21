import NavLinks from "@/app/ui/dashboard/nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import { LogOut } from "lucide-react";
import styles from "@/app/ui/home.module.css";

export default function SideNav() {
  return (
    <div
      className={`flex h-full flex-col items-center px-4 py-4 md:px-2 ${styles["user-select-none"]}`}
    >
      <figure className="mb-8 mt-4 flex items-center justify-center rounded-md bg-transparent p-4">
        <div className="w-full flex justify-center items-center">
          <AcmeLogo />
        </div>
      </figure>

      <div className="flex grow flex-col justify-start items-center space-y-2 w-full">
        <div className="mt-4 space-y-3 pl-6 pr-6 md:pl-6 w-full">
          <NavLinks />
        </div>
        <div className="hidden h-auto w-full grow rounded-md bg-white md:block"></div>
        <form className="mt-4 w-full flex justify-center">
          <button className="group flex h-[48px] w-full items-center justify-center gap-2 rounded-md bg-white p-3 text-md font-medium transition-colors hover:bg-blue-100 hover:shadow-md md:p-2 md:px-3">
            <LogOut className="w-8 h-8 stroke-2 text-gray-500 transition-colors group-hover:text-blue-600" />
            <span className="hidden md:block text-gray-500 transition-colors group-hover:text-blue-600">
              Log out
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
