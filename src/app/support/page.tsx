import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ContentManagementTable from "@/components/ContentManagementTable";
import { ListFilter, Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import SupportCountCard from "@/components/support/SupportCountCard";
import SupportManagementTable from "@/components/support/SupportManagementTable";

const SupportManagementPage = () => {
    const supportCount = [
        {
            id: 1,
            title: "Total complaints",
            count: 100,
        },
        {
            id: 2,
            title: "Resolved complaints",
            count: 50,
        },
        {
            id: 3,
            title: "Pending complaints",
            count: 20,
        },
        {
            id: 4,
            title: "In progress complaints",
            count: 30,
        },
    ]
  return (
    <div className="flex-1 flex flex-col gap-8 min-h-0">
      <section className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Support Ticket</h1>
          <p className="text-foreground">
            All submitted issues and inquiries in one place
          </p>
        </div>
      </section>

      <section className="flex flex-row gap-4">
        {supportCount.map((item, index) => (
            <SupportCountCard  
            key={index}
            title={item.title}
            count={item.count}
            />
        ))}

      </section>

      <section className="flex-1 min-h-0 flex flex-col rounded-xl border border-border-gray-300 bg-white shadow-2xs">
        <div className="flex justify-between items-center px-0 lg:px-6 py-3">
          <h4 className="">Ticket List</h4>

          <div className="flex items-stretch gap-4 px-0 lg:px-6 py-3">
            <div className="relative flex bg-secondary-50 group rounded-md border border-transparent focus-within:border-black hover:border-black transition-colors">
              <Label
                htmlFor="search"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-text-secondary group-hover:text-black group-focus-within:text-black"
              >
                <Search className="size-6" />
              </Label>

              <Input
                id="search"
                type="search"
                placeholder="Search by id, date..."
                className="lg:w-2xs pl-10 border-none focus:outline-none bg-transparent"
              />
            </div>

            <div className="flex gap-3 px-4 bg-secondary-50 cursor-pointer rounded-md text-text-secondary hover:text-black">
              <ListFilter className="h-full" />
              <p className="h-full flex items-center">Filter</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex min-h-0 rounded-xl bg-white border border-border-gray-300 p-5">
          <SupportManagementTable />
        </div>
      </section>
    </div>
  );
};

export default SupportManagementPage;
