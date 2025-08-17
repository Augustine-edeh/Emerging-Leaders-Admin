import { Separator } from "@/components/ui/separator";
import UserMenu from "@/components/admin/header/UserMenu";

import Image from "next/image";
import React from "react";

const AdminHeader = () => {
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
        <UserMenu />
      </div>
    </header>
  );
};

export default AdminHeader;
