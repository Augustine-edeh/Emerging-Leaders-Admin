import FooterBar from "@/components/admin/FooterBar";
import AdminHeader from "@/components/admin/AdminHeader";
import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import SideBar from "@/components/admin/SideBar";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex">
      <Toaster
        position="top-right"
      />
      {/* Left section */}
      <SideBar />

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center w-full lg:w-4/5">
        <AdminHeader />

        {/* NOTE: pb should be 16 tw units on prod mode */}
        <section className="flex flex-col gap-8 bg-secondary-50 p-8 pb-12 w-full h-full flex-1 min-h-0">
          <main className="flex-1 flex flex-col">{children}</main>

          <FooterBar />
        </section>
      </div>
    </div>
  );
};

export default AdminLayout;
