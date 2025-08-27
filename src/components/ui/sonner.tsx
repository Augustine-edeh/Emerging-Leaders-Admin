"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group flex items-center gap-3 rounded-xl border-l-4 p-4 shadow-lg",
          title: "font-semibold text-base",
          description: "text-sm text-muted-foreground",
          actionButton: "bg-transparent",
          cancelButton: "bg-transparent",
          closeButton:
            "ml-4 pl-4 border-l border-border text-muted-foreground hover:text-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
