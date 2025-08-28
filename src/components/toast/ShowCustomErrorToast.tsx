"use client";

import { toast } from "sonner";
import { X, Check } from "lucide-react";
import { Button } from "../ui/button";

export function showCustomErrorToast(message: string, description?: string) {
  toast.custom(
    (t) => (
      // bg-white border border-l-2 border-l-error border-gray-200 shadow-lg rounded-2xl flex items-center justify-between gap-4 p-4 mt-14 mr-5

      <div className="relative flex items-center w-[400px] mt-10 mr-5 bg-white shadow-lg rounded-2xl border border-gray-200 p-4">
        <div className="absolute -left-[0.3px] h-full rounded-l-full w-1.5 bg-error" />

        {/* <div className="flex items-center gap-2 flex-1"> */}
        {/* Error Icon Container */}
        <div className="grid place-items-center self-start size-6 rounded-[8px] bg-error-50 border border-error-75 mr-2">
          <div className="grid place-items-center size-3 p-[1px]  rounded-full bg-error">
            <Check className="text-white size-full" strokeWidth={2} />
          </div>
        </div>

        {/* Error Message */}
        <div>
          <div className="flex-1 text-sm  font-semibold">{message}</div>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        {/* </div> */}

        {/* Vertical Separator */}
        <div className="h-10 w-[1px] bg-gray-200 mx-2" />

        {/* Close Button */}
        <Button
          onClick={() => toast.dismiss(t)}
          variant="ghost"
          size="icon"
          className="flex items-center justify-center self-start rounded-full  transition-colors"
        >
          <X className="text-black text-2xl" size={16} />
        </Button>
      </div>
    ),
    {
      duration: 4000, // auto dismiss in 4s
    }
  );
}
