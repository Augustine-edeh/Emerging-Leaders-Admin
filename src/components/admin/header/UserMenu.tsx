"use client";

import { useState } from "react";
import UserAvatar from "@/components/Avatar";
import { ChevronDown } from "lucide-react";
// import { userMenuItems } from "@/constants/userMenuItems"; NOTE: ensure to extract all menu-items into config file

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const UserMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="User menu"
          className="flex items-center gap-1 rounded-md outline-none"
        >
          <UserAvatar />
          <ChevronDown
            className={`size-4 text-muted-foreground transition-transform duration-200 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56 rounded-[20px] mt-5 border-none shadow-[0px_8px_29px_0px_#5F5E5E30]"
        align="end"
      >
        <DropdownMenuLabel className="sr-only">Profile Menu</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex py-4">
            <UserAvatar />
            <div>
              <h6>Kayode White</h6>
              <p className="text-muted-foreground">kayode123@gmail.com</p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem className="py-4">
            <Image src="/icons/profile.svg" alt="" width="18" height="18" />
            View profile
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="py-4">
            <Image src="/icons/logout.svg" alt="" width="18" height="18" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
