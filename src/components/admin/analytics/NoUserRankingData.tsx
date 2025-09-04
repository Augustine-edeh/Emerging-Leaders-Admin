import Image from "next/image";

const NoUserRankingData = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 rounded-xl bg-yellow-300 border shadow-xs mx-3.5 mt-6">
      <Image
        src="/images/no-user-ranking.svg"
        alt="No Data"
        width={150}
        height={150}
        className="mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">
        Nothing to display right now
      </h2>
      <p className="text-center text-text-secondary">
        Data will show up here as soon as it&apos;s available.
      </p>
    </div>
  );
};

export default NoUserRankingData;
