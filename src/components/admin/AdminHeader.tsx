import { Separator } from "@/components/ui/separator";
import UserAvatar from "@/components/Avatar";

import Image from "next/image";
import React from "react";
import { ChevronDown } from "lucide-react";

const adminHeader = () => {
  return (
    <header className="flex justify-end items-center gap-2 px-8 py-6 w-full bg-white left-auto">
      <div className="size-7 relative bg-secondary-50 yellow-200 rounded-full">
        <Image
          src="/icons/notification-bing.png"
          alt="notification"
          // width={24}
          // height={24}
          fill
        />
      </div>

      <Separator orientation="vertical" />

      <div className="flex items-center gap-2">
        <UserAvatar />
        <ChevronDown color="#B1B1AE" />
      </div>
    </header>
  );
};

export default adminHeader;
