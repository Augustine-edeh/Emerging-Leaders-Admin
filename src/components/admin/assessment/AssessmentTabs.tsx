"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import SearchField from "@/components/admin/SearchField";
import { useState } from "react";
import FilterDropdown from "@/components/admin/analytics/FilterDropDown";
import UserReportTab from "./UserReportTab";
import AssessmentListTab from "./AssessmentListTab";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const AssessmentTabs = () => {
  const [activeTab, setActiveTab] = useState<"assessment-list" | "user-report">(
    "assessment-list"
  );

  return (
    <Tabs
      defaultValue="assessment-list"
      value={activeTab}
      onValueChange={(val) =>
        setActiveTab(val as "assessment-list" | "user-report")
      }
      className="flex-1"
    >
      <div className="flex justify-between items-center px-5 pt-4 pb-3.5">
        <TabsList className="bg-transparent gap-3">
          <TabsTrigger
            value="assessment-list"
            className={cn(
              "data-[state=active]:shadow-none",
              activeTab === "assessment-list" ? "text-primary" : ""
            )}
          >
            Assessment List
          </TabsTrigger>

          <Separator orientation="vertical" />
          <TabsTrigger
            value="user-report"
            className={cn(
              "data-[state=active]:shadow-none",
              activeTab === "user-report" ? "text-primary" : ""
            )}
          >
            User Report
          </TabsTrigger>
        </TabsList>

        <div className="flex items-center gap-4 text-muted-foreground">
          <SearchField className="rounded-[8px] pr-4 py-3" />

          <FilterDropdown />

          <Button
            variant="toolbar"
            className="group flex items-center gap-2 px-4 py-3"
          >
            <Image
              src="/icons/download.svg"
              alt="Download"
              width={24}
              height={24}
            />
            <span className="transition-colors group-hover:text-foreground">
              Download
            </span>
          </Button>
        </div>
      </div>

      {/* Assessment-list Tab */}
      <AssessmentListTab />

      {/* User-report  Tab */}
      <UserReportTab />
    </Tabs>
  );
};

export default AssessmentTabs;
