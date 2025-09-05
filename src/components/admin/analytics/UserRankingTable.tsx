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

import { Badge } from "@/components/ui/badge";

import { useState, useEffect } from "react";
import axios from "axios";
import TableActions from "@/components/admin/TableActions";
import NoUserRankingData from "./NoUserRankingData";
import clsx from "clsx";

interface Invoice {
  id: number;
  invoice: string;
  paymentStatus: string;
  totalAmount: string;
  paymentMethod: string;
}

const UserRankingTable = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

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

  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "archived":
        return colors.blue;
      case "published":
        return colors.green;
      case "draft":
        return colors.yellow;
      default:
        return { bg: "transparent", txt: "black" };
    }
  };

  const tableHeaders = [
    "ranking",
    "name",
    "projects completed",
    "goals completed",
    "consistensy streak",
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

  const colors = {
    blue: { bg: "#E5F5FF", txt: "#407BFF" },
    green: { bg: "#E5FBEC", txt: "#3DA755" },
    yellow: { bg: "#FFF7E5", txt: "#B36F09" },
  };

  return (
    <Table>
      <TableCaption className="sr-only">A list of all contents</TableCaption>

      <TableHeader className="text-black">
        <TableRow>
          {tableHeaders.map((title, index) => (
            <TableHead
              key={title}
              className={clsx(
                "capitalize bg-secondary-50 px-3 py-3",
                index === 0 ? "rounded-tl-2xl w-24" : "",
                index === tableHeaders.length - 1 ? "rounded-tr-2xl" : ""
              )}
            >
              {title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      {true ? (
        <TableBody>
          <TableRow>
            <TableCell colSpan={tableHeaders.length}>
              <NoUserRankingData />
            </TableCell>
          </TableRow>
        </TableBody>
      ) : (
        <TableBody>
          {documents.map((content, index) => (
            <TableRow key={`${content.title}-${index}`}>
              <TableCell>{content.title}</TableCell>
              <TableCell>{content.category}</TableCell>
              <TableCell>{content.author}</TableCell>
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
              <TableCell className="space-y-[4px]">
                <p className="text-text-secondary">
                  {content.fileUpdate.type}:
                </p>
                <p>
                  {content.fileUpdate.date} - {content.fileUpdate.time}
                </p>
              </TableCell>
              <TableCell>
                <TableActions />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      )}
    </Table>
  );
};

export default UserRankingTable;
