"use client";

import ContentManagementTable from "@/components/ContentManagementTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import UserRankingTable from "../analytics/UserRankingTable";

const AssessmentListTab = () => {
  return (
    <TabsContent value="assessment-list" className="flex-1 min-h-0 h-full">
      <Card className="h-full">
        <CardHeader className="flex justify-center items-center gap-[18px]">
          <Image src="/icons/star-badge.svg" alt="img" width={32} height={32} />
          <CardTitle className="text-2xl">Leaderboard</CardTitle>
          <Image src="/icons/star-badge.svg" alt="img" width={32} height={32} />
        </CardHeader>

        <CardContent className="grid gap-6 min-h-0 h-full">
          {/* TODO: add actual data sync-check condition */}
          {true ? <UserRankingTable /> : <ContentManagementTable />}
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default AssessmentListTab;
