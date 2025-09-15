"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import SearchField from "../SearchField";
import { ListFilter } from "lucide-react";
import { useState } from "react";
import UserGrowthTab from "./UserGrowthTab";
import UserRankingTab from "./UserRankingTab";
import FilterDropdown from "./FilterDropDown";

const AnalyticsTabs = () => {
  const [activeTab, setActiveTab] = useState("user-ranking");

  return (
    <Tabs
      defaultValue="user-ranking"
      value={activeTab}
      onValueChange={setActiveTab}
      className="flex-1"
    >
      <div className="flex justify-between items-center px-5 pt-4 pb-3.5">
        <TabsList>
          <TabsTrigger value="user-ranking">User ranking</TabsTrigger>
          <TabsTrigger value="user-growth">User growth</TabsTrigger>
        </TabsList>

        {/* Conditionally show toolbar only when activeTab is user-ranking */}
        {activeTab === "user-ranking" && (
          <div className="flex items-center gap-4 text-muted-foreground">
            <SearchField className="rounded-[8px] pr-4 py-3" />

            {/* <Button
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
            </Button> */}
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
        )}
      </div>

      {/* User Ranking Tab */}
      <UserRankingTab />

      {/* User Growth Tab */}
      <UserGrowthTab />
    </Tabs>
  );
};

export default AnalyticsTabs;
