import { Button } from "@/components/ui/button";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const VerifyEmailCode = () => {
  return (
    <div className="w-full p-6">
      <h1 className="mb-2 text-3xl font-semibold">Verify Email</h1>
      <p className="text-muted-foreground">
        Enter the 6-digit code sent to your email.
      </p>

      <div className="mt-12">
        <InputOTP maxLength={4}>
          <InputOTPGroup className="flex justify-center gap-3">
            {[0, 1, 2, 3].map((index) => (
              <InputOTPSlot
                key={index}
                index={index}
                className="w-14 h-16 rounded-md border border-input bg-background text-center text-lg font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="flex gap-2 mt-6 text-sm">
        <p className="text-muted-foreground">Didn’t receive a code?</p>
        <span className="bg-primary/10 font-medium rounded-full px-3 py-0.5">
          Resend in 8:59
        </span>
      </div>

      <Button className="w-full rounded-lg px-6 py-4 mt-12" disabled={false}>
        Verify Email
      </Button>
    </div>
  );
};

export default VerifyEmailCode;
