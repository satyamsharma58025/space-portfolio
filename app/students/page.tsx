import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ResourceGrid } from "@/components/main/resource-grid";

export const metadata: Metadata = {
  title: "Student Resources | Space Portfolio",
  description: "Access study materials, notes, and resources for ICSE students.",
};

export default function StudentsPage() {
  return (
    <main className="min-h-screen pt-24">
      <PageHeader
        title="Student Resources"
        description="Free study materials and resources for ICSE students"
      />
      <ResourceGrid />
    </main>
  );
}
