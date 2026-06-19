"use client";

import * as React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeftIcon,
  Tick01Icon,
  CircleIcon,
  BadgeCheckIcon,
  Task02Icon,
} from "@hugeicons/core-free-icons";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/store/context";
import { useProgressCalc } from "@/hooks/use-progress-calc";
import { getCalendarDateFromIndex, getDayNameFromIndex, cn } from "@/lib/utils";

interface WeekDetailPageProps {
  params: React.Usable<{
    weekId: string;
  }>;
}

export default function WeekDetailPage({ params }: WeekDetailPageProps) {
  const { weekId } = React.use(params);
  const { state, dispatch, isHydrated } = useStore();
  const progress = useProgressCalc();

  // Find target week in plan
  const weekData = React.useMemo(() => {
    return state.plan.months
      .flatMap((m) => m.weeks)
      .find((w) => w.id === weekId);
  }, [state.plan, weekId]);

  const weekProgressPercent = React.useMemo(() => {
    return progress.weekProgress[weekId]?.percent || 0;
  }, [progress.weekProgress, weekId]);

  const weekResources = React.useMemo(() => {
    return state.resources.filter((r) => r.weekIds.includes(weekId));
  }, [state.resources, weekId]);

  if (!isHydrated) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <span className="text-xs text-muted-foreground font-mono">Loading weekly planner...</span>
        </div>
      </div>
    );
  }

  if (!weekData) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h2 className="text-lg font-bold text-foreground">Week Not Found</h2>
        <p className="text-xs text-muted-foreground mt-1">The specified week does not exist in the syllabus.</p>
        <Button render={<Link href="/plan" />} className="mt-4 shadow-sm">
          Back to Curriculum
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      {/* Back navigation & Header */}
      <div className="flex flex-col gap-3 pb-4 border-b border-border">
        <Button
          render={<Link href="/plan" />}
          variant="ghost"
          size="sm"
          className="w-fit -ml-2 text-muted-foreground hover:text-foreground h-8 gap-1.5"
        >
          <HugeiconsIcon icon={ArrowLeftIcon} className="size-4" />
          Back to Curriculum
        </Button>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-1">
          <div className="flex flex-col gap-1 leading-snug">
            <span className="text-[10px] text-primary uppercase font-bold tracking-wider font-mono">
              Week {weekData.weekNumber} Workspace
            </span>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              {weekData.theme.replace(/\*\*/g, "")}
            </h1>
          </div>

          <div className="flex items-center gap-6 shrink-0 w-full md:w-auto">
            {/* Week Progress */}
            <div className="flex items-center gap-3 w-full md:w-48">
              <span className="text-xs font-semibold font-mono text-muted-foreground">{weekProgressPercent}%</span>
              <Progress value={weekProgressPercent} className="h-2 bg-muted flex-1" />
            </div>

            {/* Mock Toggle */}
            <Button
              variant={weekData.mockCompleted ? "secondary" : "outline"}
              size="sm"
              className="h-8 font-semibold text-xs gap-1.5 shrink-0"
              onClick={() =>
                dispatch({
                  type: "TOGGLE_MOCK",
                  payload: { weekId: weekData.id },
                })
              }
            >
              {weekData.mockCompleted ? (
                <>
                  <HugeiconsIcon icon={Tick01Icon} className="size-3.5 text-emerald-500" strokeWidth={3} />
                  Mock Complete
                </>
              ) : (
                "Mark Mock Complete"
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Week Day Grids */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {weekData.days.map((day, dayIndex) => {
          const isRest = day.tasks.some((t) => t.category === "rest");
          const isMock = dayIndex === 0;
          const calDate = getCalendarDateFromIndex(state.settings.startDate, weekData.weekNumber, dayIndex);
          const actualDayName = getDayNameFromIndex(state.settings.startDate, weekData.weekNumber, dayIndex);

          return (
            <Card
              key={day.id}
              className={cn(
                "bg-card/20 border-border/50 rounded-2xl flex flex-col h-fit transition-all duration-300 hover:scale-[1.01] hover:bg-card/35 hover:shadow-xs",
                day.tasks.every((t) => t.completed) && "border-border/30 bg-muted/10 opacity-90"
              )}
            >
              <CardHeader className="border-b border-border/40 pb-3 flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-sm font-bold text-foreground">{actualDayName}</CardTitle>
                  {calDate && (
                    <span className="text-[9px] text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded-sm font-semibold">
                      {calDate}
                    </span>
                  )}
                </div>
                {isRest ? (
                  <span className="text-[9px] text-emerald-500 font-bold uppercase tracking-wider font-mono">
                    Rest
                  </span>
                ) : isMock ? (
                  <span className="text-[9px] text-primary font-bold uppercase tracking-wider font-mono">
                    Mock Round
                  </span>
                ) : (
                  <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-wider font-mono">
                    Study Day
                  </span>
                )}
              </CardHeader>
              
              <CardContent className="pt-4 flex-1 flex flex-col gap-4">
                <div className="space-y-3.5">
                  {day.tasks.map((task) => (
                    <div
                      key={task.id}
                      className={cn(
                        "flex items-start gap-3 p-3 rounded-lg border transition-all duration-300",
                        task.completed
                          ? "bg-muted/40 border-border/40 opacity-80"
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
                              weekId: weekData.id,
                              dayId: day.id,
                              taskId: task.id,
                            },
                          })
                        }
                        className="mt-0.5 shrink-0"
                      />
                      <div className="flex flex-col gap-0.5 leading-snug">
                        <label
                          htmlFor={task.id}
                          className={cn(
                            "text-xs font-semibold cursor-pointer select-none whitespace-normal break-words max-w-[210px]",
                            task.completed ? "text-muted-foreground line-through" : "text-foreground"
                          )}
                        >
                          {task.title
                            .replace(/^DSA Focus:\s*/i, "")
                            .replace(/^Deep Dive:\s*/i, "")
                            .replace(/^Capstone Task:\s*/i, "")}
                        </label>
                        <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider font-mono">
                          {task.category === "dsa"
                            ? "Block 1 — DSA"
                            : task.category === "deep-dive"
                              ? "Block 2 — Deep Dive"
                              : task.category === "capstone"
                                ? "Block 3 — Capstone"
                                : task.category === "reverse-engineering"
                                  ? "Block 4 — Rev Eng"
                                  : task.category === "mock"
                                    ? "Saturday Mock"
                                    : "Sunday Rest"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Day Study Workspace Quick Link */}
              {!isRest && (
                <CardFooter className="border-t border-border/30 pt-3 pb-3 bg-muted/5">
                  <Button
                    render={<Link href="/today" />}
                    variant="ghost"
                    className="w-full text-xs font-semibold text-primary hover:text-primary justify-center gap-1.5 h-8"
                  >
                    Open daily workspace
                    <HugeiconsIcon icon={Task02Icon} className="size-3.5" />
                  </Button>
                </CardFooter>
              )}
            </Card>
          );
        })}
      </div>

      {/* Suggested Syllabus Resources */}
      {weekResources.length > 0 && (
        <Card className="bg-card/20 border-border/50 rounded-2xl p-6 mt-2">
          <CardHeader className="pb-4 pl-0 pt-0">
            <CardTitle className="text-sm font-bold text-foreground font-mono uppercase tracking-wider">Suggested Syllabus Resources</CardTitle>
            <CardDescription className="text-xs text-muted-foreground">Study reference materials and guides associated with this week's theme.</CardDescription>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {weekResources.map((res) => (
                <a
                  key={res.id}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col p-4 rounded-xl border border-border/60 bg-background/30 hover:bg-muted/30 hover:border-primary/40 transition-all duration-300 gap-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-bold text-foreground line-clamp-1 leading-snug">{res.title}</span>
                    <span className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-muted text-muted-foreground uppercase shrink-0">{res.type}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground font-mono">
                    <span>{res.category}</span>
                    {res.completed && (
                      <span className="text-emerald-500 font-bold flex items-center gap-0.5">
                        <HugeiconsIcon icon={Tick01Icon} className="size-3 text-emerald-500" strokeWidth={3} />
                        Completed
                      </span>
                    )}
                  </div>
                  {res.notes && <p className="text-[10px] text-muted-foreground leading-normal line-clamp-2 mt-1">{res.notes}</p>}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
