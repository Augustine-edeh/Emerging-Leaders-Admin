// import ContentManagementTable from "@/components/ContentManagementTable";
import FooterBar from "@/components/admin/FooterBar";

import AssessmentTabs from "@/components/admin/assessment/AssessmentTabs";

const AssessmentMangement = () => {
  return (
    <div className="flex-1 min-h-0 flex flex-col gap-8">
      <section className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Assessment Management</h1>
          <p className="text-foreground">
            Create, filter, and manage assessment questions.
          </p>
        </div>
      </section>

      {/* <section className="flex-1 min-h-0 flex flex-col rounded-xl border border-border-secondary bg-white shadow-2xs">
        <div className="flex justify-between items-center px-0 lg:px-6 py-3">
          <h4 className="">Content List</h4>

          <div className="flex items-center gap-4 text-muted-foreground">
            <SearchField className="rounded-[8px] pr-4 py-3 lg:w-2xs" />

            <FilterDropdown />

            <Button
              variant="toolbar"
              className="group flex items-center gap-2 px-4 py-3"
            >
              <Image
                src="/icons/download.svg"
                alt="download"
                width={24}
                height={24}
              />
              <span className="transition-colors group-hover:text-foreground">
                Download
              </span>
            </Button>
          </div>
        </div>

        <div className="flex-1 lex min-h-0 rounded-xl bg-white border border-border-secondary p-5">
          <ContentManagementTable />
        </div>
      </section> */}

      <section className="flex-1 min-h-0 flex flex-col rounded-xl border border-border-secondary bg-white shadow-2xs">
        <AssessmentTabs />
      </section>

      <FooterBar />
    </div>
  );
};

export default AssessmentMangement;
