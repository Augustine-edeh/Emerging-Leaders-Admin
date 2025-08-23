import BackButton from "@/components/admin/profile/BackButton";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/UserAvatar";
import { PencilLine } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        <BackButton />

        <div>
          <SectionTitle>My Profile</SectionTitle>

          <p className="text-muted-foreground">
            Your personal and professional details at a glance
          </p>
        </div>
      </div>

      <section className="flex items-center gap-4 bg-white px-12 py-6 rounded-[12px]">
        <UserAvatar className="size-19" />
        <div>
          <SectionTitle>Kayode White</SectionTitle>

          <p className="text-muted-foreground">Admin</p>
        </div>
      </section>

      <section className="bg-white p-6 rounded-[12px]">
        <div className="flex items-center justify-between">
          <SectionTitle>Personal Information</SectionTitle>

          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-3 !px-3 !py-4 rounded-[16px] text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <PencilLine className="size-4" />
            Edit
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
      </section>

      <section className="bg-white p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <SectionTitle>Address</SectionTitle>

          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-3 !px-3 !py-4 rounded-[16px] text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <PencilLine className="size-4" />
            Edit
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
      </section>
    </div>
  );
};

export default ProfilePage;

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-semibold">{children}</h4>
);
