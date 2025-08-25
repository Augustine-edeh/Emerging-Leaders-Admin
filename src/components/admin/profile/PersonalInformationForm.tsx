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
import { PencilLine, Save } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
});

const PersonalInformationForm = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    alert("Form submitted!");
    console.log("Submitted:", values);
  };

  return (
    <Form {...form}>
      <div className="flex items-center justify-between">
        <SectionTitle>Personal Information</SectionTitle>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-3 !px-3 !py-4 rounded-[16px] text-sm font-medium text-gray-700 hover:bg-gray-100"
          // type="submit"
          onClick={() => setIsEditing(!isEditing)}
        >
          {!isEditing ? (
            <>
              <PencilLine className="size-4" />
              Edit
            </>
          ) : (
            <>
              <Save className="size-4" />
              Save
            </>
          )}
        </Button>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
      >
        {/* First Name */}
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">
                First Name
              </FormLabel>
              <FormControl className="bg-red-500 w-fit">
                <Input
                  placeholder="Enter your first name"
                  {...field}
                  className="bg-pink-400 "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Last Name */}
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">Last Name</FormLabel>
              <FormControl className="">
                <Input placeholder="Enter your last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">Email</FormLabel>
              <FormControl className="">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">
                Phone Number
              </FormLabel>
              <FormControl className="">
                <Input placeholder="Enter your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit button full width under grid */}
        <div className="col-span-full">
          <Button type="submit" className="mt-4">
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PersonalInformationForm;
