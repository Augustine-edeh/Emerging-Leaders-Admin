"use client";

import { toast } from "sonner";
import { X, CircleCheck } from "lucide-react";

export function showCustomErrorToast(message: string) {
  toast.custom(
    (t) => (
      <div className="flex items-center border rounded-xl shadow-lg p-4 w-[380px] bg-white">
        {/* Error Icon Container */}
        <div className="grid place-items-center size-10 rounded-xl border border-error-75 bg-error-50">
          <CircleCheck className="text-white bg-error rounded-full" size={22} />
        </div>

        {/* Error Message */}
        <div className="flex-1 text-sm text-red-800 ml-3">{message}</div>

        {/* Vertical Separator */}
        <div className="w-[1px] h-6 bg-red-300 mx-3" />

        {/* Close Button */}
        <button
          onClick={() => toast.dismiss(t)}
          className="flex items-center justify-center h-7 w-7 rounded-full bg-red-100 hover:bg-red-200 transition-colors"
        >
          <X className="text-red-600" size={16} />
        </button>
      </div>
    ),
    {
      duration: 5000, // auto dismiss in 5s
    }
  );
}
