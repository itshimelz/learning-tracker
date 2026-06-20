"use client";

import * as React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar01Icon,
  FlameIcon,
  BadgeCheckIcon,
  LeetcodeIcon,
  ArrowRightIcon,
  CircleIcon,
  Tick01Icon,
} from "@hugeicons/core-free-icons";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ProgressRadial } from "@/components/dashboard/progress-radial";
import { HeatmapGrid } from "@/components/dashboard/heatmap-grid";
import { ProgressChart } from "@/components/dashboard/progress-chart";
import { useStore } from "@/lib/store/context";
import { useProgressCalc } from "@/hooks/use-progress-calc";
import { useStreakTracker } from "@/hooks/use-streak-tracker";
import { cn, getCalendarDateFromIndex, getDayNameFromIndex } from "@/lib/utils";
import { toast } from "sonner";

export default function DashboardPage() {
  const { state, dispatch, isHydrated } = useStore();
  const progress = useProgressCalc();
  const { currentStreak, longestStreak } = useStreakTracker();

  // 1. Calculate current week and day based on start date
  const todayInfo = React.useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const options: Intl.DateTimeFormatOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const dateStr = today.toLocaleDateString("en-US", options);

    if (!state.settings.startDate) {
      return { hasStarted: false, daysUntilStart: 0, weekNumber: 1, weekId: "week-1", dayIndex: 0, dayName: "Sat" as const, dateStr };
    }

    const start = new Date(state.settings.startDate + "T00:00:00");
    start.setHours(0, 0, 0, 0);

    const diffTime = today.getTime() - start.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hasStarted = diffDays >= 0;

    if (!hasStarted) {
      const daysUntilStart = Math.ceil((start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      return { hasStarted: false, daysUntilStart, weekNumber: 1, weekId: "week-1", dayIndex: 0, dayName: "Sat" as const, dateStr };
    }

    const weekNumber = Math.min(12, Math.max(1, Math.floor(diffDays / 7) + 1));
    const weekId = `week-${weekNumber}`;
    const dayIndex = diffDays % 7;
    const dayName = getDayNameFromIndex(state.settings.startDate, weekNumber, dayIndex);

    return { hasStarted: true, daysUntilStart: 0, weekNumber, weekId, dayIndex, dayName, dateStr };
  }, [state.settings.startDate]);

  // 2. Fetch current week and today's tasks
  const currentWeekData = React.useMemo(() => {
    return state.plan.months
      .flatMap((m) => m.weeks)
      .find((w) => w.id === todayInfo.weekId);
  }, [state.plan, todayInfo.weekId]);

  const todayTasks = React.useMemo(() => {
    if (!todayInfo.hasStarted || !currentWeekData) return [];
    const day = currentWeekData.days.find((d) => d.dayOfWeek === todayInfo.dayName);
    return day?.tasks || [];
  }, [currentWeekData, todayInfo.hasStarted, todayInfo.dayName]);

  const todayDayId = React.useMemo(() => {
    if (!todayInfo.hasStarted || !currentWeekData) return "";
    const day = currentWeekData.days.find((d) => d.dayOfWeek === todayInfo.dayName);
    return day?.id || "";
  }, [currentWeekData, todayInfo.hasStarted, todayInfo.dayName]);

  const todayDateStr = React.useMemo(() => {
    if (!todayInfo.hasStarted) return "";
    return getCalendarDateFromIndex(state.settings.startDate, todayInfo.weekNumber, todayInfo.dayIndex);
  }, [state.settings.startDate, todayInfo.hasStarted, todayInfo.weekNumber, todayInfo.dayIndex]);

  if (!isHydrated) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <span className="text-xs text-muted-foreground font-mono">Initializing Dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Syllabus Workspace
          </h1>
          <p className="text-xs text-muted-foreground font-mono mt-1">
            {todayInfo.dateStr || "Welcome back to your study cycle"}
          </p>
        </div>
        {!todayInfo.hasStarted ? (
          <div className="text-xs font-semibold px-3 py-1.5 rounded-md bg-muted text-muted-foreground font-mono border border-border">
            Prep Phase Active
          </div>
        ) : (
          <Button render={<Link href="/today" />} className="shrink-0 shadow-sm">
            <span className="flex items-center gap-2">
              Start Study Block
              <HugeiconsIcon icon={ArrowRightIcon} className="size-4" strokeWidth={2} />
            </span>
          </Button>
        )}
      </div>

      {/* Core Stats Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Week progress card */}
        <Card className="bg-card/30 backdrop-blur-xs border-border/80">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Current Week
            </CardTitle>
            <HugeiconsIcon icon={Calendar01Icon} className="size-4.5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-sans">
              Week {todayInfo.weekNumber} <span className="text-xs font-normal text-muted-foreground">/ 12</span>
            </div>
            <p className="text-[10px] text-muted-foreground truncate font-mono mt-1">
              Theme: {currentWeekData?.theme ? currentWeekData.theme.replace(/\*\*/g, "") : "Loading..."}
            </p>
            <Progress value={(todayInfo.weekNumber / 12) * 100} className="h-1.5 mt-3 bg-muted" />
          </CardContent>
        </Card>

        {/* Streak card */}
        <Card className="bg-card/30 backdrop-blur-xs border-border/80">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Study Streak
            </CardTitle>
            <HugeiconsIcon
              icon={FlameIcon}
              className={cn("size-4.5", currentStreak > 0 ? "text-orange-500 fill-orange-500/20" : "text-muted-foreground")}
            />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-sans">
              {currentStreak} <span className="text-xs font-normal text-muted-foreground">days active</span>
            </div>
            <p className="text-[10px] text-muted-foreground font-mono mt-1">
              All-time record streak: {longestStreak} days
            </p>
            <div className="flex gap-1 mt-3">
              {Array.from({ length: 7 }).map((_, i) => {
                // Render small streak blocks for the last 7 days
                const isActive = i < currentStreak;
                return (
                  <div
                    key={i}
                    className={cn(
                      "h-1.5 flex-1 rounded-sm",
                      isActive ? "bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.3)]" : "bg-muted"
                    )}
                  />
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* DSA problems card */}
        <Card className="bg-card/30 backdrop-blur-xs border-border/80">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              DSA Challenges
            </CardTitle>
            <HugeiconsIcon icon={LeetcodeIcon} className="size-4.5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-sans">
              {progress.dsaStats.solved} <span className="text-xs font-normal text-muted-foreground">/ {progress.dsaStats.total}</span>
            </div>
            <div className="flex items-center justify-between text-[9px] text-muted-foreground font-mono mt-1">
              <span>E: {progress.dsaStats.easy.solved}/{progress.dsaStats.easy.total}</span>
              <span>M: {progress.dsaStats.medium.solved}/{progress.dsaStats.medium.total}</span>
              <span>H: {progress.dsaStats.hard.solved}/{progress.dsaStats.hard.total}</span>
            </div>
            <Progress value={progress.dsaStats.percent} className="h-1.5 mt-3 bg-muted" />
          </CardContent>
        </Card>

        {/* Tasks completed card */}
        <Card className="bg-card/30 backdrop-blur-xs border-border/80">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Plan Progress
            </CardTitle>
            <HugeiconsIcon icon={BadgeCheckIcon} className="size-4.5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-sans">
              {progress.completedTasks} <span className="text-xs font-normal text-muted-foreground">/ {progress.totalTasks}</span>
            </div>
            <p className="text-[10px] text-muted-foreground font-mono mt-1">
              Overall block completion rate: {progress.overallPercent}%
            </p>
            <Progress value={progress.overallPercent} className="h-1.5 mt-3 bg-muted" />
          </CardContent>
        </Card>
      </div>

      {/* Main Layout Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column: Visual Analytics */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <HeatmapGrid />
          <ProgressChart />
        </div>

        {/* Right Column: Focus and Milestones */}
        <div className="flex flex-col gap-6">
          {/* Today's Tasks Shortcut */}
          <Card className="bg-card/20 border-border/80 flex flex-col h-fit">
            <CardHeader className="border-b border-border/40 pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-bold">Today&apos;s Focus Blocks</CardTitle>
                <span className="text-[10px] uppercase font-bold font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {todayInfo.dayName}
                </span>
              </div>
              <CardDescription className="text-xs flex items-center justify-between mt-1">
                <span>Study skeleton blocks</span>
                {todayDateStr && <span className="font-mono text-[9px] text-muted-foreground font-semibold">{todayDateStr}</span>}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4 flex-1">
              {!todayInfo.hasStarted ? (
                <div className="flex flex-col items-center justify-center py-6 text-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <HugeiconsIcon icon={Calendar01Icon} className="size-5" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-semibold text-xs text-foreground">Starts in {todayInfo.daysUntilStart} day{todayInfo.daysUntilStart > 1 ? 's' : ''}</span>
                    <span className="text-[10px] text-muted-foreground font-mono">
                      Plan begins Sat, {new Date(state.settings.startDate + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    className="mt-2 text-xs w-full h-8"
                    onClick={() => {
                      const todayStr = new Date().toISOString().split("T")[0];
                      dispatch({
                        type: "UPDATE_SETTINGS",
                        payload: { startDate: todayStr }
                      });
                      toast.success("Study plan started today!");
                    }}
                  >
                    Start Plan Today
                  </Button>
                </div>
              ) : todayTasks.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-6 text-center text-muted-foreground">
                  <HugeiconsIcon icon={CircleIcon} className="size-8 opacity-40 mb-2" />
                  <span className="text-xs font-mono font-medium">Rest and Reflection Day</span>
                </div>
              ) : (
                <div className="space-y-3.5">
                  {todayTasks.map((task) => (
                    <div
                      key={task.id}
                      className={cn(
                        "flex items-start gap-3 p-3 rounded-lg border transition-all duration-300",
                        task.completed
                          ? "bg-muted/40 border-border/50 opacity-80"
                          : "bg-background/40 border-border/70 hover:border-primary/40"
                      )}
                    >
                      <Checkbox
                        id={task.id}
                        checked={task.completed}
                        onCheckedChange={() =>
                          dispatch({
                            type: "TOGGLE_TASK",
                            payload: {
                              weekId: todayInfo.weekId,
                              dayId: todayDayId,
                              taskId: task.id,
                            },
                          })
                        }
                        className="mt-0.5 shrink-0"
                      />
                      <div className="flex flex-col gap-0.5 leading-tight">
                        <label
                          htmlFor={task.id}
                          className={cn(
                            "text-xs font-semibold cursor-pointer select-none",
                            task.completed ? "text-muted-foreground line-through" : "text-foreground"
                          )}
                        >
                          {task.title}
                        </label>
                        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider font-mono">
                          {task.category === "dsa"
                            ? "Block 1 — DSA (45m)"
                            : task.category === "deep-dive"
                              ? "Block 2 — Core Deep Dive (1h15m)"
                              : task.category === "capstone"
                                ? "Block 3 — Capstone (2h)"
                                : "Block 4 — Rev Eng (30m)"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
            {todayTasks.length > 0 && (
              <CardFooter className="border-t border-border/40 pt-3 pb-3 bg-muted/10">
                <Button
                  render={<Link href="/today" />}
                  variant="ghost"
                  className="w-full text-xs font-semibold text-primary hover:text-primary"
                >
                  <span className="flex items-center justify-center gap-1">
                    Open study workspace
                    <HugeiconsIcon icon={ArrowRightIcon} className="size-3.5" />
                  </span>
                </Button>
              </CardFooter>
            )}
          </Card>

          {/* Current Milestone Card */}
          <Card className="bg-card/20 border-border/80">
            <CardHeader className="pb-3 border-b border-border/40">
              <CardTitle className="text-sm font-bold">Capstone Milestone</CardTitle>
              <CardDescription className="text-xs">Current week theme & build goals</CardDescription>
            </CardHeader>
            <CardContent className="pt-4 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <HugeiconsIcon icon={Calendar01Icon} className="size-5" />
                </div>
                <div className="flex flex-col gap-0.5 leading-snug">
                  <span className="text-[10px] text-muted-foreground font-mono uppercase font-bold tracking-wider">
                    Week Theme
                  </span>
                  <span className="text-xs font-semibold text-foreground">
                    {currentWeekData?.theme ? currentWeekData.theme.replace(/\*\*/g, "") : "Loading..."}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0">
                  <HugeiconsIcon icon={BadgeCheckIcon} className="size-5" />
                </div>
                <div className="flex flex-col gap-0.5 leading-snug">
                  <span className="text-[10px] text-muted-foreground font-mono uppercase font-bold tracking-wider">
                    Build Goal
                  </span>
                  <span className="text-xs font-semibold text-foreground">
                    {currentWeekData?.capstoneMilestone || "No capstone task listed."}
                  </span>
                </div>
              </div>

              {/* Mock interview completion checklist */}
              {currentWeekData && (
                <div className="border-t border-border/40 pt-4 flex items-center justify-between">
                  <div className="flex flex-col leading-snug">
                    <span className="text-xs font-semibold text-foreground">Weekly Mock Interview</span>
                    <span className="text-[9px] text-muted-foreground font-mono">Saturday schedule</span>
                  </div>
                  <Button
                    variant={currentWeekData.mockCompleted ? "secondary" : "outline"}
                    size="sm"
                    className="h-8 font-semibold text-xs gap-1.5"
                    onClick={() =>
                      dispatch({
                        type: "TOGGLE_MOCK",
                        payload: { weekId: currentWeekData.id },
                      })
                    }
                  >
                    {currentWeekData.mockCompleted ? (
                      <>
                        <HugeiconsIcon icon={Tick01Icon} className="size-3.5 text-emerald-500" strokeWidth={3} />
                        Completed
                      </>
                    ) : (
                      "Mark Complete"
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
