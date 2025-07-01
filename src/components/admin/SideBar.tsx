"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  const dashNav = [
    {
      icon: "/icons/analytics.png",
      iconActive: "/icons/analytics-active.png",
      label: "Analytics",
      link: "/analytics",
    },
    {
      icon: "/icons/user-management.png",
      iconActive: "/icons/analytics-active.png",
      label: "User Management",
      link: "/user-management",
    },
    {
      icon: "/icons/content-management.png",
      iconActive: "/icons/analytics-active.png",
      label: "Content Management",
      link: "/content-management",
    },
    {
      icon: "/icons/support.png",
      iconActive: "/icons/analytics-active.png",
      label: "Support",
      link: "/support",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col items-center gap-6 w-1/5 bg-white py-1.5">
      <Image
        src="/logo.png"
        width={129}
        height={152}
        alt="Illustration"
        className="object-cover mx-11"
      />

      <ul className="mx-4 space-y-1">
        {dashNav.map((item, index) => {
          const isActive = pathname === item.link;

          return (
            <Link
              key={index}
              href={item.link}
              // NOTE: remember to change text-black for isActive condition
              // to the intended design text color of text-secondary
              className={`flex items-center gap-2 px-6 py-4 rounded-xl transition-colors duration-200 outline-none
                  
            ${isActive ? "bg-primary text-white" : "bg-white text-black"} 
            hover:bg-primary hover:text-white focus:bg-primary focus:text-white`}
            >
              <Image src={item.icon} width={24} height={24} alt={item.label} />
              <span className="font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
