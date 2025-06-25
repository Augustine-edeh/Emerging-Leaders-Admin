import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationUI = () => {
  return (
    <Pagination className="bg-blue-400">
      <PaginationContent className="gap-0 bg-orange-300">
        <PaginationItem className="bg-red-500 flex items-center">
          <PaginationPrevious href="#" />
        </PaginationItem>

        <PaginationItem className="bg-red-500">
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>

        <PaginationItem className="bg-red-500">
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>

        <PaginationItem className="bg-red-500 flex items-center">
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default PaginationUI;
