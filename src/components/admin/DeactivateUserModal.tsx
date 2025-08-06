import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogPortal,
  DialogOverlay,
  // Close,
} from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { AdminUser } from "@/types/types";
// import { showErrorToast, showSuccessToast } from "../ui/toasts";
import { showErrorToast } from "../ui/toasts";

const DeactivateUserModal = ({
  open,
  openOnchange,
  selectedUser,
}: {
  open: boolean;
  openOnchange: (open: boolean) => void;
  selectedUser: AdminUser;
}) => {
  const handleDeactivateUser = () => {
    console.log("Deleting ticket");
    showErrorToast(
      "Failed to delete admin",
      `We couldn't remove ${selectedUser?.firstName} ${selectedUser?.lastName} from the admin list. Please try again later.`
    );
  };
  return (
    <>
      <Dialog open={open} onOpenChange={openOnchange}>
        <DialogPortal>
          <DialogTitle className="hidden">Deactivate Admin User</DialogTitle>
          <DialogOverlay className="fixed inset-0 bg-black/50" />
          <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[580px] rounded-lg shadow-lg">
            <DialogDescription>
              <div className="flex flex-col p-8">
                <div className="mx-auto">
                  <Image
                    src="/deactivate-user.png"
                    alt="delete-ticket"
                    width={240}
                    height={240}
                  />
                </div>
                <p className="m-0 text-2xl font-bold">Deactivate Admin User</p>
                <p className="text-sm m-0 mb-6">
                  Deactivating an admin will temporarily suspend their access.
                  You can reactivate their account at any time if access is
                  needed again.
                </p>
                <p className="text-lg font-semibold mb-6">
                  Are you sure you want to deactivate Admin{" "}
                  {selectedUser?.firstName} {selectedUser?.lastName}?
                </p>
                <div className="flex flex-row w-full gap-4 justify-center">
                  <Button
                    onClick={() => openOnchange(false)}
                    variant="ghost"
                    className="text-primary-500 cursor-pointer border border-border-secondary w-[48%] h-[52px]"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleDeactivateUser}
                    variant="default"
                    className="bg-red-600 text-white cursor-pointer w-[48%] h-[52px]"
                  >
                    Deactivate Admin
                  </Button>
                </div>
              </div>
            </DialogDescription>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </>
  );
};

export default DeactivateUserModal;
