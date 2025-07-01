import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ContentManagementTable from "@/components/ContentManagementTable";
import { ListFilter, Search } from "lucide-react";
import { Label } from "@/components/ui/label";

const ContentManagementPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-8 min-h-0 bg-gray-500 pb-2">
      <section className="flex justify-between items-center bg-pink-400">
        <div>
          <h1 className="text-2xl font-bold">Content Management</h1>
          <p className="text-foreground">
            Monitor, filter, and manage contents effectively.
          </p>
        </div>
        <Button>Add New Content</Button>
      </section>

      <section className="flex-1 min-h-0 flex flex-col gap- 2 pb-2 bg-lime-600 rounded-xl border border-border-secondary">
        <div className="flex justify-between items-center px-0 lg:px-6 py-3 bg-yellow-300">
          <h4 className="">Content List</h4>

          <div className="flex items-center gap-4 bg-red-500">
            <div className="relative flex bg-blue-500">
              <Label
                htmlFor="search"
                className="absolute bg-green-400 left-2 top-1/2 -translate-y-1/2"
              >
                <Search className="size-6" />
              </Label>

              <Input
                id="search"
                type="search"
                placeholder="Search by title, category..."
                className="lg:w-2xs pl-10"
              />
            </div>

            <div className="flex gap-3 bg-blue-500 h-full">
              <ListFilter />
              <p>Filter</p>
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-0 rounded-xl bg-white border border-border-secondary p-5">
          <ContentManagementTable />
        </div>
      </section>
    </div>
  );
};

export default ContentManagementPage;
