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

// import { useState, useEffect } from "react";
import clsx from "clsx";
import NoUserRankingData from "./NoUserRankingData";
import { userRankings } from "@/data/userRanking";

const UserRankingTable = () => {
  const tableHeaders = [
    "ranking",
    "name",
    "projects",
    "goals",
    "savings",
    "budget",
    "streak",
  ];

  return (
    <Table>
      <TableCaption className="sr-only">A list of user rankings</TableCaption>

      {/* Table Header */}
      <TableHeader className="text-black">
        <TableRow>
          {tableHeaders.map((title, index) => (
            <TableHead
              key={title}
              className={clsx(
                "capitalize bg-secondary-50 py-[18px]",
                index === 0 ? "rounded-tl-2xl w-24" : "",
                index === tableHeaders.length - 1 ? "rounded-tr-2xl" : ""
              )}
            >
              {title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      {/* Table Body */}
      {userRankings.length === 0 ? (
        <TableBody>
          <TableRow className="hover:bg-transparent">
            <TableCell colSpan={tableHeaders.length}>
              <NoUserRankingData />
            </TableCell>
          </TableRow>
        </TableBody>
      ) : (
        <TableBody>
          {userRankings.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.rank}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.projects}</TableCell>
              <TableCell>{user.goals}</TableCell>
              <TableCell>{user.savings.toLocaleString()}</TableCell>
              <TableCell>{user.budget}%</TableCell>
              <TableCell>{user.streak}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      )}
    </Table>
  );
};

export default UserRankingTable;
