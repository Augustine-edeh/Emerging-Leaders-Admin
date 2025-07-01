import FooterBar from "@/components/admin/FooterBar";
import AvatarDemo from "@/components/Avatar";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
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
    <div className="h-screen flex">
      {/* Left side (graphic section) */}
      <div className="hidden lg:flex flex-col items- center gap-6 w-1/5 bg-white py-1.5">
        <Image
          src="/logo.png"
          width={129}
          height={152}
          alt="Illustration"
          className="object-cover mx-11"
        />

        <ul className="mx-4">
          {dashNav.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="flex items-center gap-2 px-6 py-4 text-gray-800 bg-white hover:bg-primary focus:bg-primary focus-visible:bg-primary rounded-xl transition-colors duration-200 outline-none"
            >
              <Image src={item.icon} width={24} height={24} alt={item.label} />
              <span className="font-semibold">{item.label}</span>
            </Link>
          ))}
        </ul>
      </div>

      {/* Right side (auth form section) */}
      <div className="flex flex-col justify-center items-center w-full lg:w-4/5">
        <header className="flex justify-end gap-2 px-8 py-6 w-full bg-white left-auto">
          <div className="size-12 relative">
            <Image src="/icons/notification-bing.png" alt="notification" fill />
          </div>

          <Separator orientation="vertical" />

          <div className="flex items-center gap-2">
            <AvatarDemo />
            <ChevronDown />
          </div>
        </header>

        {/* NOTE: pb should be 16 tw units on prod mode */}
        <section className="flex flex-col gap-8 bg-secondary-50 p-8 pb-12 w-full h-full flex-1 min-h-0">
          <main className="flex-1 flex flex-col min-h-0">{children}</main>

          <FooterBar />
        </section>
      </div>
    </div>
  );
};

export default AdminLayout;
