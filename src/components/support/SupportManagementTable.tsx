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
import NoContentData from "../admin/NoContentData";
import TableActions from "../admin/TableActions";

interface SupportTicket {
  ticketId: string;
  date: string;
  subject: string;
  name: string;
  status: string;
  lastUpdate: string;
}

const pageSize = 10;

const documents = [
  {
    ticketId: "1234567890",
    date: "2025-01-01",
    subject: "System Login Issues",
    name: "Jane Adebayo", 
    status: "In Progress",
    lastUpdate: "Jun 10, 2025",
  },
  {
    ticketId: "1234567891",
    date: "2025-01-02",
    subject: "Password Reset Request",
    name: "John Smith",
    status: "Pending",
    lastUpdate: "Jun 11, 2025",
  },
  {
    ticketId: "1234567892",
    date: "2025-01-03",
    subject: "Email Configuration Problem",
    name: "Sarah Johnson",
    status: "Resolved",
    lastUpdate: "Jun 12, 2025",
  },
  {
    ticketId: "1234567893",
    date: "2025-01-04",
    subject: "Database Connection Error",
    name: "Mike Wilson",
    status: "In Progress",
    lastUpdate: "Jun 13, 2025",
  },
  {
    ticketId: "1234567894",
    date: "2025-01-05",
    subject: "File Upload Issues",
    name: "Emily Davis",
    status: "Pending",
    lastUpdate: "Jun 14, 2025",
  },
  {
    ticketId: "1234567895",
    date: "2025-01-06",
    subject: "API Integration Problem",
    name: "David Brown",
    status: "Resolved",
    lastUpdate: "Jun 15, 2025",
  },
  {
    ticketId: "1234567896",
    date: "2025-01-07",
    subject: "Mobile App Crash",
    name: "Lisa Anderson",
    status: "In Progress",
    lastUpdate: "Jun 16, 2025",
  },
  {
    ticketId: "1234567897",
    date: "2025-01-08",
    subject: "Payment Gateway Error",
    name: "Robert Taylor",
    status: "Pending",
    lastUpdate: "Jun 17, 2025",
  },
];
function SupportManagementTable() {
  const [supportTickets, setSupportTickets] = useState<SupportTicket[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Use demo data instead of fetching from API for now
  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const res = await axios.get("/api/support-tickets");
        setSupportTickets(res.data);
      } catch (error) {
        console.error("Failed to fetch support tickets data:", error);
      }
    };

    console.log(documents);
    setSupportTickets(documents);
  }, []);
  console.log(supportTickets);

  const totalPages = Math.ceil(supportTickets.length / pageSize);
  const paginatedSupportTickets = supportTickets.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return colors.gray;
      case "in progress":
        return colors.blue;
      case "resolved":
        return colors.green;
      default:
        return { bg: "transparent", txt: "black" };
    }
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
                  <TableCell>{content.ticketId}</TableCell>
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
                    <TableActions />
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

export default SupportManagementTable;
