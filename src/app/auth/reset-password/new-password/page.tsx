"use client";

import { EyeOff, Eye } from "lucide-react";
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
const formSchema = z
  .object({
    newPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    ConfirmNewPassword: z.string({}),
  })
  .refine((data) => data.newPassword === data.ConfirmNewPassword, {
    message: "Password does not match",
    path: ["ConfirmNewPassword"],
  });

const NewPasswordPage = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
      ConfirmNewPassword: "",
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
    router.push("/auth/login"); //3.//
  }

  const passwordValue = form.watch("newPassword");
  const strengthLevel = getPasswordStrength(passwordValue);

  const getBarColor = (level: number) => {
    if (strengthLevel >= level) {
      if (strengthLevel === 1) return "bg-red-500";
      if (strengthLevel === 2) return "bg-amber-500";
      return "bg-green-500";
    }
    return "bg- muted";
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold tracking-tight mb-2">
        Create New Password
      </h1>
      <p>Enter a password different from the previous one.</p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full h-full mt-16"
        >
          <div className="space-y-6">
            {/* New Password Field */}
            {/* Password Field + Strength Meter */}
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="newPassword">New Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="newPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        {...field}
                        className="pr-10" // add padding to avoid icon overlap
                      />
                      <span
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </span>
                    </div>
                  </FormControl>

                  {/* Password Strength Indicator */}
                  {passwordValue && (
                    <div className="mt-2 flex gap-2">
                      {[1, 2, 3].map((level) => (
                        <div
                          key={level}
                          className={`h-2 flex-1 rounded-sm transition-colors duration-300 ${getBarColor(
                            level
                          )}`}
                        />
                      ))}
                    </div>
                  )}

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password Field */}
            <FormField
              control={form.control}
              name="ConfirmNewPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="confirmNewPassword">
                    Confirm New Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="confirmNewPassword"
                        type={showConfirmNewPassword ? "text" : "password"}
                        placeholder="Rewrite your password"
                        {...field}
                        className={clsx(
                          "pr-10 bo rder border-b lue-500 outline outline-blue-500", // add padding to avoid eye-icon overlap
                          fakebackendResponse ? "border-error-300" : ""
                        )}
                      />
                      <span
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground"
                        onClick={() =>
                          setShowConfirmNewPassword((prev) => !prev)
                        }
                      >
                        {showConfirmNewPassword ? (
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
          </div>

          <Button
            type="submit"
            className="w-full bg-primary mt-16"
            disabled={!form.formState.isValid || strengthLevel < 3}
          >
            Log In
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewPasswordPage;
