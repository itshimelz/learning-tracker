"use client";

import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ShieldIcon, AlertIcon, ZapIcon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

interface DifficultyBadgeProps {
  difficulty: "easy" | "medium" | "hard";
  className?: string;
}

export function DifficultyBadge({ difficulty, className }: DifficultyBadgeProps) {
  const configs = {
    easy: {
      label: "Easy",
      icon: ShieldIcon,
      styles: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    medium: {
      label: "Medium",
      icon: AlertIcon,
      styles: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    },
    hard: {
      label: "Hard",
      icon: ZapIcon,
      styles: "bg-red-500/10 text-red-500 border-red-500/20",
    },
  };

  const config = configs[difficulty];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-semibold leading-none select-none uppercase tracking-wider font-mono",
        config.styles,
        className
      )}
    >
      <HugeiconsIcon icon={config.icon} className="size-3 shrink-0" strokeWidth={2.5} />
      <span>{config.label}</span>
    </div>
  );
}
