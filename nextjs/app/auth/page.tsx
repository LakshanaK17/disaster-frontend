import type { Metadata } from "next";
import { AuthPageContent } from "@/components/auth-page";

export const metadata: Metadata = {
  title: "Sign in or create an account — TerraSight",
  description:
    "Access the TerraSight explainable damage-assessment workspace. Log in with email or Google, or create a new responder account.",
  openGraph: {
    title: "Sign in to TerraSight",
    description: "Log in or create your TerraSight account to run explainable satellite damage assessments.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function AuthPage() {
  return <AuthPageContent />;
}
