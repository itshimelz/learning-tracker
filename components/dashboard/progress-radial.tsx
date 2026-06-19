"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressRadialProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  label?: string;
}

export function ProgressRadial({
  value,
  size = 160,
  strokeWidth = 14,
  className,
  label = "Completed",
}: ProgressRadialProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (Math.min(100, Math.max(0, value)) / 100) * circumference;

  return (
    <div className={cn("relative flex items-center justify-center select-none", className)}>
      <svg width={size} height={size} className="rotate-[-90deg]">
        {/* Background Track Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted/30"
        />
        {/* Animated Active Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="url(#radial-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="radial-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--ring)" />
          </linearGradient>
        </defs>
      </svg>
      {/* Center Labels */}
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="font-sans text-3xl font-extrabold tracking-tight text-foreground transition-all duration-300">
          {Math.round(value)}%
        </span>
        <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80 mt-1">
          {label}
        </span>
      </div>
    </div>
  );
}
