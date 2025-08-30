import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Downloads } from "@/components/main/downloads";

export const metadata: Metadata = {
  title: "Downloads & Resources | Space Portfolio",
  description: "Download my resume, teaching portfolio, and other resources.",
};

export default function ExportsPage() {
  return (
    <main className="min-h-screen pt-24">
      <PageHeader
        title="Downloads & Resources"
        description="Get access to my professional documents and resources"
      />
      <Downloads />
    </main>
  );
}
