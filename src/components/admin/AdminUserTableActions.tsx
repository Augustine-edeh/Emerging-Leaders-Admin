"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  MoreVertical,
  Eye,
  UserCheck,
  UserX,
  Trash,
  CircleArrowLeft,
  LucideStopCircle,
  StopCircleIcon,
  StopCircle,
  Ban,
  RefreshCcw,
  Loader2,
  Loader2Icon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdminUser, AdminStatus } from "@/types/types";
import { useState } from "react";

const AdminUserTableActions = ({
  adminUser,
  onStatusChange,
  setEditUser,
  setSelectedUser,
  setOpenDeleteUser,
  setOpenDeactivateUser,
  setOpenActivateUser,
  setOpenResendInvite,
}: {
  adminUser: AdminUser;
  onStatusChange: (email: string, status: AdminStatus) => void;
  setEditUser: (open: boolean) => void;
  setSelectedUser: (user: AdminUser) => void;
  setOpenDeleteUser: (open: boolean) => void;
  setOpenDeactivateUser: (open: boolean) => void;
  setOpenActivateUser: (open: boolean) => void;
  setOpenResendInvite: (open: boolean) => void;
}) => {
  const [selected, setSelected] = useState<AdminStatus>(adminUser.status);
  const [isOpen, setIsOpen] = useState(false);

  const handleEditUser = (adminUser: AdminUser) => {
    setSelectedUser(adminUser);
    setEditUser(true);
    console.log("Viewing admin user");
    setIsOpen(false);
  };

  const handleActivate = (adminUser: AdminUser) => {
    setSelectedUser(adminUser);
    setOpenActivateUser(true);
    // onStatusChange(adminUser.email, AdminStatus.ACTIVE);
    console.log("Activating admin user");
    setIsOpen(false);
  };

  const handleDeactivate = (adminUser: AdminUser) => {
    setSelectedUser(adminUser);
    setOpenDeactivateUser(true);
    // onStatusChange(adminUser.email, AdminStatus.DEACTIVATED);
    console.log("Deactivating admin user");
    setIsOpen(false);
  };

  const handleResendInvite = (adminUser: AdminUser) => {
    setSelectedUser(adminUser);
    setOpenResendInvite(true);
    console.log("Resending invite");
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
          onClick={() => handleEditUser(adminUser)}
          className="flex flex-row items-center gap-2.5"
        >
          <Eye />
          <p>Edit Admin Details</p>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => handleResendInvite(adminUser)}
          className="flex flex-row items-center gap-2.5"
        >
          <Loader2Icon />
          <p>Resend Invite</p>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {adminUser.status !== AdminStatus.DEACTIVATED ? (
          <DropdownMenuItem
            onClick={() => handleDeactivate(adminUser)}
            className="text-error flex flex-row items-center gap-2.5"
          >
            <Ban className="text-error" />
            <p>Deactivate Account</p>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem
            onClick={() => handleActivate(adminUser)}
            className="text-green-500 flex flex-row items-center gap-2.5"
          >
            <RefreshCcw className="text-green-500" />
            <p>Reactivate Account</p>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AdminUserTableActions;
