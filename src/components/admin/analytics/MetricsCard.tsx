import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EllipsisVertical } from "lucide-react";

const MetricsCard = ({ title }: { title: string }) => {
  return (
    <Card className="w-full max-w-xs shadow-none gap-3 py-0 pt-3">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="border border-border-secondary rounded-lg py-3">
        <section className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2.5">
            <p className="text-2xl font-semibold">0</p>
            <CardDescription className="flex gap-1">
              <span className="text-muted-foreground text-sm">0%</span>
              <span className="font-[500]">no record yet</span>
            </CardDescription>
          </div>

          <CardAction className="text-muted-foreground hover:text-foreground">
            <EllipsisVertical size={20} />
          </CardAction>
        </section>

        <CardFooter className="flex-col gap-2 h-20 bg-border-gray-300/15 border-t  border-t-border-secondary mt-2"></CardFooter>
      </CardContent>
    </Card>
  );
};

export default MetricsCard;
