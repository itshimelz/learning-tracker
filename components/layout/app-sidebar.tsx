"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  DashboardBrowsingIcon,
  Calendar03Icon,
  Task02Icon,
  CodeIcon,
  BookOpen02Icon,
  Settings02Icon,
  ArrowDownIcon,
  ArrowRightIcon,
  Tick01Icon,
} from "@hugeicons/core-free-icons";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Progress } from "@/components/ui/progress";
import { useProgressCalc } from "@/hooks/use-progress-calc";
import { useStore } from "@/lib/store/context";
import { cn } from "@/lib/utils";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { state } = useStore();
  const { overallPercent } = useProgressCalc();

  const mainNavItems = [
    {
      title: "Dashboard",
      url: "/",
      icon: DashboardBrowsingIcon,
    },
    {
      title: "Today's Focus",
      url: "/today",
      icon: Calendar03Icon,
    },
    {
      title: "Full Plan",
      url: "/plan",
      icon: Task02Icon,
    },
    {
      title: "DSA Tracker",
      url: "/dsa",
      icon: CodeIcon,
    },
    {
      title: "Resources",
      url: "/resources",
      icon: BookOpen02Icon,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings02Icon,
    },
  ];

  return (
    <Sidebar collapsible="icon" className="border-r border-border bg-sidebar" {...props}>
      <SidebarHeader className="border-b border-border py-4 px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg select-none">
            A
          </div>
          <div className="flex flex-col gap-0.5 leading-none group-data-[collapsible=icon]:hidden">
            <span className="font-semibold text-sm tracking-wide text-foreground">
              Android Prep
            </span>
            <span className="text-[10px] text-muted-foreground font-mono">
              Learning Tracker
            </span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="py-2">
        {/* Navigation Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden font-medium text-xs tracking-wider text-muted-foreground uppercase">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-1">
            <SidebarMenu>
              {mainNavItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      render={<Link href={item.url} />}
                      tooltip={item.title}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-2.5 rounded-md transition-colors text-sm font-medium",
                        isActive
                          ? "bg-accent text-accent-foreground font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <span className="flex w-full items-center gap-3">
                        <HugeiconsIcon
                          icon={item.icon}
                          strokeWidth={2}
                          className={cn("size-5 shrink-0", isActive ? "text-primary" : "text-muted-foreground")}
                        />
                        <span className="group-data-[collapsible=icon]:hidden">
                          {item.title}
                        </span>
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Quick Week Navigation Section */}
        <SidebarGroup className="group-data-[collapsible=icon]:hidden border-t border-border mt-2 pt-4">
          <SidebarGroupLabel className="font-medium text-xs tracking-wider text-muted-foreground uppercase">
            Syllabus Weeks
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-1">
            <SidebarMenu>
              {state.plan.months.map((month) => (
                <div key={month.id} className="mb-3">
                  <div className="px-4 py-1 text-[11px] font-semibold text-muted-foreground/80 font-mono whitespace-normal break-words leading-snug">
                    {month.title}
                  </div>
                  <div className="space-y-0.5 mt-1">
                    {month.weeks.map((week) => {
                      const weekUrl = `/plan/${week.id}`;
                      const isWeekActive = pathname === weekUrl;
                      
                      // Count completed tasks for this week
                      let completedTasks = 0;
                      let totalTasks = 0;
                      week.days.forEach((day) => {
                        day.tasks.forEach((t) => {
                          totalTasks++;
                          if (t.completed) completedTasks++;
                        });
                      });
                      const isWeekDone = totalTasks > 0 && completedTasks === totalTasks;

                      return (
                        <SidebarMenuItem key={week.id}>
                          <SidebarMenuButton
                            render={<Link href={weekUrl} />}
                            className={cn(
                              "w-full justify-start text-xs py-1.5 px-6 rounded-md transition-colors",
                              isWeekActive
                                ? "bg-accent/60 text-foreground font-medium"
                                : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                            )}
                          >
                            <span className="flex items-center justify-between w-full">
                              <span className="truncate">Week {week.weekNumber}</span>
                              {isWeekDone && (
                                <HugeiconsIcon
                                  icon={Tick01Icon}
                                  strokeWidth={3}
                                  className="size-3.5 text-success shrink-0"
                                />
                              )}
                            </span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </div>
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Progress Footer */}
      <div className="mt-auto border-t border-border p-4 group-data-[collapsible=icon]:hidden bg-sidebar-inner/50">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="text-muted-foreground">Overall Prep Progress</span>
            <span className="font-mono text-primary font-semibold">{overallPercent}%</span>
          </div>
          <Progress value={overallPercent} className="h-1.5 bg-muted" />
        </div>
      </div>

      <SidebarRail />
    </Sidebar>
  );
}
