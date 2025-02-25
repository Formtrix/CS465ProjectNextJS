import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { readex } from "@/app/ui/fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`${readex.className} flex flex-row items-center justify-start text-black`}
    >
      <GlobeAltIcon className="h-12 w-12" />
      <p className="text-[25px] font-semibold ml-1">Acme App</p>
    </div>
  );
}
