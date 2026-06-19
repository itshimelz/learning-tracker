"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FlameIcon,
  SunIcon,
  MoonIcon,
  Settings02Icon,
  TimerIcon,
} from "@hugeicons/core-free-icons";
import { useTimer } from "@/lib/store/timer-context";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useStreakTracker } from "@/hooks/use-streak-tracker";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { currentStreak } = useStreakTracker();
  const { timer } = useTimer();

  // Generate breadcrumb items based on current path
  const breadcrumbs = React.useMemo(() => {
    const paths = pathname.split("/").filter(Boolean);
    if (paths.length === 0) {
      return [{ label: "Dashboard", href: "/", isLast: true }];
    }

    const items = [{ label: "Dashboard", href: "/", isLast: false }];
    
    paths.forEach((path, index) => {
      const href = "/" + paths.slice(0, index + 1).join("/");
      const isLast = index === paths.length - 1;
      
      // Format label (e.g. "today" -> "Today's Focus", "week-1" -> "Week 1")
      let label = path.charAt(0).toUpperCase() + path.slice(1);
      if (path === "today") label = "Today's Focus";
      if (path === "dsa") label = "DSA Tracker";
      if (path === "resources") label = "Resource Library";
      if (path === "settings") label = "Settings";
      if (path.startsWith("week-")) {
        const num = path.split("-")[1];
        label = `Week ${num}`;
      }

      items.push({ label, href, isLast });
    });

    return items;
  }, [pathname]);

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full shrink-0 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="-ml-1" />
        <div className="h-4 w-px bg-border md:inline" />
        
        {/* Breadcrumbs */}
        <Breadcrumb className="hidden md:inline-block">
          <BreadcrumbList>
            {breadcrumbs.map((item, idx) => (
              <React.Fragment key={item.href}>
                <BreadcrumbItem>
                  {item.isLast ? (
                    <BreadcrumbPage className="font-semibold text-foreground text-sm">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={item.href} className="text-muted-foreground text-sm hover:text-foreground">
                      {item.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!item.isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-4">
        {/* Active Focus Session Timer Badge */}
        {timer.isRunning && (
          <Link
            href="/today"
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold select-none border border-primary/20 bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300"
            title={`Active timer: ${timer.blockTitle}`}
          >
            <HugeiconsIcon
              icon={TimerIcon}
              className="size-4 shrink-0 text-primary animate-pulse"
            />
            <span className="font-mono text-sm leading-none">
              {(() => {
                const mins = Math.floor(timer.timeLeft / 60);
                const secs = timer.timeLeft % 60;
                return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
              })()}
            </span>
          </Link>
        )}

        {/* Streak Tracker Badge */}
        <div
          className={cn(
            "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold select-none border",
            currentStreak > 0
              ? "bg-muted text-foreground border-border"
              : "bg-muted/50 text-muted-foreground border-border/50"
          )}
          title="Daily task completion streak"
        >
          <HugeiconsIcon
            icon={FlameIcon}
            strokeWidth={2.5}
            className={cn("size-4 shrink-0", currentStreak > 0 ? "text-foreground" : "text-muted-foreground")}
          />
          <span className="font-mono text-sm leading-none">{currentStreak} day streak</span>
        </div>

        {/* Theme Toggle Button */}
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="size-9 rounded-md border border-border bg-background text-foreground hover:bg-accent"
          title="Toggle color theme"
        >
          <HugeiconsIcon
            icon={theme === "dark" ? SunIcon : MoonIcon}
            strokeWidth={2}
            className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground"
          />
          <HugeiconsIcon
            icon={theme === "dark" ? SunIcon : MoonIcon}
            strokeWidth={2}
            className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
}
