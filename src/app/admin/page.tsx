import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="flex flex-col gap-8 p-2 bg-gray-500 h-full">
      <section className="flex justify-between items-center bg-pink-400">
        <div>
          <h1>Content Management</h1>
          <p>Monitor, filter, and manage contents effectively.</p>
        </div>
        <Button>Add New Content</Button>
      </section>

      <div className="flex-1 fle bg-emerald-600">
        <div className="flex justify-between bg-zinc-400">
          <h4>Content List</h4>

          <div className="flex gap-2">
            <input type="text" placeholder="...Search" />
            <p>Filter</p>
          </div>
        </div>

        <p>Content List</p>
      </div>
    </div>
  );
};

export default page;
