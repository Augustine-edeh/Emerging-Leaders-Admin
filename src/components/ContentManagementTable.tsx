"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect } from "react";
import axios from "axios";
import NoContentData from "./admin/NoContentData";
import TableActions from "./admin/TableActions";

interface Invoice {
  id: number;
  invoice: string;
  paymentStatus: string;
  totalAmount: string;
  paymentMethod: string;
}

const pageSize = 10;

function ContentManagementTable() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const res = await axios.get("/api/invoices");
        setInvoices(res.data);
      } catch (error) {
        console.error("Failed to fetch invoices data:", error);
      }
    };

    fetchInvoices();
  }, []);

  const totalAmount = invoices.reduce((sum, item) => {
    return sum + parseFloat(item.totalAmount.replace("$", ""));
  }, 0);

  const totalPages = Math.ceil(invoices.length / pageSize);
  const paginatedInvoices = invoices.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const getRowBgColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "bg-green-50";
      case "pending":
        return "bg-yellow-50";
      case "unpaid":
        return "bg-red-50";
      default:
        return "";
    }
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const tableHeaders = [
    "title",
    "category",
    "author",
    "current status",
    "file updates",
    "action",
  ];

  const documents = [
    {
      title: "Leading with Vision",
      category: "Leadership",
      author: "Clare Brown",
      status: "Archived",
      fileUpdate: { type: "Created", date: "Jun 3, 2025", time: "02:15" },
    },
    {
      title: "Empowering Teams",
      category: "Leadership",
      author: "Jane Adebayo",
      status: "Published",
      fileUpdate: { type: "Modified", date: "Jun 10, 2025", time: "23:26" },
    },
    {
      title: "Own Your Voice",
      category: "Empowerment",
      author: "Clare Brown",
      status: "Published",
      fileUpdate: { type: "Created", date: "Jun 3, 2025", time: "13:15" },
    },
    {
      title: "Power Through Purpose",
      category: "Empowerment",
      author: "Clare Brown",
      status: "Published",
      fileUpdate: { type: "Created", date: "Jun 3, 2025", time: "09:42" },
    },
    {
      title: "Q2 Budgeting",
      category: "Finance",
      author: "Clare Brown",
      status: "Draft",
      fileUpdate: { type: "Created", date: "Jun 3, 2025", time: "10:37" },
    },
    {
      title: "Rise Beyond Limits",
      category: "Empowerment",
      author: "Clare Brown",
      status: "Draft",
      fileUpdate: { type: "Created", date: "Jun 3, 2025", time: "13:15" },
    },
    {
      title: "Expense Policy",
      category: "Finance",
      author: "Jane Adebayo",
      status: "Archived",
      fileUpdate: { type: "Modified", date: "Jun 10, 2025", time: "23:26" },
    },
    {
      title: "Revenue Forecast 2025",
      category: "Finance",
      author: "Jane Adebayo",
      status: "Archived",
      fileUpdate: { type: "Modified", date: "Jun 10, 2025", time: "23:26" },
    },
  ];

  return (
    <>
      {invoices.length > 0 ? (
        <ScrollArea className="h-full rounded-md pr-2 w-full">
          <Table>
            <TableCaption className="sr-only">
              A list of all contents
            </TableCaption>

            <TableHeader className="bg-secondary-50 text-black">
              <TableRow>
                {tableHeaders.map((title) => (
                  <TableHead key={title} className="Capitalize">
                    {title}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {documents.map((content, index) => (
                <TableRow
                  key={`${content.title}-${index}`}
                  // TODO: align row bg-colors to match design
                  // className={getRowBgColor(invoice.paymentStatus)}
                >
                  <TableCell>{content.title}</TableCell>
                  <TableCell>{content.category}</TableCell>
                  <TableCell>{content.author}</TableCell>
                  <TableCell>{content.status}</TableCell>
                  <TableCell>{content.fileUpdate.date}</TableCell>
                  <TableCell>
                    <TableActions />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">
                  ${totalAmount.toFixed(2)}
                </TableCell>
              </TableRow>
            </TableFooter>
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

export default ContentManagementTable;
