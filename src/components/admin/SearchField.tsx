"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const SearchField = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <div className="relative w-full max-w-sm">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
        size={24}
        aria-hidden="true"
      />
      <Input
        ref={ref}
        type="text"
        placeholder="Search by user..."
        className={cn(
          "pl-[52px] bg-secondary-50 placeholder:text-gray-500",
          className
        )} // By default the input element has padding-left of 52px to accommodate the search icon
        {...props}
      />
    </div>
  );
});

SearchField.displayName = "SearchField";

export default SearchField;
