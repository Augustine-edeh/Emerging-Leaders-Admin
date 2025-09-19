"use client";

import { assessmentListData } from "@/data/assessmentListData"; // <- your mock data file
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EllipsisVertical } from "lucide-react";

const AssessmentTable = () => {
  const handleView = (id: string) => {
    console.log("View assessment:", id);
    // TODO: onview assessment, show modal withassessment details
  };

  const handleDelete = (id: string) => {
    console.log("Delete assessment:", id);
    // TODO: ondelete assessment, open/show confirmation modal and then delete
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="bg-secondary-50 pl-[25px] py-[18px] rounded-tl-2xl">
            Title
          </TableHead>
          <TableHead className="bg-secondary-50 py-[18px]">
            Total Users
          </TableHead>
          <TableHead className="bg-secondary-50 py-[18px]">Filled</TableHead>
          <TableHead className="bg-secondary-50 py-[18px]">
            Not Filled
          </TableHead>
          <TableHead className="bg-secondary-50 py-[18px] rounded-tr-2xl">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {assessmentListData.map((assessment) => (
          <TableRow key={assessment.id}>
            <TableCell className="font-medium pl-[25px]">
              {assessment.title}
            </TableCell>
            <TableCell>{assessment.totalUser}</TableCell>
            <TableCell>{assessment.filled}</TableCell>
            <TableCell>{assessment.notFilled}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <EllipsisVertical />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleView(assessment.id)}>
                    View Assessment
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-red-600"
                    onClick={() => handleDelete(assessment.id)}
                  >
                    Delete Assessment
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AssessmentTable;
