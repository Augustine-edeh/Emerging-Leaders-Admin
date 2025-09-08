"use client";

import ContentManagementTable from "@/components/ContentManagementTable";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import UserRankingTable from "./UserRankingTable";
import SearchField from "../SearchField";
import { ListFilter } from "lucide-react";
import { useState } from "react";

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
          <TabsTrigger value="user-growth">User growth</TabsTrigger>
          <TabsTrigger value="user-ranking">User ranking</TabsTrigger>
        </TabsList>

        {/* Conditionally show toolbar only when activeTab is user-ranking */}
        {activeTab === "user-ranking" && (
          <div className="flex items-center gap-4 text-muted-foreground">
            <SearchField className="rounded-[8px] pr-4 py-3" />

            {/* Filter */}
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

            {/* Download */}
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

      {/* User Growth Tab */}
      <TabsContent value="user-growth">
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re
              done.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="tabs-demo-name">Name</Label>
              <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="tabs-demo-username">Username</Label>
              <Input id="tabs-demo-username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>

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
    </Tabs>
  );
};

export default AnalyticsTabs;
