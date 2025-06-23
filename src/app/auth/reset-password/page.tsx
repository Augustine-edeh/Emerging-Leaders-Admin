"use client";

import { useState } from "react";
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
import { useRouter } from "next/navigation";
import clsx from "clsx";

// Strength checker
function getPasswordStrength(password: string): 1 | 2 | 3 {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password) && /[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return (score || 1) as 1 | 2 | 3;
}

// Schema
const formSchema = z.object({
  email: z.string().email({
    // message: "Please enter a valid email address.",
  }),
});

const ResetPasswordPage = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const [fakebackendResponse, setfakebackendResponse] =
    useState<boolean>(false);

  // 2. Submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    // NOTE: post form values to the backend.

    // NOTE: if response.data.error (i.e, wrong credentials); show toast
    setfakebackendResponse(true); // 1.
    // 2. show toast({type: error, message: {heading: 'Invalid email or password}', subText: 'Please try again.' })

    // NOTE: if response.data.success; redirect to admin page
    // 1. show toast({type: success, message: {heading: 'Login successfully}', subText: 'You are logged in.' })
    // 2. clear the form & redirect to /admin.
    router.push("/reset-password/new-password"); //3.
  }

  const passwordValue = form.watch("password");
  const strengthLevel = getPasswordStrength(passwordValue);

  const getBarColor = (level: number) => {
    if (strengthLevel >= level) {
      if (strengthLevel === 1) return "bg-red-500";
      if (strengthLevel === 2) return "bg-amber-500";
      return "bg-green-500";
    }
    return "bg-muted";
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold tracking-tight mb-2">
        Reset Admin Password
      </h1>
      <p>Enter the official email address linked to your admin account.</p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full h-full mt-16"
        >
          <div className="space-y-6">
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your official email address"
                      className={clsx(
                        fakebackendResponse ? "border-error-300" : ""
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary mt-16"
            disabled={!form.formState.isValid}
          >
            Send Reset Link
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ResetPasswordPage;
