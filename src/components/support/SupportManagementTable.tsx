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
// import axios from "axios";
import NoContentData from "../admin/NoContentData";
import SupportTableActions from "./SupportTableActions";
import { SupportTicket, SupportTicketStatus } from "@/types/types";
import tickets from "@/data/tickets";

// const pageSize = 10;

const SupportManagementTable = ({
  category,
  setOpenCloseTicket,
  setSelectedTicket,
  setOpenDeleteTicket,
  setOpenViewTicket,
}: {
  category: SupportTicketStatus;
  setOpenCloseTicket: (open: boolean) => void;
  setSelectedTicket: (ticket: SupportTicket) => void;
  setOpenDeleteTicket: (open: boolean) => void;
  setOpenViewTicket: (open: boolean) => void;
}) => {
  const [supportTickets, setSupportTickets] = useState<SupportTicket[]>([]);
  // const [currentPage, setCurrentPage] = useState(1);

  // Use demo data instead of fetching from API for now
  useEffect(() => {
    console.log("Setting support tickets:", tickets);
    if (category && category !== SupportTicketStatus.ALL)
      setSupportTickets(tickets.filter((item) => item.status === category));
    else setSupportTickets(tickets);
  }, [category]);

  // Add this to see when the state changes
  useEffect(() => {
    console.log("supportTickets state changed:", supportTickets);
  }, [supportTickets]);

  // const totalPages = Math.ceil(supportTickets.length / pageSize);
  // const paginatedSupportTickets = supportTickets.slice(
  //   (currentPage - 1) * pageSize,
  //   currentPage * pageSize
  // );

  // const handlePrev = () => {
  //   setCurrentPage((prev) => Math.max(prev - 1, 1));
  // };

  // const handleNext = () => {
  //   setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  // };

  const getStatusStyle = (status: SupportTicketStatus) => {
    switch (status) {
      case SupportTicketStatus.PENDING:
        return colors.gray;
      case SupportTicketStatus.IN_PROGRESS:
        return colors.blue;
      case SupportTicketStatus.RESOLVED:
        return colors.green;
      default:
        return { bg: "transparent", txt: "black" };
    }
  };

  const handleStatuseChange = (
    ticketId: string,
    status: SupportTicketStatus
  ) => {
    // Send update request to backend in the future
    setSupportTickets((prev) =>
      prev.map((ticket) =>
        ticket.ticketId === ticketId ? { ...ticket, status } : ticket
      )
    );
  };

  const tableHeaders = [
    "ticket id",
    "date",
    "subject",
    "name",
    "status",
    "last update",
    "action",
  ];

  const colors = {
    blue: { bg: "#E5F5FF", txt: "#407BFF" },
    green: { bg: "#E5FBEC", txt: "#3DA755" },
    gray: { bg: "#e5e7eb", txt: "#6b7280" },
  };

  return (
    <>
      {supportTickets.length > 0 ? (
        <ScrollArea className="h-full rounded-md pr-2 w-full">
          <Table>
            <TableCaption className="sr-only">
              A list of all support tickets
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
              {supportTickets.map((content, index) => (
                <TableRow key={`${content.ticketId}-${index}`}>
                  <TableCell>{`#${content.ticketId}`}</TableCell>
                  <TableCell>{content.date}</TableCell>
                  <TableCell>{content.subject}</TableCell>
                  <TableCell>{content.name}</TableCell>
                  <TableCell>
                    <Badge
                      style={{
                        backgroundColor: getStatusStyle(content.status).bg,
                        color: getStatusStyle(content.status).txt,
                      }}
                      className="text-sm font-medium px-2 py-1"
                    >
                      {content.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{content.lastUpdate}</TableCell>
                  <TableCell>
                    <SupportTableActions
                      supportTicket={content}
                      onStatusChange={handleStatuseChange}
                      setOpenCloseTicket={setOpenCloseTicket}
                      setSelectedTicket={setSelectedTicket}
                      setOpenDeleteTicket={setOpenDeleteTicket}
                      setOpenViewTicket={setOpenViewTicket}
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
};

export default SupportManagementTable;
