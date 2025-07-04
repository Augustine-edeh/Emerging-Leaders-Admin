"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, CheckCircle, ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SupportTicket, SupportTicketStatus } from "@/lib/types";
import { useState } from "react";

const SupportTableFilter = ({onStatusChange}: 
  { onStatusChange: (status: SupportTicketStatus) => void
  }) => {
  const [selected, setSelected] = useState<SupportTicketStatus>();
  const [isOpen, setIsOpen] = useState(false);
  
  const applyStatus = (status: SupportTicketStatus) => {
    onStatusChange(status)
    setIsOpen(false);
  }
  
  const handleCancel = () => {
    setIsOpen(false); // Close dropdown after canceling
  }
  
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
        <ListFilter className="h-full" />
        <p className="h-full flex items-center">Filter</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setSelected(SupportTicketStatus.PENDING)}
          onSelect={(e) => e.preventDefault()}
          className="flex flex-row items-center gap-2.5"
        >
          <p>{SupportTicketStatus.PENDING} </p>
            <span>
              {selected === SupportTicketStatus.PENDING ? <CheckCircle color="#3DA755" /> : null}
            </span> 
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => setSelected(SupportTicketStatus.IN_PROGRESS)}
          onSelect={(e) => e.preventDefault()}
          className="flex flex-row items-center gap-2.5"
        >
          <p>{SupportTicketStatus.IN_PROGRESS} </p>
            <span>
              {selected === SupportTicketStatus.IN_PROGRESS ? <CheckCircle color="#3DA755" /> : null}
            </span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => setSelected(SupportTicketStatus.RESOLVED)}
          onSelect={(e) => e.preventDefault()}
          className="flex flex-row items-center gap-2.5"
        >
          <p>{SupportTicketStatus.RESOLVED} </p>
            <span>
              {selected === SupportTicketStatus.RESOLVED ? <CheckCircle color="#3DA755" /> : null}
            </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => setSelected(SupportTicketStatus.ALL)}
          onSelect={(e) => e.preventDefault()}
          className="flex flex-row items-center gap-2.5"
        >
          <p>{SupportTicketStatus.ALL} </p>
            <span>
              {selected === SupportTicketStatus.ALL ? <CheckCircle color="#3DA755" /> : null}
            </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div
          className="text-primary-500 p-2 flex items-center flex-row justify-around gap-2.5"
        >
          <Button variant="default" 
          onClick={() => applyStatus(selected as SupportTicketStatus)}
          className="cursor-pointer w-[99px] h-[32px]">
            <p>Apply</p>
          </Button>
          <Button variant="ghost" className="border cursor-pointer border-border-secondary w-[99px] h-[32px]" onClick={() => handleCancel()}>
            <p>Cancel</p>
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SupportTableFilter;
