import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PaginationUI = () => {
  return (
    <Pagination>
      <PaginationContent>
        {/* <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem> */}

        <PaginationItem>
          <ChevronLeft />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <ChevronRight />
        </PaginationItem>

        {/* <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem> */}
      </PaginationContent>
    </Pagination>
  );
};
export default PaginationUI;
