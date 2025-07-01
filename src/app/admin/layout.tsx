import FooterBar from "@/components/admin/FooterBar";
import AvatarDemo from "@/components/Avatar";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const dashNav = [
    {
      icon: "/icons/analytics.png",
      iconActive: "/icons/analytics-active.png",
      label: "Analytics",
    },
    {
      icon: "/icons/user-management.png",
      iconActive: "/icons/analytics-active.png",
      label: "User Management",
    },
    {
      icon: "/icons/content-management.png",
      iconActive: "/icons/analytics-active.png",
      label: "Content Management",
    },
    {
      icon: "/icons/support.png",
      iconActive: "/icons/analytics-active.png",
      label: "Support",
    },
  ];

  return (
    <div className="h-screen flex">
      {/* Left side (graphic section) */}
      <div className="hidden lg:flex flex-col items- center gap-10 w-1/5 bg-cream p-8">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="Illustration"
          className="object-cover mx-auto bg-yellow-400"
        />

        <ul className="bg-red-500 space-y-5">
          {dashNav.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 px-2 py-3 text-gray-800 bg-blue-500"
            >
              <span>
                <Image
                  src={item.icon}
                  width={30}
                  height={30}
                  alt={item.label}
                />
              </span>
              <span className="font-semibold">{item.label}</span>
            </li>
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

export default AuthLayout;
