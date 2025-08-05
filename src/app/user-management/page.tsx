"use client";
import { Input } from "@/components/ui/input";
import { ListFilter, Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import SupportCountCard from "@/components/support/SupportCountCard";
import {
  SupportTicket,
  AdminUser,
  AdminStatus,
} from "@/lib/types";
import { useState } from "react";
import DeleteUserModal from "@/components/admin/DeleteUserModal";
import AdminTableFilter from "@/components/admin/AdminTableFilters";
import AdminManagementTable from "@/components/admin/AdminManagementTable";
import AddUserModal from "@/components/admin/AddUserModal";
import EditUserModal from "@/components/admin/EditUserModal";
import { Button } from "@/components/ui/button";
import DeactivateUserModal from "@/components/admin/DeactivateUserModal";
import ActivateUserModal from "@/components/admin/ActivateUserModal";
import ResendInviteModal from "@/components/admin/ResendInviteModal";

const UserManagementPage = () => {
  const [category, setCategory] = useState<AdminStatus | null>(null);
  const [openCloseTicket, setOpenCloseTicket] = useState(false);
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);
  const [openDeleteUser, setOpenDeleteUser] = useState(false);
  const [openDeactivateUser, setOpenDeactivateUser] = useState(false);
  const [openActivateUser, setOpenActivateUser] = useState(false);
  const [openAddUser, setOpenAddUser] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);
  const [openResendInvite, setOpenResendInvite] = useState(false);
  return (
    <div className="flex-1 flex flex-col gap-8 min-h-0">
      <section className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-foreground">
            Monitor, filter and manage users effectively
          </p>
        </div>
        <div className="mr-0 ml-auto">
          <Button className="bg-primary-500 text-white" 
          onClick={() => setOpenAddUser(true)}
          >Add User</Button>
        </div>
      </section>

      <section className="flex-1 min-h-0 flex flex-col rounded-xl border border-border-gray-300 bg-white shadow-2xs">
        <div className="flex justify-between items-center px-0 lg:px-6 py-3">
          <h4 className="font-semibold">Admin List</h4>

          <div className="flex items-stretch gap-4 px-0 lg:px-6 py-3">
            <div className="relative flex bg-secondary-50 group rounded-md border border-transparent focus-within:border-black hover:border-black transition-colors">
              <Label
                htmlFor="search"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-text-secondary group-hover:text-black group-focus-within:text-black"
              >
                <Search className="size-6" />
              </Label>

              <Input
                id="search"
                type="search"
                placeholder="Search by name, role, date added..."
                className="lg:w-2xs pl-10 border-none focus:outline-none bg-transparent"
              />
            </div>

            <div className="flex gap-3 px-4 bg-secondary-50 cursor-pointer rounded-md text-text-secondary hover:text-black">
              <AdminTableFilter onStatusChange={setCategory} />
            </div>
          </div>
        </div>

        <div className="flex-1 flex h-[560px] rounded-xl bg-white border border-border-gray-300 p-5">
          <AdminManagementTable
            category={category}
            setEditUser={setOpenEditUser}
            setSelectedUser={setSelectedUser}
            setOpenDeleteUser={setOpenDeleteUser}
            setOpenDeactivateUser={setOpenDeactivateUser}
            setOpenActivateUser={setOpenActivateUser}
            setOpenResendInvite={setOpenResendInvite}
          />
        </div>
      </section>
      <EditUserModal
        open={openEditUser}
        openOnchange={setOpenEditUser}
        setOpenDeleteModal={setOpenDeleteUser}
        selectedUser={selectedUser as AdminUser}
      />

    
      <DeleteUserModal
        open={openDeleteUser}
        openOnchange={setOpenDeleteUser}
        selectedUser={selectedUser as AdminUser}
      />

      <ActivateUserModal
        open={openActivateUser}
        openOnchange={setOpenActivateUser}
        selectedUser={selectedUser as AdminUser}
      />

      <DeactivateUserModal
        open={openDeactivateUser}
        openOnchange={setOpenDeactivateUser}
        selectedUser={selectedUser as AdminUser}
      />

      <ResendInviteModal
        open={openResendInvite}
        openOnchange={setOpenResendInvite}
        selectedUser={selectedUser as AdminUser}
      />


      
      <AddUserModal 
      open={openAddUser}
      openOnchange={setOpenAddUser}
      />
    </div>
  );
};

export default UserManagementPage;
