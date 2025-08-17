import UserAvatar from "@/components/Avatar";

import { Check } from "lucide-react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NotificationMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="size-7 relative bg-secondary-50 yellow-200 rounded-full">
          <Image src="/icons/notification-bing.png" alt="notification" fill />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[500px] h-screen p-0 mt-5 border-none rounded-none shadow-[0px_8px_30px_0px_#5F5E5E40];"
        align="start"
      >
        <DropdownMenuLabel className="">Notifications</DropdownMenuLabel>
        <p className="text-muted-foreground">
          Stay up to date with your latest notifications
        </p>

        <DropdownMenuGroup className="mt-10">
          <div className="flex justify-between px-4 py-2 bg-secondary-50 text-primary ">
            <div className="flex gap-2.5">
              All <span className="text-black">Unread(0)</span>
            </div>

            <div className="flex items-center gap-1">
              <Check size={18} /> Mark all as read
            </div>
          </div>
        </DropdownMenuGroup>

        <DropdownMenuGroup className="flex flex-col justify-center items-center mt-16">
          <div className="relative size-[300px]">
            <Image
              src="/icons/notification-menu-empty.svg"
              alt="notification"
              fill
            />
          </div>

          <h5 className="mt-5 mb-1 font-[500]">No Notifications</h5>
          <p>No new alerts at the moment. Check back later.</p>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationMenu;
