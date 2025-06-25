import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="flex flex-col gap-8 p-2 bg-gray-500 h-full">
      <section className="flex justify-between items-center bg-pink-400">
        <div>
          <h1 className="text-2xl font-bold">Content Management</h1>
          <p className="text-foreground">
            Monitor, filter, and manage contents effectively.
          </p>
        </div>
        <Button>Add New Content</Button>
      </section>

      <div className="flex-1 flex flex-col bg-emerald-600 p-1 rounded-xl">
        <div className="flex justify-between bg-zinc-400">
          <h4 className="">Content List</h4>

          <div className="flex gap-2">
            <input type="text" placeholder="...Search" />
            <p>Filter</p>
          </div>
        </div>

        <div className="flex-1 overflow-auto rounded-t-xl ">
          <table className="w-full bg-white h-full">
            <thead>
              <tr>
                <th className="p-2">ID</th>
                <th className="p-2">Title</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {/* Example row */}
              {/* <tr>
                <td className="p-2">1</td>
                <td className="p-2">Sample Content</td>
                <td className="p-2">Published</td>
                <td className="p-2">
                  <Button variant="outline">Edit</Button>
                  <Button variant="destructive">Delete</Button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
