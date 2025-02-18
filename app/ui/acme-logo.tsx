import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { quicksand } from "@/app/ui/fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`${quicksand.className} flex flex-row items-center justify-center text-black font-bold`}
    >
      <GlobeAltIcon className="h-12 w-12" />
      <p className="text-[20px] font-bold ml-2">Acme App</p>
    </div>
  );
}
