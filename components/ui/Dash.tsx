interface DashProps {
  className?: string;
  width?: string; // Add a new optional width prop
}

export function Dash({
  className = "",
  width = "w-16 md:w-24", // Set your current sizes as the default fallback
}: DashProps) {
  return (
    <div
      className={`h-0.75 bg-brand ${width} ${className}`}
      aria-hidden="true"
    />
  );
}
