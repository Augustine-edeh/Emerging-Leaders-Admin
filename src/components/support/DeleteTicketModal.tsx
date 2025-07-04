import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogPortal, DialogOverlay, Close } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { SupportTicket } from "@/lib/types";
import { showErrorToast, showSuccessToast } from "../ui/toasts";

const DeleteTicketModal = ({open, openOnchange, selectedTicket}:
    {open: boolean, openOnchange: (open: boolean) => void, selectedTicket: SupportTicket}) => {
        const handleDeleteTicket = () => {
            console.log("Deleting ticket");
            showErrorToast("Ticket deleted failed");
        }
    return ( 
        <>
        <Dialog open={open} onOpenChange={openOnchange}>
            <DialogPortal>
                <DialogTitle className="hidden">Delete Support Ticket</DialogTitle>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[580px] rounded-lg shadow-lg">
                    <DialogDescription>
                        <div className="flex flex-col p-8">
                            <div className="mx-auto">
                            <Image src="/delete-ticket.png" alt="delete-ticket" width={240} height={240} />
                            </div>
                            <p className="m-0 text-2xl font-bold">Delete Ticket</p>
                            <p className="text-sm m-0 mb-6">Once deleted, this ticket will no longer be accessible.</p>
                            <p className="text-lg font-semibold mb-6">Are you sure you want to permanently delete ticket #{selectedTicket?.ticketId}?</p>
                            <div className="flex flex-row w-full gap-4 justify-center">
                                <Button onClick={() => openOnchange(false)} variant="ghost" className="text-primary-500 cursor-pointer border border-border-secondary w-[48%] h-[62px]">Cancel</Button>
                                <Button onClick={handleDeleteTicket} variant="default" className="bg-red-600 text-white cursor-pointer w-[48%] h-[62px]">Delete</Button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogContent>
            </DialogPortal>

        </Dialog>
        </>
     );
}
 
export default DeleteTicketModal;