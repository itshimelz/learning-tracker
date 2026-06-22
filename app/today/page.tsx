"use client";

import * as React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PlayIcon,
  PauseIcon,
  RefreshIcon,
  CopyIcon,
  TimerIcon,
  Tick01Icon,
  BadgeCheckIcon,
  AlertIcon,
  ShieldIcon,
  ZapIcon,
  LeetcodeIcon,
  Calendar03Icon,
  Key01Icon,
  GiftIcon,
  GraduationCapIcon,
  BookOpen02Icon,
  CircleIcon,
} from "@hugeicons/core-free-icons";
import { toast } from "sonner";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useStore } from "@/lib/store/context";
import { useTimer } from "@/lib/store/timer-context";
import { useProgressCalc } from "@/hooks/use-progress-calc";
import { cn, getCalendarDateFromIndex, getDayNameFromIndex, formatMarkdown } from "@/lib/utils";
import type { Task } from "@/lib/types";

// ─────────────────────────────────────────────
// Helper: Dynamic block durations per day type
// ─────────────────────────────────────────────
type DayName = "Sat" | "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri";

function getBlockDuration(dayName: DayName, category: Task["category"]): number {
  switch (dayName) {
    case "Sat":
    case "Sun":
      switch (category) {
        case "dsa": return 45;
        case "deep-dive": return 75;
        case "capstone": return 120;
        case "reverse-engineering": return 30;
        case "course-study": return 60;
        default: return 0;
      }
    case "Mon":
      switch (category) {
        case "dsa": return 30;
        case "deep-dive": return 30;
        case "capstone": return 60;
        case "reverse-engineering": return 15;
        case "course-study": return 45;
        default: return 0;
      }
    case "Tue":
    case "Wed":
      switch (category) {
        case "dsa": return 45;
        case "deep-dive": return 75;
        case "capstone": return 120;
        case "reverse-engineering": return 30;
        case "course-study": return 30;
        default: return 0;
      }
    case "Thu":
      switch (category) {
        case "mock": return 45;
        case "course-study": return 30;
        default: return 0;
      }
    case "Fri":
      return 0;
    default:
      return 0;
  }
}

// ─────────────────────────────────────────────
// Helper: Category label with emoji
// ─────────────────────────────────────────────
function getCategoryLabel(category: Task["category"]): string {
  switch (category) {
    case "dsa": return "DSA";
    case "deep-dive": return "Core Theory";
    case "capstone": return "Capstone Build";
    case "reverse-engineering": return "Reflections";
    case "course-study": return "Course Study";
    case "mock": return "Mock Practice";
    case "rest": return "Rest";
    default: return category;
  }
}

// ─────────────────────────────────────────────
// Helper: Category Icon
// ─────────────────────────────────────────────
function CategoryIcon({ category, className }: { category: Task["category"]; className?: string }) {
  let icon = CircleIcon;
  switch (category) {
    case "dsa": icon = LeetcodeIcon; break;
    case "deep-dive": icon = BookOpen02Icon; break;
    case "capstone": icon = ShieldIcon; break;
    case "reverse-engineering": icon = RefreshIcon; break;
    case "course-study": icon = GraduationCapIcon; break;
    case "mock": icon = BadgeCheckIcon; break;
    default: icon = CircleIcon; break;
  }
  return <HugeiconsIcon icon={icon} className={cn("size-3 shrink-0", className)} />;
}

