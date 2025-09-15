"use client";

import { useState } from "react";
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
import { ListFilter } from "lucide-react";
import { Label } from "@/components/ui/label";

const FilterDropdown = () => {
  const [filters, setFilters] = useState({
    ranking: "highest-to-lowest",
    projects: "",
    goals: "",
    streak: "",
  });

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

      <DropdownMenuContent className="min-w-[350px] rounded-xl bg-popover text-popover-foreground shadow-[0px_8px_29px_0px_#5F5E5E30]">
        <Accordion type="single" collapsible>
          {/* Ranking */}
          <AccordionItem value="ranking" className="px-4">
            <AccordionTrigger className="font-normal hover:no-underline">
              Ranking
            </AccordionTrigger>
            <AccordionContent className="pl-[35px]">
              <RadioGroup
                value={filters.ranking}
                onValueChange={(value) =>
                  setFilters((prev) => ({ ...prev, ranking: value }))
                }
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="highest-to-lowest"
                    id="highest-to-lowest"
                  />
                  <Label htmlFor="highest-to-lowest">Highest to lowest</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="lowest-to-highest"
                    id="lowest-to-highest"
                  />
                  <Label htmlFor="lowest-to-highest">Lowest to highest</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>

          {/* Projects Completed */}
          <AccordionItem value="projects" className="px-4">
            <AccordionTrigger className="font-normal hover:no-underline">
              Projects Completed
            </AccordionTrigger>
            <AccordionContent className="pl-[35px]">
              <RadioGroup
                value={filters.projects}
                onValueChange={(value) =>
                  setFilters((prev) => ({ ...prev, projects: value }))
                }
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="0-20" id="0-20" />
                  <Label htmlFor="0-20">0-20</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="21-50" id="21-50" />
                  <Label htmlFor="21-50">21-50</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="51-above" id="51-above" />
                  <Label htmlFor="51-above">51 above</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>

          {/* Goals Completed */}
          <AccordionItem value="goals" className="px-4">
            <AccordionTrigger className="font-normal hover:no-underline">
              Goals Completed
            </AccordionTrigger>
            <AccordionContent className="pl-[35px]">
              <RadioGroup
                value={filters.goals}
                onValueChange={(value) =>
                  setFilters((prev) => ({ ...prev, goals: value }))
                }
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="0-100" id="0-100" />
                  <Label htmlFor="0-100">0-100</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="101-300" id="101-300" />
                  <Label htmlFor="101-300">101-300</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="301-above" id="301-above" />
                  <Label htmlFor="301-above">301 above</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>

          {/* Consistency Streak */}
          <AccordionItem value="streak" className="px-4">
            <AccordionTrigger className="font-normal hover:no-underline">
              Consistency Streak
            </AccordionTrigger>
            <AccordionContent className="pl-[35px]">
              <RadioGroup
                value={filters.streak}
                onValueChange={(value) =>
                  setFilters((prev) => ({ ...prev, streak: value }))
                }
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="0-20-days" id="0-20-days" />
                  <Label htmlFor="0-20-days">0-20 days</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="21-50-days" id="21-50-days" />
                  <Label htmlFor="21-50-days">21-50 days</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="51-above-days" id="51-above-days" />
                  <Label htmlFor="51-above-days">51 days above</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropdown;
