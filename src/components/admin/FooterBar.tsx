import Pagination from "@/components/Pagination";
import { ChevronDown } from "lucide-react";

const FooterBar = () => {
  return (
    <footer className=" flex justify-between ">
      <div className="flex items-center gap-1">
        <span>show </span>

        <span className="flex bg-white gap-1 rounded-lg px-2 py-1">
          <span>
            {} of {8}
          </span>
          <ChevronDown />
        </span>
      </div>

      <div className="flex items-center gap-6">
        <p>1-page</p>

        <div>
          <Pagination />
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
