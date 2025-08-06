"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { CheckCircle, ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdminStatus } from "@/types/types";
import { useState } from "react";

const AdminTableFilter = ({
  onStatusChange,
}: {
  onStatusChange: (status: AdminStatus) => void;
}) => {
  const [selected, setSelected] = useState<AdminStatus>();
  const [isOpen, setIsOpen] = useState(false);

  const applyStatus = (status: AdminStatus) => {
    onStatusChange(status);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false); // Close dropdown after canceling
  };

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
          onClick={() => setSelected(AdminStatus.PENDING)}
          onSelect={(e) => e.preventDefault()}
          className="flex flex-row items-center gap-2.5"
        >
          <p>{AdminStatus.PENDING} </p>
          <span>
            {selected === AdminStatus.PENDING ? (
              <CheckCircle color="#3DA755" />
            ) : null}
          </span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => setSelected(AdminStatus.ACTIVE)}
          onSelect={(e) => e.preventDefault()}
          className="flex flex-row items-center gap-2.5"
        >
          <p>{AdminStatus.ACTIVE} </p>
          <span>
            {selected === AdminStatus.ACTIVE ? (
              <CheckCircle color="#3DA755" />
            ) : null}
          </span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => setSelected(AdminStatus.INACTIVE)}
          onSelect={(e) => e.preventDefault()}
          className="flex flex-row items-center gap-2.5"
        >
          <p>{AdminStatus.INACTIVE} </p>
          <span>
            {selected === AdminStatus.INACTIVE ? (
              <CheckCircle color="#3DA755" />
            ) : null}
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => setSelected(AdminStatus.DEACTIVATED)}
          onSelect={(e) => e.preventDefault()}
          className="flex flex-row items-center gap-2.5"
        >
          <p>{AdminStatus.DEACTIVATED} </p>
          <span>
            {selected === AdminStatus.DEACTIVATED ? (
              <CheckCircle color="#3DA755" />
            ) : null}
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="text-primary-500 p-2 flex items-center flex-row justify-around gap-2.5">
          <Button
            variant="default"
            onClick={() => applyStatus(selected as AdminStatus)}
            className="cursor-pointer w-[99px] h-[32px]"
          >
            <p>Apply</p>
          </Button>
          <Button
            variant="ghost"
            className="border cursor-pointer border-border-secondary w-[99px] h-[32px]"
            onClick={() => handleCancel()}
          >
            <p>Cancel</p>
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AdminTableFilter;
