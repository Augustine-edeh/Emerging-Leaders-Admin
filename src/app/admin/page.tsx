import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ContentManagementTable from "@/components/ContentManagementTable";
import { ListFilter, Search } from "lucide-react";
import { Label } from "@/components/ui/label";

const ContentManagementPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-8 min-h-0">
      <section className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Content Management</h1>
          <p className="text-foreground">
            Monitor, filter, and manage contents effectively.
          </p>
        </div>
        <Button>Add New Content</Button>
      </section>

      <section className="flex-1 min-h-0 flex flex-col rounded-xl border border-border-secondary bg-white shadow-2xs">
        <div className="flex justify-between items-center px-0 lg:px-6 py-3">
          <h4 className="">Content List</h4>

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
                placeholder="Search by title, category..."
                className="lg:w-2xs pl-10 border-none focus:outline-none bg-transparent"
              />
            </div>

            <div className="flex gap-3 px-4 bg-secondary-50 cursor-pointer rounded-md text-text-secondary hover:text-black">
              <ListFilter className="h-full" />
              <p className="h-full flex items-center">Filter</p>
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
