import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogPortal, DialogOverlay, Close } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { SupportTicket } from "@/lib/types";
import { showErrorToast, showSuccessToast } from "../ui/toasts";

const ViewTicketModal = ({open, openOnchange, selectedTicket}:
    {open: boolean, openOnchange: (open: boolean) => void, selectedTicket: SupportTicket}) => {
        const handleOpenTicket = () => {
            console.log("Opening ticket");
            // Simulate success toast
            showSuccessToast("Ticket opened successfully", `Your support ticket #${selectedTicket?.ticketId} has been opened and is now being reviewed by our support team.`);
            openOnchange(false);
        }
    return ( 
        <>
        <Dialog open={open} onOpenChange={openOnchange}>
            <DialogPortal>
                <DialogTitle className="hidden">View Ticket</DialogTitle>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[580px] rounded-lg shadow-lg">
                    <DialogDescription>
                        <div className="flex flex-col p-8">
                            <p className="m-0 text-2xl font-bold">Ticket Details</p>
                            <p className="text-sm m-0 mb-6">View full information and progress on this support ticket.</p>
                            <div className="flex flex-col gap-4 mb-4">
                                <div className="flex flex-row gap-4">
                                    <p className="text-sm m-0 w-[100px]">Ticket ID</p>
                                    <p className="text-sm m-0">{selectedTicket?.ticketId}</p>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <p className="text-sm m-0 w-[100px]">Name</p>
                                    <p className="text-sm m-0">{selectedTicket?.name}</p>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <p className="text-sm m-0 w-[100px]">Status</p>
                                    <p className="text-sm m-0">{selectedTicket?.status}</p>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <p className="text-sm m-0 w-[100px]">Date</p>
                                    <p className="text-sm m-0">{selectedTicket?.date}</p>
                                </div>
                            </div>
                            <div className="flex flex-col w-full mb-4 gap-4">
                                <p className="text-sm m-0">Subject</p>
                                <p className="w-full p-3 bg-gray-200 rounded-lg text-sm m-0">{selectedTicket?.subject}</p>
                            </div>
                            <div className="flex flex-col mb-4 gap-4">
                                <p className="text-sm m-0">Description</p>
                                <p className="w-full p-3 bg-gray-200 rounded-lg text-sm m-0">{selectedTicket?.description ? selectedTicket?.description : "No description available"}</p>
                            </div>
                            <div className="flex flex-row w-full gap-4 justify-center">
                                <Button onClick={() => openOnchange(false)} variant="ghost" className="text-primary-500 cursor-pointer border border-border-secondary w-[48%] h-[62px]">Cancel</Button>
                                <Button onClick={handleOpenTicket} variant="default" className="cursor-pointer w-[48%] h-[62px]">Open Ticket</Button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogContent>
            </DialogPortal>

        </Dialog>
        </>
     );
}
 
export default ViewTicketModal;