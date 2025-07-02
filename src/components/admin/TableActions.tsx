import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Archive, MoreVertical, PenLine, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const TableActions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreVertical className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => console.log("View")}
          className="flex items-center gap-2.5"
        >
          <PenLine />
          <p>Edit Content</p>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => console.log("Edit")}
          className="flex items-center gap-2.5"
        >
          <Archive />
          <p>Archive Content</p>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => console.log("Delete")}
          className="text-error flex items-center gap-2.5"
        >
          <Trash2 color="#E81313" />
          <p>Delete Content</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableActions;
