import type { Metadata } from "next";
import { TryPageContent } from "@/components/try-page";

export const metadata: Metadata = {
  title: "Try TerraSight — Run a damage assessment",
  description:
    "Upload a pre- and post-disaster satellite image pair and see how TerraSight classifies, segments and explains the damage.",
  openGraph: {
    title: "Try TerraSight — Damage assessment",
    description:
      "Upload paired satellite imagery and watch explainable AI grade the damage in seconds.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function TryPage() {
  return <TryPageContent />;
}
