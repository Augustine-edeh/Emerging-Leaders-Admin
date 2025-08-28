"use client";

import { toast } from "sonner";
import { X, Check } from "lucide-react";
import { Button } from "../ui/button";
import clsx from "clsx";

// available variants (expand later if needed)
type ToastVariant = "error" | "success";

const variantClasses: Record<
  ToastVariant,
  {
    border: string;
    bg: string;
    bgLight: string;
    borderLight: string;
  }
> = {
  error: {
    border: "bg-error",
    bg: "bg-error",
    bgLight: "bg-error-50",
    borderLight: "border-error-75",
  },
  success: {
    border: "bg-success",
    bg: "bg-success",
    bgLight: "bg-success-50",
    borderLight: "border-success-75",
  },
};

export function showCustomToast(
  message: string,
  description?: string,
  variant: ToastVariant = "success"
) {
  const styles = variantClasses[variant];

  toast.custom(
    (t) => (
      <div className="relative flex items-center w-[400px] mt-10 mr-5 bg-white shadow-lg rounded-2xl border border-gray-200 p-4">
        {/* Left border accent */}
        <div
          className={clsx(
            "absolute -left-[0.3px] h-full rounded-l-full w-1.5",
            styles.border
          )}
        />

        {/* Icon */}
        <div
          className={clsx(
            "grid place-items-center self-start size-6 rounded-[8px] mr-2",
            styles.bgLight,
            styles.borderLight
          )}
        >
          <div
            className={clsx(
              "grid place-items-center size-3 p-[1px] rounded-full",
              styles.bg
            )}
          >
            <Check className="text-white size-full" strokeWidth={2} />
          </div>
        </div>

        {/* Message + description */}
        <div>
          <div className="flex-1 text-sm font-semibold">{message}</div>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
        </div>

        {/* Vertical Separator */}
        <div className="h-10 w-[1px] bg-gray-200 mx-2" />

        {/* Close Button */}
        <Button
          onClick={() => toast.dismiss(t)}
          variant="ghost"
          size="icon"
          className="flex items-center justify-center self-start rounded-full transition-colors"
        >
          <X className="text-black text-2xl" size={16} />
        </Button>
      </div>
    ),
    { duration: 4000 }
  );
}

// convenience wrappers
export function showCustomErrorToast(message: string, description?: string) {
  showCustomToast(message, description, "error");
}

export function showCustomSuccessToast(message: string, description?: string) {
  showCustomToast(message, description, "success");
}
