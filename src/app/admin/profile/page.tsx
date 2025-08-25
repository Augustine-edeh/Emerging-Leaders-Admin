import AddressInfoForm from "@/components/admin/profile/AddressInfoForm";
import BackButton from "@/components/admin/profile/BackButton";
import PersonalInformationForm from "@/components/admin/profile/PersonalInformationForm";
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
      </section>

      <section className="flex items-center gap-4 bg-white px-12 py-6 rounded-[12px]">
        <UserAvatar className="size-19" />
        <div>
          <SectionTitle>Kayode White</SectionTitle>

          <p className="text-muted-foreground">Admin</p>
        </div>
      </section>

      <ScrollArea className="flex-1 min-h-0 bg-orange-500">
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
