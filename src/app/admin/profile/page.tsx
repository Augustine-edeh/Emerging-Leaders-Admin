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
          <h3>My Profile</h3>
          <p>Your personal and professional details at a glance</p>
        </div>
      </div>

      <section className="flex items-center gap-4 bg-white px-6 py-3 rounded-lg">
        <UserAvatar className="size-18" />
        <div>
          <h4>Kayode White</h4>
          <p>Admin</p>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <h4>Personal Information</h4>
          <Button
            variant={"outline"}
            size="sm"
            className="text-muted-foreground rounded-2xl"
          >
            <PencilLine />
            Edit
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
      </section>

      <section className="bg-white p-6 rounded-lg">
        <h4>Address</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
      </section>
    </div>
  );
};

export default ProfilePage;
