import type { Metadata } from "next";
import { NewPostForm } from "@/components/admin/NewPostForm";

export const metadata: Metadata = {
  title: "A3 | Admin",
  description:
    "Thoughts on full-stack engineering, cloud architecture, and building things with Java, React, and AWS.",
  openGraph: {
    title: "A3 Blog — Al Francis Daga-ang",
    description:
      "Writing on software engineering, cloud infrastructure, and lessons learned building real projects.",
  },
};

export default function AdminPage() {
  return <NewPostForm />;
}
