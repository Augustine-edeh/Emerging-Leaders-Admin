import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogPortal, DialogOverlay, Close } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { AdminUser } from "@/lib/types";
import { showErrorToast, showSuccessToast } from "../ui/toasts";

const ActivateUserModal = ({open, openOnchange, selectedUser}:
    {open: boolean, openOnchange: (open: boolean) => void, selectedUser: AdminUser}) => {
        const handleActivateUser = () => {
            console.log("Deleting ticket");
            showErrorToast("Failed to delete admin", `We couldn't remove ${selectedUser?.firstName} ${selectedUser?.lastName} from the admin list. Please try again later.`);
        }
    return ( 
        <>
        <Dialog open={open} onOpenChange={openOnchange}>
            <DialogPortal>
                <DialogTitle className="hidden">Reactivate Admin User</DialogTitle>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[580px] rounded-lg shadow-lg">
                    <DialogDescription>
                        <div className="flex flex-col p-8">
                            <div className="mx-auto">
                            <Image src="/reactivate-user.png" alt="delete-ticket" width={240} height={240} />
                            </div>
                            <p className="m-0 text-2xl font-bold">Reactivate Admin User</p>
                            <p className="text-sm m-0 mb-6">Reactivating an admin will restore their access immediately. They can now log in and manage the platform as before.</p>
                            <p className="text-lg font-semibold mb-6">Are you sure you want to reactivate Admin {selectedUser?.firstName} {selectedUser?.lastName}?</p>
                            <div className="flex flex-row w-full gap-4 justify-center">
                                <Button onClick={() => openOnchange(false)} variant="ghost" className="text-primary-500 cursor-pointer border border-border-secondary w-[48%] h-[52px]">Cancel</Button>
                                <Button onClick={handleActivateUser} variant="default" className="bg-red-600 text-white cursor-pointer w-[48%] h-[52px]">Reactivate Admin</Button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogContent>
            </DialogPortal>

        </Dialog>
        </>
     );
}
 
export default ActivateUserModal;