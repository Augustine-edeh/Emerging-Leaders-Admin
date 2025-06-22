import { Button } from "@/components/ui/button";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const verifyEmail = () => {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-semibold">Verify Email</h1>
      <p>Enter the 4-digit code sent to your email</p>

      <div className="mt-16 bg-red-500">
        <InputOTP maxLength={6}>
          <InputOTPGroup className="bg-blue-600 h-16">
            <InputOTPSlot index={0} className="h-full" />
            <InputOTPSlot index={1} className="h-full" />
            <InputOTPSlot index={2} className="h-full" />
          </InputOTPGroup>
          {/* <InputOTPSeparator /> */}
          <InputOTPGroup className="bg-purple-600 h-16">
            <InputOTPSlot index={3} className="h-full" />
            <InputOTPSlot index={4} className="h-full" />
            <InputOTPSlot index={5} className="h-full" />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="flex gap-3 mt-4">
        <p>Didn’t receive a code? </p>
        <span className="bg-primary-100 rounded-2xl px-4 py-0.5">
          Resend in {"8:59"}
        </span>
      </div>

      <Button className="w-full rounded-lg px-6 py-4 mt-16">
        Verify Email
      </Button>
    </div>
  );
};

export default verifyEmail;