// ─────────────────────────────────────────────
// Helper: Day type badge color scheme
// ─────────────────────────────────────────────
function getDayTypeColor(dayName: DayName): { bg: string; text: string; border: string; dot: string } {
  switch (dayName) {
    case "Sat":
    case "Sun":
      return { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", dot: "bg-emerald-500" };
    case "Mon":
      return { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/20", dot: "bg-rose-500" };
    case "Tue":
    case "Wed":
      return { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", dot: "bg-amber-500" };
    case "Thu":
      return { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", dot: "bg-purple-500" };
    case "Fri":
      return { bg: "bg-zinc-500/10", text: "text-zinc-400", border: "border-zinc-500/20", dot: "bg-zinc-500" };
    default:
      return { bg: "bg-muted", text: "text-muted-foreground", border: "border-border", dot: "bg-muted-foreground" };
  }
}

// ─────────────────────────────────────────────
// Pomodoro Timer Subcomponent
// ─────────────────────────────────────────────
interface BlockTimerProps {
  blockId: string;
  durationMinutes: number;
  blockTitle: string;
}

function BlockTimer({ blockId, durationMinutes, blockTitle }: BlockTimerProps) {
  const { timer, startTimer, pauseTimer, resumeTimer, resetTimer } = useTimer();
  const isCurrentBlock = timer.blockId === blockId;
  const timeLeft = isCurrentBlock ? timer.timeLeft : durationMinutes * 60;
  const isRunning = isCurrentBlock ? timer.isRunning : false;

  const toggleTimer = () => {
    if (isCurrentBlock) {
      if (isRunning) {
        pauseTimer();
      } else {
        resumeTimer();
      }
    } else {
      startTimer(blockId, blockTitle, durationMinutes);
    }
  };

  const resetActiveTimer = () => {
    if (isCurrentBlock) {
      resetTimer();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className={cn(
      "flex items-center gap-3 bg-muted/40 border px-3 py-1.5 rounded-lg font-mono text-xs w-fit transition-all duration-300",
      isCurrentBlock && isRunning ? "border-primary/50 bg-primary/5 shadow-xs" : "border-border/50"
    )}>
      <HugeiconsIcon
        icon={TimerIcon}
        className={cn("size-4 shrink-0", isCurrentBlock && isRunning ? "text-primary animate-pulse" : "text-muted-foreground")}
      />
      <span className={cn("font-bold text-sm tracking-tight", isCurrentBlock && isRunning ? "text-primary" : "text-foreground")}>
        {formatTime(timeLeft)}
      </span>
      <div className="flex items-center gap-1 border-l border-border/60 pl-2">
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={toggleTimer}
          className="size-6 text-foreground hover:bg-muted"
          title={isRunning ? "Pause" : "Start"}
        >
          <HugeiconsIcon icon={isRunning ? PauseIcon : PlayIcon} className="size-3.5 fill-foreground/10" />
        </Button>
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={resetActiveTimer}
          disabled={!isCurrentBlock}
          className={cn("size-6 text-foreground hover:bg-muted", !isCurrentBlock && "opacity-40 cursor-not-allowed")}
          title="Reset"
        >
          <HugeiconsIcon icon={RefreshIcon} className="size-3.5" />
        </Button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Start Trigger Card
// ─────────────────────────────────────────────
function StartTriggerCard({ trigger }: { trigger: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] backdrop-blur-xl p-5 transition-all duration-500 hover:border-emerald-500/30 hover:bg-emerald-500/[0.06]">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-12 -right-12 size-32 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 size-24 rounded-full bg-primary/5 blur-2xl" />

      <div className="relative flex items-start gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 shadow-sm">
          <HugeiconsIcon icon={Key01Icon} className="size-5" />
        </div>
        <div className="flex flex-col gap-1.5 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/80 font-mono">
              2-Minute Start Trigger
            </span>
            <div className="h-px flex-1 bg-emerald-500/10" />
          </div>
          <p className="text-sm font-medium text-foreground/90 leading-relaxed">
            {formatMarkdown(trigger)}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Reward Card
// ─────────────────────────────────────────────
function RewardCard({ reward }: { reward: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.04] via-orange-500/[0.03] to-rose-500/[0.02] backdrop-blur-xl p-5 transition-all duration-500 hover:border-amber-500/30 hover:from-amber-500/[0.06] hover:via-orange-500/[0.05] hover:to-rose-500/[0.03]">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-10 -right-10 size-28 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-6 -left-6 size-20 rounded-full bg-orange-500/8 blur-2xl" />

      <div className="relative flex items-start gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 border border-amber-500/20 shadow-sm">
          <HugeiconsIcon icon={GiftIcon} className="size-5" />
        </div>
        <div className="flex flex-col gap-1.5 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/80 font-mono">
              Today&apos;s Reward
            </span>
            <div className="h-px flex-1 bg-amber-500/10" />
          </div>
          <p className="text-sm font-medium text-foreground/90 leading-relaxed">
            {formatMarkdown(reward)}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Day Type Badge
// ─────────────────────────────────────────────
function DayTypeBadge({ dayName, blockType }: { dayName: DayName; blockType?: string }) {
  const colors = getDayTypeColor(dayName);
  const label = blockType || dayName;

  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold font-mono tracking-wide border transition-all duration-200",
      colors.bg, colors.text, colors.border
    )}>
      <span className={cn("size-1.5 rounded-full shrink-0", colors.dot)} />
      {label}
    </span>
  );
}

// ═════════════════════════════════════════════
// Main Page Component
// ═════════════════════════════════════════════
export default function TodayFocusPage() {
  const { state, dispatch, isHydrated } = useStore();
  const progress = useProgressCalc();

  // 1. Calculate active week based on date settings
  const todayInfo = React.useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!state.settings.startDate) {
      return { hasStarted: false, daysUntilStart: 0, weekNumber: 1, weekId: "week-1", systemDayIndex: 0, systemDayName: "Sat" as const };
    }

    const start = new Date(state.settings.startDate + "T00:00:00");
    start.setHours(0, 0, 0, 0);

    const diffTime = today.getTime() - start.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hasStarted = diffDays >= 0;

    if (!hasStarted) {
      const daysUntilStart = Math.ceil((start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      return { hasStarted: false, daysUntilStart, weekNumber: 1, weekId: "week-1", systemDayIndex: 0, systemDayName: "Sat" as const };
    }

    const weekNumber = Math.min(12, Math.max(1, Math.floor(diffDays / 7) + 1));
    const weekId = `week-${weekNumber}`;
    const systemDayIndex = diffDays % 7;
    const systemDayName = getDayNameFromIndex(state.settings.startDate, weekNumber, systemDayIndex);

    return { hasStarted, daysUntilStart: 0, weekNumber, weekId, systemDayIndex, systemDayName };
  }, [state.settings.startDate]);

  // Selected navigation day index (0 to 6)
  const [selectedDayIndex, setSelectedDayIndex] = React.useState(0);

  // Sync selected day to system day index on load
  React.useEffect(() => {
    if (isHydrated) {
      if (todayInfo.hasStarted) {
        setSelectedDayIndex(todayInfo.systemDayIndex);
      } else {
        setSelectedDayIndex(0);
      }
    }
  }, [isHydrated, todayInfo.hasStarted, todayInfo.systemDayIndex]);

  const orderedWeekDayNames = React.useMemo(() => {
    if (!state.settings.startDate) {
      return ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
    }
    return Array.from({ length: 7 }).map((_, idx) => {
      return getDayNameFromIndex(state.settings.startDate, todayInfo.weekNumber, idx);
    });
  }, [state.settings.startDate, todayInfo.weekNumber]);

  const currentWeekData = React.useMemo(() => {
    return state.plan.months
      .flatMap((m) => m.weeks)
      .find((w) => w.id === todayInfo.weekId);
  }, [state.plan, todayInfo.weekId]);

  const selectedDayData = React.useMemo(() => {
    if (!currentWeekData) return undefined;
    const selectedDayName = orderedWeekDayNames[selectedDayIndex];
    return currentWeekData.days.find((d) => d.dayOfWeek === selectedDayName);
  }, [currentWeekData, selectedDayIndex, orderedWeekDayNames]);

  // Suggested resources matching this week
  const weekResources = React.useMemo(() => {
    return state.resources.filter((r) => r.weekIds.includes(todayInfo.weekId));
  }, [state.resources, todayInfo.weekId]);

  const dsaResources = React.useMemo(() => {
    return weekResources.filter((r) => r.category.toLowerCase() === "dsa");
  }, [weekResources]);

  const theoryResources = React.useMemo(() => {
    return weekResources.filter((r) => r.category.toLowerCase() !== "dsa");
  }, [weekResources]);

  // Obsidian clipboard helpers
  const [starState, setStarState] = React.useState({
    situation: "",
    task: "",
    action: "",
    result: "",
  });

  const selectedDayName = (orderedWeekDayNames[selectedDayIndex] || "Sat") as DayName;

  const copyStarToClipboard = (dsaTitle: string, deepDiveTitle: string) => {
    const md = `# Obsidian Engineering Journal Entry — Week ${todayInfo.weekNumber} ${selectedDayName}
- **Date**: ${new Date().toISOString().split("T")[0]}
- **DSA solved**: ${dsaTitle.replace(/^DSA Focus:\s*/i, "")}
- **Deep Dive Topic**: ${deepDiveTitle.replace(/^Deep Dive:\s*/i, "")}

## STAR Reflection
- **Situation**: ${starState.situation || "N/A"}
- **Task**: ${starState.task || "N/A"}
- **Action**: ${starState.action || "N/A"}
- **Result**: ${starState.result || "N/A"}
`;

    navigator.clipboard.writeText(md);
    toast.success("STAR template copied!", {
      description: "Copied Obsidian markdown file template to clipboard.",
    });
  };

  const handlePrevDay = () => {
    if (selectedDayIndex > 0) {
      setSelectedDayIndex(selectedDayIndex - 1);
    }
  };

  const handleNextDay = () => {
    if (selectedDayIndex < 6) {
      setSelectedDayIndex(selectedDayIndex + 1);
    }
  };

  const isSelectedDayCompleted = (idx: number) => {
    const dayName = orderedWeekDayNames[idx];
    const day = currentWeekData?.days.find((d) => d.dayOfWeek === dayName);
    if (!day || day.tasks.length === 0) return false;
    return day.tasks.every((t) => t.completed);
  };

  const selectedDayDateStr = React.useMemo(() => {
    return getCalendarDateFromIndex(state.settings.startDate, todayInfo.weekNumber, selectedDayIndex);
  }, [state.settings.startDate, todayInfo.weekNumber, selectedDayIndex]);

  const isMockOnlyDay = React.useMemo(() => {
    if (!selectedDayData || selectedDayData.tasks.length === 0) return false;
    return selectedDayData.tasks.every((t) => t.category === "mock");
  }, [selectedDayData]);

  const isRestOnlyDay = React.useMemo(() => {
    if (!selectedDayData || selectedDayData.tasks.length === 0) return false;
    return selectedDayData.tasks.every((t) => t.category === "rest");
  }, [selectedDayData]);

  if (!isHydrated) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <span className="text-xs text-muted-foreground font-mono">Loading study session...</span>
        </div>
      </div>
    );
  }

  if (!todayInfo.hasStarted) {
    const beginDateStr = new Date(state.settings.startDate + "T12:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
    return (
      <div className="flex flex-col gap-6 max-w-2xl mx-auto py-10">
        <Card className="bg-card/20 border-border/80 p-8 flex flex-col items-center text-center gap-6">
          <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <HugeiconsIcon icon={Calendar03Icon} className="size-7" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Prepare Your Study Workspace</h1>
            <p className="text-sm text-muted-foreground max-w-md">
              Your 12-week study plan is configured to start on <span className="font-semibold text-foreground">{beginDateStr}</span>. 
              Today is your final prep day. Let&apos;s make sure everything is ready to go!
            </p>
          </div>

          {/* Prep checklist */}
          <div className="w-full max-w-md bg-muted/30 border border-border/50 rounded-lg p-5 text-left space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono font-semibold">Workspace Checklist</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Checkbox id="prep-repo" className="mt-0.5" />
                <label htmlFor="prep-repo" className="text-xs text-foreground cursor-pointer select-none">
                  Initialize your main project repository and create the week-1 modules.
                </label>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox id="prep-obsidian" className="mt-0.5" />
                <label htmlFor="prep-obsidian" className="text-xs text-foreground cursor-pointer select-none">
                  Configure your Obsidian vault to store notes and use the STAR template.
                </label>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox id="prep-leetcode" className="mt-0.5" />
                <label htmlFor="prep-leetcode" className="text-xs text-foreground cursor-pointer select-none">
                  Bookmark LeetCode problem paths and set up a daily study block timer.
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-2">
            <Button
              className="flex-1"
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
            <Button variant="outline" render={<Link href="/plan" />} className="flex-1">
              View Syllabus Plan
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      {/* Week Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-4 gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-primary uppercase font-bold tracking-wider font-mono">
              Week {todayInfo.weekNumber} Syllabus Theme
            </span>
            {selectedDayDateStr && (
              <span className="text-[10px] text-muted-foreground font-mono font-bold bg-muted px-2 py-0.5 rounded-full">
                {selectedDayDateStr}
              </span>
            )}
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {currentWeekData?.theme ? formatMarkdown(currentWeekData.theme) : "Loading..."}
          </h1>
        </div>

        {/* Date Selector Row + Day Type Badge */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 border border-border bg-card/20 p-1 rounded-lg w-fit">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevDay}
              disabled={selectedDayIndex === 0}
              className="size-8 rounded-md"
            >
              <HugeiconsIcon icon={ArrowLeftIcon} className="size-4" />
            </Button>
            
            <div className="flex items-center gap-1">
              {orderedWeekDayNames.map((dayName, idx) => {
                const isSelected = selectedDayIndex === idx;
                const isCompleted = isSelectedDayCompleted(idx);
                return (
                  <button
                    key={dayName + idx}
                    onClick={() => setSelectedDayIndex(idx)}
                    className={cn(
                      "h-8 px-2.5 rounded-md text-xs font-semibold font-mono relative transition-all duration-200 focus:outline-hidden",
                      isSelected
                        ? "bg-primary text-primary-foreground font-bold shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      isCompleted && !isSelected && "text-emerald-500 hover:text-emerald-600"
                    )}
                  >
                    {dayName}
                    {isCompleted && (
                      <span className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-emerald-500 border border-background" />
                    )}
                  </button>
                );
              })}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleNextDay}
              disabled={selectedDayIndex === 6}
              className="size-8 rounded-md"
            >
              <HugeiconsIcon icon={ArrowRightIcon} className="size-4" />
            </Button>
          </div>

          {/* Day Type Badge */}
          <DayTypeBadge dayName={selectedDayName} blockType={selectedDayData?.blockType} />
        </div>
      </div>

      {/* Start Trigger Card */}
      {selectedDayData?.startTrigger && !isRestOnlyDay && (
        <StartTriggerCard trigger={selectedDayData.startTrigger} />
      )}

      {/* Weekend Checkpoint Views */}
      {isMockOnlyDay ? (
        <Card className="bg-card/20 border-border/80 p-6 flex flex-col gap-6">
          <div className="flex items-start gap-4 border-b border-border/40 pb-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary border border-primary/20 shrink-0">
              <HugeiconsIcon icon={BadgeCheckIcon} className="size-6" />
            </div>
            <div className="flex flex-col leading-snug">
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider font-mono">
                {selectedDayName} Milestone
              </span>
              <h2 className="text-lg font-bold text-foreground">Weekly Whiteboard & Mock Interview Prep</h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Practice whiteboard simulations, timed problem solving, and explain concepts out loud. Includes FYP prep review.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-sm text-foreground uppercase tracking-wider font-mono">Mock Tasks</h3>
              <div className="space-y-3">
                {selectedDayData?.tasks.map((task) => (
                  <div
                    key={task.id}
                    className={cn(
                      "flex items-start gap-3 p-3.5 rounded-lg border transition-all duration-300",
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
                          payload: { weekId: todayInfo.weekId, dayId: selectedDayData.id, taskId: task.id },
                        })
                      }
                      className="mt-0.5 shrink-0"
                    />
                    <div className="flex flex-col gap-0.5 leading-snug">
                      <label
                        htmlFor={task.id}
                        className={cn(
                          "text-xs font-semibold cursor-pointer select-none",
                          task.completed ? "text-muted-foreground line-through" : "text-foreground"
                        )}
                      >
                        {formatMarkdown(task.title)}
                      </label>
                      <span className="text-[9px] text-muted-foreground font-mono flex items-center gap-1.5">
                        <CategoryIcon category={task.category} />
                        {getCategoryLabel(task.category)} · {getBlockDuration(selectedDayName, task.category)}m
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 bg-muted/20 p-5 rounded-xl border border-border/40">
              <h3 className="font-semibold text-sm text-foreground uppercase tracking-wider font-mono">Concept Timer</h3>
              <p className="text-xs text-muted-foreground">
                Set a timer to practice explaining weekly deep dive topics out loud. Pretend you are in a live technical round!
              </p>
              <BlockTimer blockId={`${todayInfo.weekId}-mock-timer`} durationMinutes={5} blockTitle="Out Loud Concept Explanation" />
            </div>
          </div>

          {/* Reward card for mock day */}
          {selectedDayData?.reward && (
            <RewardCard reward={selectedDayData.reward} />
          )}
        </Card>
      ) : isRestOnlyDay ? (
        <Card className="bg-card/20 border-border/80 p-6 flex flex-col gap-4 text-center items-center py-12 max-w-xl mx-auto">
          <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 w-fit">
            <HugeiconsIcon icon={BadgeCheckIcon} className="size-8" />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold text-foreground">Rest & Recovery Day</h2>
            <p className="text-xs text-muted-foreground font-mono mt-0.5">{selectedDayName} · National holiday</p>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed mt-2 max-w-sm">
            Take a break! Rest is crucial for memory consolidation. Re-skim the notes you took in Obsidian this week, but do not study any new material. Your brain is encoding everything you learned.
          </p>
          {selectedDayData?.tasks.map((task) => (
            <div key={task.id} className="flex items-center gap-3 mt-4">
              <Checkbox
                id={task.id}
                checked={task.completed}
                onCheckedChange={() =>
                  dispatch({
                    type: "TOGGLE_TASK",
                    payload: { weekId: todayInfo.weekId, dayId: selectedDayData.id, taskId: task.id },
                  })
                }
              />
              <label htmlFor={task.id} className="text-xs font-semibold cursor-pointer select-none">
                {formatMarkdown(task.title)}
              </label>
            </div>
          ))}

          {/* Reward card for rest day */}
          {selectedDayData?.reward && (
            <div className="mt-4 w-full max-w-sm">
              <RewardCard reward={selectedDayData.reward} />
            </div>
          )}
        </Card>
      ) : (
        /* Weekday Study Block Cards */
        <div className="flex flex-col gap-6">
          {selectedDayData?.tasks.map((task, index) => {
            // Determine content based on block category
            const isDsa = task.category === "dsa";
            const isDeepDive = task.category === "deep-dive";
            const isCapstone = task.category === "capstone";
            const isRevEng = task.category === "reverse-engineering";
            const isCourseStudy = task.category === "course-study";
            const isMock = task.category === "mock";

            // Dynamic block duration based on day type
            const blockDuration = getBlockDuration(selectedDayName, task.category);
            const blockNumStr = `Block ${index + 1}`;
            
            // Collect titles for Obsidian clipboards
            const dsaTitle = selectedDayData?.tasks.find((t) => t.category === "dsa")?.title || "";
            const deepDiveTitle = selectedDayData?.tasks.find((t) => t.category === "deep-dive")?.title || "";

            return (
              <Card
                key={task.id}
                className={cn(
                  "bg-card/25 border-border/80 transition-all duration-300",
                  task.completed && "opacity-85 border-border/40 bg-muted/10"
                )}
              >
                <CardHeader className="border-b border-border/30 pb-3 flex flex-row items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={() =>
                        dispatch({
                          type: "TOGGLE_TASK",
                          payload: { weekId: todayInfo.weekId, dayId: selectedDayData.id, taskId: task.id },
                        })
                      }
                      className="mt-1"
                    />
                    <div className="flex flex-col gap-0.5 leading-snug">
                      <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider font-mono flex items-center gap-1.5">
                        <CategoryIcon category={task.category} />
                        {blockNumStr} — {getCategoryLabel(task.category)} ({blockDuration}m)
                      </span>
                      <h2 className={cn("text-sm font-bold text-foreground", task.completed && "line-through text-muted-foreground")}>
                        {formatMarkdown(task.title)}
                      </h2>
                    </div>
                  </div>
                  {!isRevEng && blockDuration > 0 && <BlockTimer blockId={task.id} durationMinutes={blockDuration} blockTitle={task.title} />}
                </CardHeader>

                <CardContent className="pt-4 text-xs text-muted-foreground leading-relaxed">
                  {/* DSA Specific content */}
                  {isDsa && (
                    <div className="flex flex-col gap-4">
                      <p>
                        Solve today&apos;s DSA task in clean Kotlin. Set a timer, solve it under {blockDuration} minutes, and verify correctness before referencing answers.
                      </p>
                      <div className="flex gap-2">
                        <Button
                          render={<Link href="/dsa" />}
                          size="sm"
                          variant="outline"
                          className="h-8 text-[11px] font-semibold"
                        >
                          <span className="flex items-center gap-1.5">
                            <HugeiconsIcon icon={LeetcodeIcon} className="size-3.5" />
                            Log solved problem details
                          </span>
                        </Button>
                      </div>

                      {/* suggested DSA resources */}
                      {dsaResources.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-border/20">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground font-mono">Suggested DSA Resources</span>
                          <div className="flex flex-col gap-1.5 mt-1.5">
                            {dsaResources.map((res) => (
                              <a
                                key={res.id}
                                href={res.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-2 rounded-lg bg-background/50 border border-border/50 hover:bg-muted/50 transition-colors"
                              >
                                <span className="text-xs font-semibold text-foreground line-clamp-1">{res.title}</span>
                                <span className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-muted text-muted-foreground uppercase">{res.type}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Deep Dive Specific content */}
                  {isDeepDive && (
                    <div className="flex flex-col gap-3">
                      <p>
                        Read official documentation, source code internals, or recommended articles on this concept. Jot down notes on *why* this operates this way, rather than just *how*.
                      </p>

                      {/* suggested Theory resources */}
                      {theoryResources.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-border/20">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground font-mono">Suggested Study Resources</span>
                          <div className="flex flex-col gap-1.5 mt-1.5">
                            {theoryResources.map((res) => (
                              <a
                                key={res.id}
                                href={res.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-2 rounded-lg bg-background/50 border border-border/50 hover:bg-muted/50 transition-colors"
                              >
                                <div className="flex flex-col gap-0.5 max-w-[80%]">
                                  <span className="text-xs font-semibold text-foreground line-clamp-1">{res.title}</span>
                                  <span className="text-[9px] text-muted-foreground font-mono">{res.category}</span>
                                </div>
                                <span className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-muted text-muted-foreground uppercase">{res.type}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Capstone Specific content */}
                  {isCapstone && (
                    <div className="flex flex-col gap-3">
                      <p>
                        Implement this feature in your capstone repository. Write production-ready, clean, testable codebase layers.
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="size-2 rounded-full bg-emerald-500" />
                        <span className="font-mono text-[10px] text-foreground font-semibold">
                          Weekly Build Target: {currentWeekData?.capstoneMilestone}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Course Study Specific content */}
                  {isCourseStudy && (
                    <div className="flex flex-col gap-3">
                      <p>
                        Review university course material, complete assignments, or prepare for upcoming class topics. Focus on areas that overlap with your interview prep track.
                      </p>
                    </div>
                  )}

                  {/* Reverse Engineering Obsidian Form */}
                  {isRevEng && (
                    <div className="flex flex-col gap-4 pt-1">
                      <p>
                        Reverse-engineer today&apos;s build issues, bugs, or deep dive theories into a STAR reflection format. Copy this template block straight into your Obsidian vault notes.
                      </p>
                      
                      <div className="grid gap-3 md:grid-cols-2 mt-2">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-semibold text-foreground uppercase tracking-wide font-mono">Situation</label>
                          <Input
                            placeholder="What broke, what was the context?"
                            value={starState.situation}
                            onChange={(e) => setStarState({ ...starState, situation: e.target.value })}
                            className="text-xs bg-background/50"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-semibold text-foreground uppercase tracking-wide font-mono">Task</label>
                          <Input
                            placeholder="What needed to be resolved or implemented?"
                            value={starState.task}
                            onChange={(e) => setStarState({ ...starState, task: e.target.value })}
                            className="text-xs bg-background/50"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-semibold text-foreground uppercase tracking-wide font-mono">Action</label>
                          <Textarea
                            placeholder="How did you diagnose it, what did you code?"
                            value={starState.action}
                            onChange={(e) => setStarState({ ...starState, action: e.target.value })}
                            className="text-xs bg-background/50 min-h-[60px]"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-semibold text-foreground uppercase tracking-wide font-mono">Result</label>
                          <Textarea
                            placeholder="What was the outcome, performance changes?"
                            value={starState.result}
                            onChange={(e) => setStarState({ ...starState, result: e.target.value })}
                            className="text-xs bg-background/50 min-h-[60px]"
                          />
                        </div>
                      </div>

                      <Button
                        onClick={() => copyStarToClipboard(dsaTitle, deepDiveTitle)}
                        variant="secondary"
                        size="sm"
                        className="w-fit h-8 text-[11px] font-semibold gap-1.5 mt-2"
                      >
                        <HugeiconsIcon icon={CopyIcon} className="size-3.5" />
                        Copy Obsidian Markdown
                      </Button>
                    </div>
                  )}

                  {/* Mock Specific content */}
                  {isMock && (
                    <div className="flex flex-col gap-4">
                      <p>
                        Set a timer to practice explaining weekly deep dive topics out loud, or conduct a whiteboard simulation. Pretend you are in a live technical round!
                      </p>
                      
                      <div className="flex flex-col gap-4 bg-muted/20 p-5 rounded-xl border border-border/40 w-fit">
                        <h3 className="font-semibold text-sm text-foreground uppercase tracking-wider font-mono">Mock Practice Timer</h3>
                        <BlockTimer blockId={`${todayInfo.weekId}-mock-timer`} durationMinutes={5} blockTitle="Out Loud Concept Explanation" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}

          {/* Reward Card — shown at the bottom of all study blocks */}
          {selectedDayData?.reward && (
            <RewardCard reward={selectedDayData.reward} />
          )}
        </div>
      )}
    </div>
  );
}
