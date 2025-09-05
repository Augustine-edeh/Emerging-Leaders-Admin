import FooterBar from "@/components/admin/FooterBar";
import MetricsCard from "@/components/admin/analytics/MetricsCard";
import { metricsTokekns } from "@/data/metricsTokens";
import AnalyticsTabs from "@/components/admin/analytics/AnalyticsTabs";

const AnalyticsPage = () => {
  return (
    <div className="flex-1 min-h-0 flex flex-col gap-8">
      <section className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Martins</h1>
          <p className="text-foreground">
            Monitor analytics on users effectively.
          </p>
        </div>
      </section>

      <section className="flex gap-6 flex-wrap">
        {metricsTokekns.map((metric) => (
          <MetricsCard key={metric.title} title={metric.title} />
        ))}
      </section>

      <section className="min-h-0 flex-1 flex flex-col pb-10 rounded-xl border border-border-secondary bg-white shadow-2xs">
        <AnalyticsTabs />
        <FooterBar className="my-8 bg-blue-500" />
      </section>
    </div>
  );
};

export default AnalyticsPage;
