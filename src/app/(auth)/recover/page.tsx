import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RecoverForm from "@/features/auth/components/forms/recover";
import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Recover Password",
  description: "Request a one-time code to recover your account password securely.",
};

export default function Page() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Forgot Password?</CardTitle>
        <CardDescription>
          Enter your email below to receive an OTP for password reset.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RecoverForm />
        <div className="mt-4 text-center text-sm">
          Remember your password?{" "}
          <Link href="../sign-in" className="underline">
            Back to login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
