"use client";

import { useRouter } from "next/navigation";
import { CircleChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleBack}>
      <CircleChevronLeft className="size-6 text-primary" />
    </Button>
  );
};

export default BackButton;
