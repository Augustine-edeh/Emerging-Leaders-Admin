import Image from "next/image";
import type { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex">
      {/* Left side (graphic section) */}
      <div className="hidden lg:flex flex-col justify- center items- center w-1/2 bg-cream p-9">
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
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
