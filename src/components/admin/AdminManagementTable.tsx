"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

import { useState, useEffect } from "react";
import axios from "axios";
import NoContentData from "./NoContentData";
import AdminUserTableActions from "./AdminUserTableActions";
import {
  AdminUser,
  AdminStatus,
} from "@/lib/types";

const pageSize = 10;

// TODO: Replace with actual data from the database

const documents: AdminUser[] = [
  {
    userId: "1",
    firstName: "Jane",
    lastName: "Adebayo",
    email: "jane.adebayo@company.com",
    role: "System Administrator",
    status: AdminStatus.ACTIVE,
    createdAt: "2025-01-01",
    updatedAt: "2025-06-10",
  },
  {
    userId: "2",
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@company.com",
    role: "Content Manager",
    status: AdminStatus.ACTIVE,
    createdAt: "2025-01-02",
    updatedAt: "2025-06-11",
  },
  {
    userId: "3",
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@company.com",
    role: "User Manager",
    status: AdminStatus.INACTIVE,
    createdAt: "2025-01-03",
    updatedAt: "2025-06-12",
  },
  {
    userId: "4",
    firstName: "Mike",
    lastName: "Wilson",
    email: "mike.wilson@company.com",
    role: "Support Manager",
    status: AdminStatus.ACTIVE,
    createdAt: "2025-01-04",
    updatedAt: "2025-06-13",
  },
  {
    userId: "5",
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@company.com",
    role: "Analytics Manager",
    status: AdminStatus.PENDING,
    createdAt: "2025-01-05",
    updatedAt: "2025-06-14",
  },
  {
    userId: "6",
    firstName: "David",
    lastName: "Brown",
    email: "david.brown@company.com",
    role: "System Administrator",
    status: AdminStatus.DEACTIVATED,
    createdAt: "2025-01-06",
    updatedAt: "2025-06-15",
  },
  {
    userId: "7",
    firstName: "Lisa",
    lastName: "Anderson",
    email: "lisa.anderson@company.com",
    role: "Content Manager",
    status: AdminStatus.ACTIVE,
    createdAt: "2025-01-07",
    updatedAt: "2025-06-16",
  },
  {
    userId: "8",
    firstName: "Robert",
    lastName: "Taylor",
    email: "robert.taylor@company.com",
    role: "User Manager",
    status: AdminStatus.PENDING,
    createdAt: "2025-01-08",
    updatedAt: "2025-06-17",
  },
];
function AdminManagementTable({
  category,
  setEditUser,
  setSelectedUser,
  setOpenDeleteUser,
  setOpenDeactivateUser,
  setOpenActivateUser,
  setOpenResendInvite,
}: {
  category: AdminStatus | null;
  setEditUser: (open: boolean) => void;
  setSelectedUser: (ticket: AdminUser) => void;
  setOpenDeleteUser: (open: boolean) => void;
  setOpenDeactivateUser: (open: boolean) => void;
  setOpenActivateUser: (open: boolean) => void;
  setOpenResendInvite: (open: boolean) => void;
}) {
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Use demo data instead of fetching from API for now
  useEffect(() => {
    console.log("Setting admin users:", documents);
    if (category)
      setAdminUsers(documents.filter((item) => item.status === category));
    else setAdminUsers(documents);
  }, [category]);

  // Add this to see when the state changes
  useEffect(() => {
    console.log("adminUsers state changed:", adminUsers);
  }, [adminUsers]);

  const totalPages = Math.ceil(adminUsers.length / pageSize);
  const paginatedAdminUsers = adminUsers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const getStatusStyle = (status: AdminStatus) => {
    switch (status) {
      case AdminStatus.PENDING:
        return colors.gray;
      case AdminStatus.ACTIVE:
        return colors.blue;
      case AdminStatus.INACTIVE:
        return colors.orange;
      case AdminStatus.DEACTIVATED:
        return colors.red;
      default:
        return { bg: "transparent", txt: "black" };
    }
  };

  const handleStatusChange = (
    email: string,
    status: AdminStatus
  ) => {
    // Send update request to backend in the future
    setAdminUsers((prev) =>
      prev.map((user) =>
        user.email === email ? { ...user, status } : user
      )
    );
  };

  const tableHeaders = [
    "name",
    "email",
    "role",
    "Date Added",
    "Current Status",
    "Actions",
  ];

  const colors = {
    blue: { bg: "#E5F5FF", txt: "#407BFF" },
    orange: { bg: "#FFF3E0", txt: "#FB8C00" },
    gray: { bg: "#e5e7eb", txt: "#6b7280" },
    red: { bg: "#FEE2E2", txt: "#DC2626" },
  };

  return (
    <>
      {adminUsers.length > 0 ? (
        <ScrollArea className="h-full rounded-md pr-2 w-full">
          <Table>
            <TableCaption className="sr-only">
              A list of all admin users
            </TableCaption>

            <TableHeader className="bg-secondary-50 text-black">
              <TableRow>
                {tableHeaders.map((title) => (
                  <TableHead key={title} className="capitalize">
                    {title}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {adminUsers.map((user, index) => (
                <TableRow key={`${user?.email}-${index}`}>
                  <TableCell>{`${user?.firstName} ${user?.lastName}`}</TableCell>
                  <TableCell>{user?.email}</TableCell>
                  <TableCell>{user?.role}</TableCell>
                  <TableCell>{new Date(user?.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</TableCell>
                  <TableCell>
                    <Badge
                      style={{
                        backgroundColor: getStatusStyle(user.status).bg,
                        color: getStatusStyle(user.status).txt,
                      }}
                      className="text-sm font-medium px-2 py-1"
                    >
                      {user?.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <AdminUserTableActions
                      adminUser={user}
                      onStatusChange={handleStatusChange}
                      setEditUser={setEditUser}
                      setSelectedUser={setSelectedUser}
                      setOpenDeleteUser={setOpenDeleteUser}
                      setOpenDeactivateUser={setOpenDeactivateUser}
                      setOpenActivateUser={setOpenActivateUser}
                      setOpenResendInvite={setOpenResendInvite}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      ) : (
        <NoContentData />
      )}

      {/* Pagination Controls - Left commented intentionally */}
      {/* 
      <div className="flex justify-between items-center pt-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div> 
      */}
    </>
  );
}

export default AdminManagementTable;
