import AddressInfoForm from "@/components/admin/profile/AddressInfoForm";
import BackButton from "@/components/admin/profile/BackButton";
import PersonalInformationForm from "@/components/admin/profile/PersonalInformationForm";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import UserAvatar from "@/components/UserAvatar";
import { PencilLine } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-6 h-full bg-blue-400 p-1">
      <section className="flex gap-4">
        <BackButton />
        <div>
          <SectionTitle>My Profile</SectionTitle>
          <p className="text-muted-foreground">
            Your personal and professional details at a glance
          </p>
        </div>
      </section>

      <section className="flex items-center gap-4 bg-white px-12 py-6 rounded-[12px]">
        <UserAvatar className="size-19" />
        <div>
          <SectionTitle>Kayode White</SectionTitle>

          <p className="text-muted-foreground">Admin</p>
        </div>
      </section>

      {/* <ScrollArea className="flex-1 px-6 min-h-0 pt-5 pb-10">
          <div className="space-y-8"> */}
      {/* <section className="flex-1 min-h- h-full bg-red-500"> */}
      {/* <div className="flex-1 space-y-8"> */}
      <ScrollArea className="flex-1 min-h-0 bg-orange-500">
        <div className="space-y-6">
          <section className="bg-white p-6 rounded-[12px]">
            {/* <div className="flex items-center justify-between">
            <SectionTitle>Personal Information</SectionTitle>

            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-3 !px-3 !py-4 rounded-[16px] text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              <PencilLine className="size-4" />
              Edit
            </Button>
          </div> */}

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div> */}
            <PersonalInformationForm />
          </section>

          <section className="bg-white p-6 rounded-lg">
            {/* <div className="flex items-center justify-between">
            <SectionTitle>Address</SectionTitle>

            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-3 !px-3 !py-4 rounded-[16px] text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              <PencilLine className="size-4" />
              Edit
            </Button>
          </div> */}
            <AddressInfoForm />
          </section>
        </div>
      </ScrollArea>
      {/* </div> */}

      {/* </section> */}
    </div>
  );
};

export default ProfilePage;

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-semibold">{children}</h4>
);
