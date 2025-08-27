import { toast } from "sonner";
import { Check, AlertCircle } from "lucide-react";

export const successToast = (message: string, description?: string) => {
  toast.success(message, {
    description,
    icon: <Check className="text-green-500 w-5 h-5" />,
    className: "border-l-4 border-green-500",
  });
};

export const errorToast = (message: string, description?: string) => {
  toast.error(message, {
    description,
    icon: <AlertCircle className="text-red-500 w-5 h-5" />,
    className: "border-l-4 border-red-500",
  });
};
