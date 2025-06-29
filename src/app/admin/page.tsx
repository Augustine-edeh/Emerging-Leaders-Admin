import { Button } from "@/components/ui/button";
import ContentManagementTable from "@/components/ContentManagementTable";

const page = () => {
  return (
    <div className="flex-1 flex flex-col min-h-0 p-2 bg-gray-500">
      <section className="flex justify-between items-center bg-pink-400">
        <div>
          <h1 className="text-2xl font-bold">Content Management</h1>
          <p className="text-foreground">
            Monitor, filter, and manage contents effectively.
          </p>
        </div>
        <Button>Add New Content</Button>
      </section>

      <div className="flex-1 min-h-0 flex flex-col gap-2 bg-emerald-600 p-1 rounded-xl">
        <div className="flex justify-between bg-zinc-400">
          <h4 className="">Content List</h4>

          <div className="flex gap-2">
            <input type="text" placeholder="...Search" />
            <p>Filter</p>
          </div>
        </div>

        <div className="flex-1 min-h-0 rounded-t-xl bg-yellow-300 overflow- auto">
          {/* {Array.from({ length: 50 }, (_, index) => (
            <p key={index}>This is paragraph {index + 1}</p>
          ))} */}

          <ContentManagementTable />
        </div>
      </div>
    </div>
  );
};

export default page;
