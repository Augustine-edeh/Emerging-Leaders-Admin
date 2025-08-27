"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SectionTitle } from "@/app/admin/profile/page";
import { Check, PencilLine } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { toast } from "sonner";

const formSchema = z.object({
  country: z
    .string()
    .min(2, { message: "Country name must be at least 2 characters." }),
  town_city: z
    .string()
    .min(2, { message: "Town/City must be at least 2 characters." }),
  postalCode: z
    .string()
    .min(2, { message: "Postal code must be at least 2 characters." }),
});

const AddressInfoForm = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "UK",
      town_city: "London",
      postalCode: "RTS 7398",
    },
  });

  // TODO: remember to consolidate and unify styles universal toasts
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Submitted:", values);
    toast.success("Changes Saved Successfully.", {
      description: "All set! Your information has been updated.",
      closeButton: true,
      duration: 4000,
      style: {
        background: "#ffff",
        border: "1px solid #dbd8d8",
        color: "black",
        borderRadius: "10px",
      },
      icon: <Check size={18} className="text-green-600" />,
    });
    setIsEditing(false);
  };

  const fieldStyle =
    "w-full py-2 text-sm rounded-md border border-transparent focus:outline-none font-semibold";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex items-center justify-between">
          <SectionTitle>Address Information</SectionTitle>

          <div>
            {isEditing ? (
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  type="button"
                  className="text-red-500 hover:text-gray-700"
                  onClick={() => {
                    form.reset(); // reset to original values
                    setIsEditing(false);
                  }}
                >
                  Cancel
                </Button>

                <Button
                  size="sm"
                  className={clsx(
                    "flex items-center gap-3 !px-3 !py-5 rounded-[16px] text-sm font-medium"
                  )}
                  type="submit"
                >
                  Save Changes
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-3 !px-3 !py-4 rounded-[16px] text-sm font-medium text-muted-foreground hover:bg-gray-100"
                type="button"
                onClick={() => setIsEditing(true)}
              >
                <PencilLine className="size-4" />
                Edit
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 max-w-lg">
          {/* Country */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">Country</FormLabel>
                <FormControl>
                  {!isEditing ? (
                    <p className={clsx("border-b text-gray-700", fieldStyle)}>
                      {field.value}
                    </p>
                  ) : (
                    <Input {...field} placeholder="Enter your country" />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Town / City */}
          <FormField
            control={form.control}
            name="town_city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  Town / City
                </FormLabel>
                <FormControl>
                  {!isEditing ? (
                    <p className={clsx("border-b text-gray-700", fieldStyle)}>
                      {field.value}
                    </p>
                  ) : (
                    <Input {...field} placeholder="Enter your town/city" />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Postal Code */}
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  Postal Code
                </FormLabel>
                <FormControl>
                  {!isEditing ? (
                    <p className={clsx("border-b text-gray-700", fieldStyle)}>
                      {field.value}
                    </p>
                  ) : (
                    <Input {...field} placeholder="Enter your postal code" />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default AddressInfoForm;
