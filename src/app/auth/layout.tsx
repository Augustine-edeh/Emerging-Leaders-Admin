import Image from "next/image";
import type { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex">
      {/* Left side (graphic section) */}
      <div className="hidden lg:flex flex-col justify-center items-center w-1/2 bg-cream p-8">
        {/* You can replace this with your SignupGraphicSection component */}
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Emerging Leaders
        </h1>
        <p className="text-gray-600 text-center max-w-sm">
          Empowering leadership through intuitive design and seamless access.
        </p>

        <Image
          src="/auth-grapgics-1.png"
          width={100}
          height={100}
          alt="Illustration"
          className="mt-8 w-3/4"
        />
      </div>

      {/* Right side (auth form section) */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
