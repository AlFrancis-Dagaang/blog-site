import { Suspense } from "react";
import { AdminGateSection } from "@/components/admin/AdminGateSection";
import { AdminGateSkeleton } from "@/components/admin/AdminGateSkeleton";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<AdminGateSkeleton />}>
      <AdminGateSection>{children}</AdminGateSection>
    </Suspense>
  );
}
