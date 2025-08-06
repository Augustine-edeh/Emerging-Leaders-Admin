"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogPortal,
  DialogOverlay,
  // Close,
} from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
// import Image from "next/image";
// import { AdminUser } from "@/types/types";
// import { showErrorToast, showSuccessToast } from "../ui/toasts";
import { showSuccessToast } from "../ui/toasts";
// import { v4 as uuidv4 } from "uuid";

const AddUserModal = ({
  open,
  openOnchange,
}: {
  open: boolean;
  openOnchange: (open: boolean) => void;
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const handleCreateAdmin = () => {
    console.log("Creating admin");
    // Simulate success toast
    showSuccessToast(
      "New Admin Created",
      "An activation email has been sent to the user."
    );
    openOnchange(false);

    // Maybe a function that updates the ticket status to closed
    // and then updates the ticket in the database

    // clear out values
    setFirstName("");
    setEmail("");
    setLastName("");
  };
  const activateButton = () => {
    return firstName.length > 0 && lastName.length > 0 && email.length > 0;
  };
  return (
    <>
      <Dialog open={open} onOpenChange={openOnchange}>
        <DialogPortal>
          <DialogTitle className="hidden">Close Ticket</DialogTitle>
          <DialogOverlay className="fixed inset-0 bg-black/50" />
          <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[580px] rounded-lg shadow-lg">
            <DialogDescription className="sr-only">
              Create Admin User
            </DialogDescription>

            <div className="flex gap-8 flex-col p-12">
              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-medium">Create Admin User</h1>
                <p className="text-sm text-gray-500">
                  Enter the details below to set up a new admin
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-[5%]">
                  <div className="flex flex-col gap-2 w-[47.5%]">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      {`User's First Name`}
                    </label>
                    <input
                      className="border border-gray-300 rounded-md p-2 px-4 placeholder:text-sm"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      id="firstName"
                      placeholder="Enter admin's first name"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-[47.5%]">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      {`User's Last Name`}
                    </label>
                    <input
                      className="border border-gray-300 rounded-md p-2 px-4 placeholder:text-sm"
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter admin's last name"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="border border-gray-300 rounded-md p-2 placeholder:text-sm"
                    type="email"
                    id="email"
                    placeholder="Enter admin's email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <Button
                disabled={!activateButton()}
                className="bg-primary-500 w-full mt-4 text-white"
                onClick={handleCreateAdmin}
              >
                Create Admin
              </Button>
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </>
  );
};

export default AddUserModal;
