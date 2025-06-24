import AuthGraphicSection from "@/components/AuthGraphicSection";
import type { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex">
      {/* Left side (graphic section) */}
      <AuthGraphicSection />

      {/* Right side (auth form section) */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8 lg:px-24">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
