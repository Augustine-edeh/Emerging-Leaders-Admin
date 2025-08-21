"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/Avatar";

const NotificationMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="size-7 relative bg-secondary-50 rounded-full cursor-pointer">
          <Image src="/icons/notification-bing.png" alt="notification" fill />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[500px] flex flex-col h-screen p-0 mt-5 border-none rounded-none shadow-[0px_8px_30px_0px_#5F5E5E40]"
        align="start"
      >
        <div className="flex justify-between items-center px-8 py-4">
          <div>
            <DropdownMenuLabel className="px-0">
              Notifications
            </DropdownMenuLabel>
            <p className="text-muted-foreground">
              Stay up to date with your latest notifications
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="size-11 rounded-[12px] shadow-[0px_-3px_64px_0px_#0000001A]"
            onClick={() => setOpen(false)}
          >
            <X className="size-4 text-primary" />
          </Button>
        </div>

        <DropdownMenuGroup className="mt-10">
          <div className="flex justify-between px-4 py-2 bg-secondary-50 text-primary">
            <div className="flex gap-2.5">
              All <span className="text-black">Unread(0)</span>
            </div>

            <div className="flex items-center gap-1 cursor-pointer">
              <Check size={18} /> Mark all as read
            </div>
          </div>
        </DropdownMenuGroup>

        <DropdownMenuGroup className="flex-1 px-6">
          <h5 className="text-muted-foreground">Today</h5>

          <div className="flex items-center gap-4">
            <UserAvatar className="size-10" />
            <div>
              <p>Demi Wikinson accepted admin invite</p>
              <p className="text-muted-foreground">Jun 16, 2025 | 09:23 am</p>
            </div>
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationMenu;
