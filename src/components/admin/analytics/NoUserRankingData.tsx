import Image from "next/image";

const NoUserRankingData = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-[25.5px] mx-3.5 mt-6 rounded-xl border shadow-xs">
      <Image
        src="/images/no-user-ranking.svg"
        alt="No Data"
        width={290}
        height={290}
        className="mb-4"
      />
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-2">
          Nothing to display right now
        </h2>
        <p className="text-text-secondary">
          Data will show up here as soon as it&apos;s available.
        </p>
      </div>
    </div>
  );
};

export default NoUserRankingData;
