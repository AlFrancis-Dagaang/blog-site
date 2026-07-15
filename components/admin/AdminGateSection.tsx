// components/admin/AdminGateSection.tsx

import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { verifyAdminSession } from "@/lib/auth/admin";

export async function AdminGateSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = await verifyAdminSession();

  if (!isAuthenticated) {
    return <AdminLoginForm />;
  }

  return <main className="min-h-screen">{children}</main>;
}
