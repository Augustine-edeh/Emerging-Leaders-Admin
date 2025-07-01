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
      const res = await axios.get("/api/invoices");
      setInvoices(res.data);
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

  return (
    // <div className="flex flex-col rounded-lg h-full">
    <>
      <ScrollArea className="h-full bg- red-300 rounded-md pr-2">
        <Table>
          <TableCaption className="sr-only">
            A list of all contents
          </TableCaption>

          <TableHeader className="bg-secondary-50 text-black">
            <TableRow>
              <TableHead className="">Invoice</TableHead>
              <TableHead className="">Status</TableHead>
              <TableHead className="">Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedInvoices.map((invoice, index) => (
              <TableRow
                key={`${invoice.invoice}-${index}`}
                // TODO: align row bg-colors to match design
                // className={getRowBgColor(invoice.paymentStatus)}
              >
                <TableCell>{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
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

      {/* Pagination Controls */}
      {/* <div className="flex justify-between items-center pt-2">
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
      </div> */}
    </>
  );
}

export default ContentManagementTable;
