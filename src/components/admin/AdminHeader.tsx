import { Separator } from "@/components/ui/separator";
import UserMenu from "@/components/admin/header/UserMenu";
import NotificationMenu from "./header/NotificationMenu";

const AdminHeader = () => {
  return (
    <header className="flex justify-end items-center gap-2 px-8 py-6 w-full bg-white left-auto">
      <NotificationMenu />

      <Separator orientation="vertical" />

      <div className="flex items-center gap-2">
        <UserMenu />
      </div>
    </header>
  );
};

export default AdminHeader;
