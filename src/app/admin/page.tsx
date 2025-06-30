import { Button } from "@/components/ui/button";
import ContentManagementTable from "@/components/ContentManagementTable";

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

      <section className="flex-1 min-h-0 flex flex-col gap-2 pb-2 bg-lime-600 rounded-xl border border-border-secondary">
        <div className="flex justify-between px-6 py-2.5">
          <h4 className="">Content List</h4>

          <div className="flex gap-2">
            <input type="text" placeholder="...Search" />
            <p>Filter</p>
          </div>
        </div>

        <div className="flex-1 min-h-0 rounded-xl bg-white border border-border-secondary p-5">
          {/* {Array.from({ length: 50 }, (_, index) => (
            <p key={index}>This is paragraph {index + 1}</p>
          ))} */}

          <ContentManagementTable />
        </div>
      </section>
    </div>
  );
};

export default ContentManagementPage;
