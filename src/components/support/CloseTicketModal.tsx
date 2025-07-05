import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogPortal, DialogOverlay, Close } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { SupportTicket } from "@/lib/types";
import { showErrorToast, showSuccessToast } from "../ui/toasts";

const CloseTicketModal = ({open, openOnchange, selectedTicket}:
    {open: boolean, openOnchange: (open: boolean) => void, selectedTicket: SupportTicket}) => {
        const handleCloseTicket = () => {
            console.log("Closing ticket");
            // Simulate success toast
            showSuccessToast("Ticket Closed Successfully", `Your support ticket #${selectedTicket?.ticketId} has been resolved and officially closed.`);
            openOnchange(false);
            // Maybe a function that updates the ticket status to closed
            // and then updates the ticket in the database
        }
    return ( 
        <>
        <Dialog open={open} onOpenChange={openOnchange}>
            <DialogPortal>
                <DialogTitle className="hidden">Close Ticket</DialogTitle>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[580px] rounded-lg shadow-lg">
                    <DialogDescription>
                        <div className="flex flex-col p-8">
                            <div className="mx-auto">
                            <Image src="/close-ticket.png" alt="close-ticket" width={240} height={240} />
                            </div>
                            <p className="m-0 text-2xl font-bold">Close Ticket</p>
                            <p className="text-sm m-0 mb-6">Closing this ticket confirms that the issue has been resolved.</p>
                            <p className="text-lg font-semibold mb-6">Are you sure you want to close ticket #{selectedTicket?.ticketId}?</p>
                            <div className="flex flex-row w-full gap-4 justify-center">
                                <Button onClick={() => openOnchange(false)} variant="ghost" className="text-primary-500 cursor-pointer border border-border-secondary w-[48%] h-[62px]">Cancel</Button>
                                <Button onClick={handleCloseTicket} variant="default" className="cursor-pointer w-[48%] h-[62px]">Close Ticket</Button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogContent>
            </DialogPortal>

        </Dialog>
        </>
     );
}
 
export default CloseTicketModal;