// components/layout/Container.tsx
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: string;
}

export function Container({
  children,
  className = "",
  maxWidth = "max-w-6xl",
}: ContainerProps) {
  return (
    <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
