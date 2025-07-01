import React from "react";

import Pagination from "@/components/Pagination";
import { ChevronDown } from "lucide-react";

const FooterBar = () => {
  return (
    <footer className="bg-yellow-500 flex justify-between ">
      <div className="flex bg-fuchsia-500">
        <span>
          show {} of {8}
        </span>
        <ChevronDown />
      </div>

      <div className="flex items-center gap-6 bg-fuchsia-500">
        <p>1-page</p>

        <div>
          <Pagination />
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
