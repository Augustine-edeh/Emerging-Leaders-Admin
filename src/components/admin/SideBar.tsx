"use client";

import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants/sidebarLinks";

import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col items-center gap-6 w-1/5 bg-white py-1.5">
      <Image
        src="/logo.png"
        width={129}
        height={152}
        alt="Illustration"
        className="object-cover mx-11"
      />

      <nav className="mx-4 space-y-1">
        {sidebarLinks.map(({ label, href, icon, activeIcon }) => {
          const isActive = pathname === href;

          return (
            // <Link
            //   key={label}
            //   href={href}
            //   className={`flex items-center gap-2 px-6 py-4 rounded-xl transition-colors duration-200 outline-none ${
            //     isActive ? "bg-primary text-white" : "bg-white text-black"
            //   }
            // hover:bg-primary hover:text-white focus:bg-primary focus:text-white`}
            // >
            <Link
              key={label}
              href={href}
              className={`group flex items-center gap-2 px-6 py-4 rounded-xl transition-colors duration-200 outline-none ${
                isActive ? "bg-primary text-white" : "bg-white text-black"
              } hover:bg-primary hover:text-white focus:bg-primary focus:text-white`}
            >
              <div className="relative size-5">
                {/* Inactive icon */}
                <Image
                  src={icon}
                  // alt={`${label} icon`}
                  alt={label}
                  fill
                  className={`transition-opacity duration-200 ${
                    isActive
                      ? "opacity-0"
                      : "group-hover:opacity-0 group-focus:opacity-0 group-active:opacity-0"
                  }`}
                />
                {/* Active icon */}
                <Image
                  src={activeIcon}
                  alt={`${label} active icon`}
                  fill
                  className={`transition-opacity duration-200 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100"
                  }`}
                />
              </div>
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default SideBar;
