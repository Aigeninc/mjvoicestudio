import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface MusicalNotesProps extends HTMLAttributes<SVGElement> {
  variant?: "single" | "double" | "group";
}

export function MusicalNotes({ className, variant = "single", ...props }: MusicalNotesProps) {
  if (variant === "double") {
    return (
      <svg
        className={cn("text-gray-200", className)}
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
      >
        <path d="M21 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h-2V3h-4zM9 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h2V3H9z"/>
      </svg>
    );
  }

  if (variant === "group") {
    return (
      <svg
        className={cn("text-gray-200", className)}
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
      >
        <path d="M19 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h-2V3h-4zm-8 0v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h2V3H11z M4 13v-2c0-2.76 2.24-5 5-5s5 2.24 5 5v2"/>
      </svg>
    );
  }

  return (
    <svg
      className={cn("text-gray-200", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
    </svg>
  );
}
