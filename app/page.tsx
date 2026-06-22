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
  Key01Icon,
  GiftIcon,
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
import { cn, getCalendarDateFromIndex, getDayNameFromIndex, formatMarkdown } from "@/lib/utils";
import { toast } from "sonner";

interface TodayClass {
  code: string;
  title: string;
  time: string;
  room: string;
  color: string;
}

const UNIVERSITY_ROUTINE: Record<string, TodayClass[]> = {
  Mon: [
    { code: "CSE 323", title: "Cryptography & Cybersecurity", time: "08:30 AM - 10:00 AM", room: "H107", color: "from-blue-50/90 to-blue-100/90 border-blue-200 text-blue-800 dark:from-blue-950/40 dark:to-blue-900/40 dark:border-blue-800/50 dark:text-blue-300" },
    { code: "CSE 413", title: "Natural Language Processing", time: "10:00 AM - 11:30 AM", room: "A602", color: "from-purple-50/90 to-purple-100/90 border-purple-200 text-purple-800 dark:from-purple-950/40 dark:to-purple-900/40 dark:border-purple-800/50 dark:text-purple-300" },
    { code: "GED 403", title: "Industrial & Operational Mgmt", time: "11:30 AM - 01:00 PM", room: "A603", color: "from-amber-50/90 to-amber-100/90 border-amber-200 text-amber-800 dark:from-amber-950/40 dark:to-amber-900/40 dark:border-amber-800/50 dark:text-amber-300" },
    { code: "GED 407", title: "Professional Ethics & Env Protection", time: "01:30 PM - 03:00 PM", room: "H105", color: "from-emerald-50/90 to-emerald-100/90 border-emerald-200 text-emerald-800 dark:from-emerald-950/40 dark:to-emerald-900/40 dark:border-emerald-800/50 dark:text-emerald-300" },
  ],
  Tue: [
    { code: "GED 407", title: "Professional Ethics & Env Protection", time: "01:30 PM - 03:00 PM", room: "K106", color: "from-emerald-50/90 to-emerald-100/90 border-emerald-200 text-emerald-800 dark:from-emerald-950/40 dark:to-emerald-900/40 dark:border-emerald-800/50 dark:text-emerald-300" },
    { code: "GED 403", title: "Industrial & Operational Mgmt", time: "03:00 PM - 04:30 PM", room: "K106", color: "from-amber-50/90 to-amber-100/90 border-amber-200 text-amber-800 dark:from-amber-950/40 dark:to-amber-900/40 dark:border-amber-800/50 dark:text-amber-300" },
  ],
  Wed: [
    { code: "CSE 323", title: "Cryptography & Cybersecurity", time: "08:30 AM - 10:00 AM", room: "H107", color: "from-blue-50/90 to-blue-100/90 border-blue-200 text-blue-800 dark:from-blue-950/40 dark:to-blue-900/40 dark:border-blue-800/50 dark:text-blue-300" },
    { code: "CSE 413", title: "Natural Language Processing", time: "10:00 AM - 11:30 AM", room: "A-605", color: "from-purple-50/90 to-purple-100/90 border-purple-200 text-purple-800 dark:from-purple-950/40 dark:to-purple-900/40 dark:border-purple-800/50 dark:text-purple-300" },
    { code: "CSE 414", title: "Natural Language Processing Lab", time: "01:30 PM - 03:30 PM", room: "K102", color: "from-pink-50/90 to-pink-100/90 border-pink-200 text-pink-800 dark:from-pink-950/40 dark:to-pink-900/40 dark:border-pink-800/50 dark:text-pink-300" },
  ],
  Thu: [
    { code: "CSE 400A", title: "Final Year Project/Thesis", time: "06:00 PM - 08:30 PM", room: "Thesis", color: "from-cyan-50/90 to-cyan-100/90 border-cyan-200 text-cyan-800 dark:from-cyan-950/40 dark:to-cyan-900/40 dark:border-cyan-800/50 dark:text-cyan-300" },
  ],
  Fri: [],
  Sat: [],
  Sun: [],
};

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

  const todayDayData = React.useMemo(() => {
    if (!todayInfo.hasStarted || !currentWeekData) return null;
    return currentWeekData.days.find((d) => d.dayOfWeek === todayInfo.dayName) || null;
  }, [currentWeekData, todayInfo.hasStarted, todayInfo.dayName]);

  const todayDayId = todayDayData?.id || "";

  const todayDateStr = React.useMemo(() => {
    if (!todayInfo.hasStarted) return "";
    return getCalendarDateFromIndex(state.settings.startDate, todayInfo.weekNumber, todayInfo.dayIndex);
  }, [state.settings.startDate, todayInfo.hasStarted, todayInfo.weekNumber, todayInfo.dayIndex]);

  // Day-type block durations per template
  const BLOCK_DURATIONS: Record<string, Record<string, string>> = {
    Sat: { dsa: "45m", "deep-dive": "1h15m", capstone: "2h", "reverse-engineering": "30m", "course-study": "1h" },
    Sun: { dsa: "45m", "deep-dive": "1h15m", capstone: "2h", "reverse-engineering": "30m", "course-study": "1h" },
    Mon: { dsa: "30m", "deep-dive": "30m", capstone: "1h", "reverse-engineering": "15m", "course-study": "45m" },
    Tue: { dsa: "45m", "deep-dive": "1h15m", capstone: "2h", "reverse-engineering": "30m", "course-study": "30m" },
    Wed: { dsa: "45m", "deep-dive": "1h15m", capstone: "2h", "reverse-engineering": "30m", "course-study": "30m" },
    Thu: { mock: "Mock", rest: "—" },
    Fri: { rest: "—" },
  };

  // Day-type badge config
  const DAY_TYPE_BADGES: Record<string, { label: string; color: string; dot: string }> = {
    Sat: { label: "Free Day", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25", dot: "bg-emerald-500" },
    Sun: { label: "Free Day", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25", dot: "bg-emerald-500" },
    Mon: { label: "Heavy Class Day", color: "text-red-400 bg-red-500/10 border-red-500/25", dot: "bg-red-500" },
    Tue: { label: "Medium Class Day", color: "text-amber-400 bg-amber-500/10 border-amber-500/25", dot: "bg-amber-500" },
    Wed: { label: "Class + Lab Day", color: "text-orange-400 bg-orange-500/10 border-orange-500/25", dot: "bg-orange-500" },
    Thu: { label: "Mock Day", color: "text-purple-400 bg-purple-500/10 border-purple-500/25", dot: "bg-purple-500" },
    Fri: { label: "Rest Day", color: "text-zinc-400 bg-zinc-500/10 border-zinc-500/25", dot: "bg-zinc-500" },
  };

  const dayBadge = DAY_TYPE_BADGES[todayInfo.dayName] || { label: todayInfo.dayName, color: "text-primary bg-primary/10", dot: "bg-primary" };
  const dayDurations = BLOCK_DURATIONS[todayInfo.dayName] || {};

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

      {/* University Routine Banner */}
      {(() => {
        const classesToday = UNIVERSITY_ROUTINE[todayInfo.dayName] || [];
        const isClassFree = classesToday.length === 0;

        return (
          <div className="p-4 rounded-xl border border-border/80 bg-card/25 backdrop-blur-xs flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:border-border/60 hover:shadow-xs">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20 shrink-0">
                <HugeiconsIcon icon={Calendar01Icon} className="size-5" />
              </div>
              <div className="flex flex-col leading-snug">
                <span className="text-[10px] text-muted-foreground font-mono uppercase font-bold tracking-wider">
                  University Routine
                </span>
                <h3 className="text-sm font-bold text-foreground">
                  {isClassFree ? "No classes scheduled today! Focus on your study plan." : `Today's Schedule (${classesToday.length} Class${classesToday.length > 1 ? "es" : ""})`}
                </h3>
              </div>
            </div>
            
            {!isClassFree ? (
              <div className="flex flex-wrap gap-2 items-center">
                {classesToday.map((cls, idx) => (
                  <div
                    key={cls.code + idx}
                    className={cn(
                      "px-2.5 py-1 rounded-md border text-[10px] font-semibold bg-gradient-to-br flex items-center gap-1.5 shadow-2xs",
                      cls.color
                    )}
                  >
                    <span className="font-bold">{cls.code}</span>
                    <span className="opacity-40">|</span>
                    <span className="font-mono text-[9px]">{cls.time.split(" - ")[0]}</span>
                    <span className="opacity-40">|</span>
                    <span className="font-mono text-[9px]">Room {cls.room}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/25 text-[10px] font-bold uppercase tracking-wider font-mono">
                🎉 Class-Free Study Day
              </div>
            )}
          </div>
        );
      })()}

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
            <div className="text-[10px] text-muted-foreground font-mono mt-1 flex items-center justify-between gap-2 overflow-hidden">
              <span className="truncate flex-1">
                Theme: {currentWeekData?.theme ? formatMarkdown(currentWeekData.theme) : "Loading..."}
              </span>
              {todayInfo.hasStarted && currentWeekData && (
                <span className="font-bold text-primary shrink-0">
                  {progress.weekProgress[todayInfo.weekId]?.percent || 0}% Done
                </span>
              )}
            </div>
            <Progress 
              value={todayInfo.hasStarted ? (progress.weekProgress[todayInfo.weekId]?.percent || 0) : 0} 
              className="h-1.5 mt-3 bg-muted" 
            />
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
                <span className={cn("text-[10px] uppercase font-bold font-mono px-2.5 py-0.5 rounded-full border inline-flex items-center gap-1.5", dayBadge.color)}>
                  <span className={cn("size-1.5 rounded-full shrink-0", dayBadge.dot)} />
                  {dayBadge.label}
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
                  {/* Start Trigger Banner */}
                  {todayDayData?.startTrigger && (
                    <div className="flex items-start gap-2.5 p-3 rounded-lg border border-amber-500/25 bg-amber-500/5 backdrop-blur-xs">
                      <HugeiconsIcon icon={Key01Icon} className="size-4 text-amber-400 shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-0.5 leading-tight">
                        <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider font-mono">Start Trigger</span>
                        <span className="text-xs text-foreground font-medium">{todayDayData.startTrigger}</span>
                      </div>
                    </div>
                  )}

                  {todayTasks.map((task, index) => {
                     const duration = dayDurations[task.category] || "";
                     const categoryLabel =
                       task.category === "dsa" ? "DSA"
                       : task.category === "deep-dive" ? "Core Deep Dive"
                       : task.category === "capstone" ? "Capstone"
                       : task.category === "reverse-engineering" ? "Rev Eng"
                       : task.category === "course-study" ? "Course Study"
                       : task.category === "mock" ? "Mock Practice"
                       : "Rest";
                     const blockLabel = duration ? `${categoryLabel} (${duration})` : categoryLabel;

                    return (
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
                            {formatMarkdown(task.title)}
                          </label>
                          <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider font-mono">
                            Block {index + 1} — {blockLabel}
                          </span>
                        </div>
                      </div>
                    );
                  })}

                  {/* Reward Banner */}
                  {todayDayData?.reward && (
                    <div className="flex items-start gap-2.5 p-3 rounded-lg border border-emerald-500/25 bg-emerald-500/5 backdrop-blur-xs">
                      <HugeiconsIcon icon={GiftIcon} className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-0.5 leading-tight">
                        <span className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider font-mono">Reward</span>
                        <span className="text-xs text-foreground font-medium">{todayDayData.reward}</span>
                      </div>
                    </div>
                  )}
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
          <Card className="bg-card/20 border-border/80 transition-all duration-300 hover:border-border/60">
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
                    {currentWeekData?.theme ? formatMarkdown(currentWeekData.theme) : "Loading..."}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0">
                  <HugeiconsIcon icon={BadgeCheckIcon} className="size-5" />
                </div>
                <div className="flex flex-col gap-0.5 leading-snug flex-1">
                  <span className="text-[10px] text-muted-foreground font-mono uppercase font-bold tracking-wider">
                    Build Goal
                  </span>
                  <span className="text-xs font-semibold text-foreground">
                    {currentWeekData?.capstoneMilestone ? formatMarkdown(currentWeekData.capstoneMilestone) : "No capstone task listed."}
                  </span>
                </div>
              </div>

              {/* Mock interview completion checklist */}
              {currentWeekData && (
                <div className="border-t border-border/40 pt-4 flex items-center justify-between">
                  <div className="flex flex-col leading-snug">
                    <span className="text-xs font-semibold text-foreground">Weekly Mock Interview</span>
                    <span className="text-[9px] text-muted-foreground font-mono">Friday Mock schedule</span>
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
