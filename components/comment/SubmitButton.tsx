"use client";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="px-5 py-1.5 bg-[#ff7a59] hover:bg-[#ff8f73] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-full transition-colors"
    >
      {pending ? "Posting..." : "Respond"}
    </button>
  );
}
