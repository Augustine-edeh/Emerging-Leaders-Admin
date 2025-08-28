"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogPortal,
  DialogOverlay,
  DialogClose,
} from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { SupportTicket } from "@/types/types";
import { showSuccessToast } from "../ui/toasts";
import { X } from "lucide-react";

const ViewTicketModal = ({
  open,
  openOnchange,
  selectedTicket,
}: {
  open: boolean;
  openOnchange: (open: boolean) => void;
  selectedTicket: SupportTicket;
}) => {
  const handleOpenTicket = () => {
    console.log("Opening ticket");
    // Simulate success toast
    showSuccessToast(
      "Ticket opened successfully",
      `Your support ticket #${selectedTicket?.ticketId} has been opened and is now being reviewed by our support team.`
    );
    openOnchange(false);
  };

  return (
    <Dialog open={open} onOpenChange={openOnchange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/50" />
        <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[45vw] rounded-lg shadow-lg px-[70px] pt-[30px] pb-[60px] focus:outline-none">
          {/* Close button */}
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="flex ml-auto mb-5 text-primary hover:text-foreground transition"
              aria-label="Close"
            >
              <X className="size-5" />
            </Button>
          </DialogClose>

          {/* Title + Description */}
          <DialogTitle className="text-2xl font-bold mb-1">
            Ticket Details
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mb-6">
            View full information and progress on this support ticket.
          </DialogDescription>

          {/* Ticket Info */}
          <dl className="space-y-3 mb-6">
            <div className="flex gap-4">
              <dt className="w-[100px] text-sm font-medium text-muted-foreground">
                Ticket ID
              </dt>
              <dd className="text-sm">{selectedTicket?.ticketId}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-[100px] text-sm font-medium text-muted-foreground">
                Name
              </dt>
              <dd className="text-sm">{selectedTicket?.name}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-[100px] text-sm font-medium text-muted-foreground">
                Status
              </dt>
              <dd className="text-sm bg-secondary-50 text-muted-foreground px-4 py-1 rounded-md">
                {selectedTicket?.status}
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-[100px] text-sm font-medium text-muted-foreground">
                Date
              </dt>
              <dd className="text-sm">{selectedTicket?.date}</dd>
            </div>
          </dl>

          {/* Subject */}
          <div className="mb-4">
            <p className="text-sm font-medium mb-1">Subject</p>
            <p className="w-full p-3 bg-secondary-50 border border-[#DBDBD8] rounded-lg text-sm">
              {selectedTicket?.subject}
            </p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-sm font-medium mb-1">Description</p>
            <p className="w-full p-3 bg-secondary-50  border border-[#DBDBD8] rounded-lg text-sm">
              {selectedTicket?.description || "No description available"}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => openOnchange(false)}
              variant="outline"
              className="border border-primary hover:text-primary text-primary w-[48%] h-[52px]"
            >
              Cancel
            </Button>
            <Button onClick={handleOpenTicket} className="w-[48%] h-[52px]">
              Open Ticket
            </Button>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default ViewTicketModal;
