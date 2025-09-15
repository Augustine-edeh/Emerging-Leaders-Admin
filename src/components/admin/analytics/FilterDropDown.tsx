"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { ChevronDown, ListFilter } from "lucide-react";
import { Label } from "@/components/ui/label";

const FilterDropdown = () => {
  const [ranking, setRanking] = React.useState("highest");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="toolbar"
          className="group flex items-center gap-2 px-4 py-3"
        >
          <ListFilter
            size={24}
            className="transition-colors group-hover:text-foreground"
          />
          <span className="transition-colors group-hover:text-foreground">
            Filter
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64 p-2">
        {/* Accordion for collapsible filter sections */}
        <Accordion type="single" collapsible>
          {/* Ranking Section */}
          <AccordionItem value="ranking">
            <AccordionTrigger>Ranking</AccordionTrigger>
            <AccordionContent>
              <RadioGroup
                value={ranking}
                onValueChange={setRanking}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="highest" id="highest" />
                  <Label htmlFor="highest">Highest to lowest</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="lowest" id="lowest" />
                  <Label htmlFor="lowest">Lowest to highest</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>

          {/* Add more sections like Date, Category, etc. */}
        </Accordion>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropdown;
