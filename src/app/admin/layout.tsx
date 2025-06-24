import AuthGraphicSection from "@/components/AuthGraphicSection";
import Image from "next/image";
import type { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex">
      {/* Left side (graphic section) */}
      <div className="hidden lg:flex flex-col justify- center items- center w-1/5 bg-cream p-9">
        <div className="bg-red-500 flex-1 grid place-items-center relative">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="Illustration"
            className="object-cover absolute top-0 left-0 z-10"
          />
          <div className="bg-blue-500 w-full h-full flex flex-col items-center justify-center relative">
            <Image
              src="/auth-grapgics-1.png"
              width={100}
              height={100}
              alt="Illustration"
              className="object-cover mt-8 w-3/4 z-10"
            />

            <Image
              src="/Vector.png"
              width={100}
              height={100}
              alt="Illustration"
              className="object-cover size-98 absolute bottom-0 left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
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
