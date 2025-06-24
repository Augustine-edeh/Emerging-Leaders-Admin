import AuthGraphicSection from "@/components/AuthGraphicSection";
import Image from "next/image";
import type { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const dashNav = [
    {
      icon: "/icons/analytics.png",
      label: "Analytics",
    },
    {
      icon: "/icons/analytics.png",
      label: "User Management",
    },
    {
      icon: "/icons/analytics.png",
      label: "Content Management",
    },
    {
      icon: "/icons/analytics.png",
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
      <div className="flex flex-col justify-center items-center w-full lg:w-4/5 bg-pink-500">
        <header className="bg-yellow-500 w-full py-6 text-center">
          This is the Header Section
        </header>

        <section className="flex flex-col gap-2 bg-red-500 p-8 w-full h-full">
          <main className="bg-blue-500 flex-1 p-2">{children}</main>

          <footer className="bg-yellow-500 flex justify-between py-6">
            <div className="bg-fuchsia-500">Left side</div>
            <div className="bg-fuchsia-500">Right side</div>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default AuthLayout;
