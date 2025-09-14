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
    <Card className="w-full max-w-xs shadow-none gap-2 py-0 pt-3">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="border border-border-secondary rounded-[12px] space-y-3 p-5">
        <section className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2.5">
            <p className="text-3xl font-medium">0</p>
            <CardDescription className="flex gap-1">
              <span className="text-muted-foreground text-sm">0%</span>
              <span className="font-[500] text-sm">no records yet</span>
            </CardDescription>
          </div>

          {/* <CardAction className="text-muted-foreground hover:text-foreground">
            <EllipsisVertical size={20} />
          </CardAction> */}
        </section>

        <CardFooter className="flex-col gap-2 h-[50px] bg-border-gray-300/15 border-t border-t-secondary-600 mt-2"></CardFooter>
      </CardContent>
    </Card>
  );
};

export default MetricsCard;
