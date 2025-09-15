"use client";

import ContentManagementTable from "@/components/ContentManagementTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import UserRankingTable from "./UserRankingTable";
import SearchField from "../SearchField";
import { ListFilter } from "lucide-react";
import { useState } from "react";
import EmptyUserGrowthTab from "./EmptyUserGrowthTab";

const AnalyticsTabs = () => {
  type LabelType = "12-months" | "30-days" | "7-days";

  const [activeTab, setActiveTab] = useState("user-ranking");
  const [activeUserGrowthTab, setActiveUserGrowthTab] =
    useState<LabelType>("12-months");

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
      <TabsContent value="user-ranking" className="flex-1 min-h-0 h-full">
        <Card className="h-full">
          <CardHeader className="flex justify-center items-center gap-[18px]">
            <Image
              src="/icons/star-badge.svg"
              alt="img"
              width={32}
              height={32}
            />
            <CardTitle className="text-2xl">Leaderboard</CardTitle>
            <Image
              src="/icons/star-badge.svg"
              alt="img"
              width={32}
              height={32}
            />
          </CardHeader>

          <CardContent className="grid gap-6 min-h-0 h-full">
            {true ? <UserRankingTable /> : <ContentManagementTable />}
          </CardContent>
        </Card>
      </TabsContent>

      {/* User Growth Tab */}
      <TabsContent value="user-growth" className="flex-1 min-h-0 h-full">
        <Card className="h-full min-h-0 flex-1 relative">
          <CardHeader>
            <h2 className="text-2xl font-semibold mb-3">0</h2>
            <p>0% no records yet</p>
          </CardHeader>

          <CardContent className="grid gap-6 min-h-0 h-full">
            <Tabs
              defaultValue="12-months"
              value={activeUserGrowthTab}
              onValueChange={(val) => setActiveUserGrowthTab(val as LabelType)}
            >
              <TabsList className="absolute top-6 right-6">
                <TabsTrigger value="12-months">12 months</TabsTrigger>
                <TabsTrigger value="30-days">30 days</TabsTrigger>
                <TabsTrigger value="7-days">7 days</TabsTrigger>
              </TabsList>

              <TabsContent value="12-months" className="flex-1 min-h-0 h-96">
                <EmptyUserGrowthTab label={activeUserGrowthTab} />
              </TabsContent>
              <TabsContent value="30-days" className="flex-1 min-h-0 h-full">
                <EmptyUserGrowthTab label={activeUserGrowthTab} />
              </TabsContent>
              <TabsContent value="7-days" className="flex-1 min-h-0 h-full">
                <EmptyUserGrowthTab label={activeUserGrowthTab} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default AnalyticsTabs;
