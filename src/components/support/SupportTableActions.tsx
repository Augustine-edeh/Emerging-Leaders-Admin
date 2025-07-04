"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, CheckCircle, Eye, CrossIcon, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SupportTicket, SupportTicketStatus } from "@/lib/types";
import { useState } from "react";
import CloseTicketModal from "./CloseTicketModal";

const SupportTableActions = ({
  supportTicket,
  onStatusChange,
  setOpenCloseTicket,
  setSelectedTicket,
  setOpenDeleteTicket,
  setOpenViewTicket,
}: {
  supportTicket: SupportTicket;
  onStatusChange: (ticketId: string, status: SupportTicketStatus) => void;
  setOpenCloseTicket: (open: boolean) => void;
  setSelectedTicket: (ticket: SupportTicket) => void;
  setOpenDeleteTicket: (open: boolean) => void;
  setOpenViewTicket: (open: boolean) => void;
}) => {
  const [selected, setSelected] = useState<SupportTicketStatus>(
    supportTicket.status
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleView = (supportTicket: SupportTicket) => {
    setOpenViewTicket(true);
    setSelectedTicket(supportTicket);
    console.log("Viewing support ticket");
    setIsOpen(false);
  };

  const handleCloseTicket = (supportTicket: SupportTicket) => {
    setOpenCloseTicket(true);
    setSelectedTicket(supportTicket);
    console.log("Closing support ticket");
    setIsOpen(false);
  };

  const handleDelete = (ticketId: string) => {
    setOpenDeleteTicket(true);
    setSelectedTicket(supportTicket);
    console.log("Deleting support ticket");
    setIsOpen(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreVertical className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleView(supportTicket)}
          className="flex flex-row items-center gap-2.5"
        >
          <Eye />
          <p>View Ticket</p>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => handleCloseTicket(supportTicket)}
          className="flex flex-row items-center gap-2.5"
        >
          <CrossIcon />
          <p>Close Ticket</p>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => handleDelete(supportTicket.ticketId)}
          className="text-error flex flex-row items-center gap-2.5"
        >
          <Trash className="text-error" />
          <p>Delete Ticket</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SupportTableActions;
