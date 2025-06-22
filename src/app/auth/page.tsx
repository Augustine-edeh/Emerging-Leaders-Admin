"use client";

import { EyeOff, Eye } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// const formSchema = z.object({
//   fullName: z.string().min(2, {
//     message: "Full name must be at least 2 characters.",
//   }),
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
//   password: z
//     .string()
//     .min(8, {
//       message: "Password must be at least 8 characters.",
//     })
//     .max(32, {
//       message: "Password must be at most 32 characters.",
//     }),
//   confirmPassword: z
//     .string()
//     .min(8, {
//       message: "Confirm password must be at least 8 characters.",
//     })
//     .max(32, {
//       message: "Confirm password must be at most 32 characters.",
//     })
//      .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords must match.",
//     path: ["confirmPassword"],
//   })
//   // .refine((val, ctx) => {
//   //   if (val !== ctx.parent.password) {
//   //     ctx.addIssue({
//   //       code: z.ZodIssueCode.custom,
//   //       message: "Passwords must match.",
//   //     });
//   //     return false;
//   //   }
//   //   return true;
//   // }),
// });

const formSchema = z
  .object({
    fullName: z.string().min(2, {
      message: "Full name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .max(32, { message: "Password must be at most 32 characters." }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm password must be at least 8 characters." })
      .max(32, { message: "Confirm password must be at most 32 characters." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "The confirmation password must match the password above.",
    path: ["confirmPassword"],
  });

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 1. Defining the form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Defining a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 bg-red-500 w-full h-full"
      >
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an Account
        </h1>

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password">Password</FormLabel>
              {/* <FormControl>
                <div className="flex justify-center items-center relative bg-yellow-500 text-blue-600">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...field}
                    className="relative"
                  />
                  {showPassword ? (
                    <EyeOff
                      className="absolute right-4 cursor-pointer bg-blue-500"
                      onClick={() => setShowPassword((prev) => !prev)}
                    />
                  ) : (
                    <Eye
                      className="absolute right-4 cursor-pointer bg-blue-500"
                      onClick={() => setShowPassword((prev) => !prev)}
                    />
                  )}
                </div>
              </FormControl> */}

              <FormControl>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Minimum 8 characters"
                    {...field}
                    className="pr-10" // add padding to avoid icon overlap
                  />
                  <span
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </span>
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                {/* <Input
                  type="password"
                  placeholder="Repeat password"
                  {...field}
                /> */}

                <div className="relative">
                  <Input
                    id="password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Rewrite your password"
                    {...field}
                    className="pr-10" // add padding to avoid icon overlap
                  />
                  <span
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-wine-primary"
          disabled={!form.formState.isValid}
        >
          Create Account
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
