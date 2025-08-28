"use client";

import AddressInfoForm from "@/components/admin/profile/AddressInfoForm";
import BackButton from "@/components/admin/profile/BackButton";
import PersonalInformationForm from "@/components/admin/profile/PersonalInformationForm";
import {
  // showCustomErrorToast, NOTE: To be used  later during intergration onError for API calls
  showCustomSuccessToast,
} from "@/components/toast/ShowCustomErrorToast";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import UserAvatar from "@/components/UserAvatar";

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

        <Button
          onClick={() =>
            showCustomSuccessToast(
              "!Failed to Update Changes.",
              "We couldn't update your information. Please try again later."
            )
          }
          className="px-4 py-2 bg-red-600 text-white rounded-lg ml-auto self-center"
        >
          Show Error Toast
        </Button>
      </section>

      <section className="flex items-center gap-4 bg-white px-12 py-6 rounded-[12px]">
        <UserAvatar className="size-19" />
        <div>
          <SectionTitle>Kayode White</SectionTitle>

          <p className="text-muted-foreground">Admin</p>
        </div>
      </section>

      <ScrollArea className="flex-1 min-h-0">
        <div className="space-y-6">
          <section className="bg-white p-6 rounded-[12px]">
            <PersonalInformationForm />
          </section>

          <section className="bg-white p-6 rounded-lg">
            <AddressInfoForm />
          </section>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ProfilePage;

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-semibold">{children}</h4>
);
