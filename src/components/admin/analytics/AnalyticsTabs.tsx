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

const AnalyticsTabs = () => {
  return (
    // <>
    // {/* <div className="flex w-full flex-col flex-1 gap-6"> */}
    <Tabs defaultValue="user-ranking" className="flex-1">
      <div className="flex justify-between items-center px-5 pt-4 pb-3.5">
        <TabsList className="">
          <TabsTrigger value="user-growth">User growth</TabsTrigger>
          <TabsTrigger value="user-ranking">User ranking</TabsTrigger>
        </TabsList>

        <div className="flex">
          <Input type="text" placeholder="Search" className="max-w-sm pl-8" />
        </div>
      </div>

      {/* User Growth Tab */}
      <TabsContent value="user-growth" className="">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
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
      <TabsContent
        value="user-ranking"
        className="flex-1 min-h-0 h-full bg-blue-600 p-1"
      >
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

            {/* <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription> */}
          </CardHeader>

          <CardContent className="grid gap-6 bg-red-500  min-h-0 h-full">
            {/* <p>Hello World</p> */}
            {true ? <UserRankingTable /> : <ContentManagementTable />}

            {/* <ContentManagementTable /> */}
          </CardContent>
          {/* <CardFooter></CardFooter> */}
        </Card>
      </TabsContent>
    </Tabs>
    // {/* </div> */}
    // {/* </> */}
  );
};

export default AnalyticsTabs;
