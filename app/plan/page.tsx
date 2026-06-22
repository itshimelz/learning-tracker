"use client";

import * as React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CalendarIcon,
  Tick01Icon,
  CircleIcon,
  BadgeCheckIcon,
  ArrowRightIcon,
  Task02Icon,
  Key01Icon,
  GiftIcon,
} from "@hugeicons/core-free-icons";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/store/context";
import { useProgressCalc } from "@/hooks/use-progress-calc";
import { getCalendarDateFromIndex, getDayNameFromIndex, cn, formatMarkdown } from "@/lib/utils";

export default function FullPlanPage() {
  const { state, dispatch, isHydrated } = useStore();
  const progress = useProgressCalc();

  if (!isHydrated) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <span className="text-xs text-muted-foreground font-mono">Loading full syllabus...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-4 gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Syllabus Curriculum
          </h1>
          <p className="text-xs text-muted-foreground font-mono mt-0.5">
            Browse and manage all 12 weeks of the prep plan.
          </p>
        </div>
      </div>

      {/* Month Tabs */}
      <Tabs defaultValue="month-1" className="w-full">
        <TabsList className="flex w-full mb-6 bg-muted/40 p-1 border border-border/80 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] justify-start md:justify-center rounded-lg gap-1.5 shrink-0">
          {state.plan.months.map((month) => {
            let tabTitle = month.title;
            if (month.id === "month-1") tabTitle = "Kotlin & Compose";
            if (month.id === "month-2") tabTitle = "Concurrency & Data";
            if (month.id === "month-3") tabTitle = "Testing & Systems";
            
            return (
              <TabsTrigger key={month.id} value={month.id} className="text-xs font-semibold py-2 px-3 sm:px-6 flex-1 md:flex-initial whitespace-nowrap transition-all duration-200">
                {tabTitle}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {state.plan.months.map((month) => {
          const monthProgress = progress.monthProgress[month.id]?.percent || 0;

          return (
            <TabsContent key={month.id} value={month.id} className="flex flex-col gap-6 outline-hidden">
              {/* Month Overview Card */}
              <Card className="bg-card/20 border-none shadow-none p-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] text-primary uppercase font-bold tracking-wider font-mono">
                      Phase Focus
                    </span>
                    <h2 className="text-base font-bold text-foreground">{month.title}</h2>
                  </div>
                  <div className="flex items-center gap-3 w-full md:w-64 shrink-0">
                    <span className="text-xs font-semibold font-mono text-muted-foreground">{monthProgress}%</span>
                    <Progress value={monthProgress} className="h-2 bg-muted flex-1" />
                  </div>
                </div>
              </Card>

              {/* Weeks Accordion */}
              <Accordion defaultValue={month.weeks[0]?.id ? [month.weeks[0].id] : []} className="w-full space-y-4">
                {month.weeks.map((week) => {
                  const weekProgress = progress.weekProgress[week.id]?.percent || 0;
                  
                  return (
                    <AccordionItem
                      key={week.id}
                      value={week.id}
                      className="border border-border/50 rounded-2xl bg-card/20 hover:bg-card/35 hover:border-primary/20 transition-all duration-300 overflow-hidden px-4 md:px-6 shadow-xs"
                    >
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex flex-col md:flex-row md:items-center text-left justify-between w-full pr-4 gap-4">
                          <div className="flex flex-col gap-0.5 leading-tight">
                            <span className="text-[9px] text-primary uppercase font-bold tracking-wider font-mono">
                              Week {week.weekNumber}
                            </span>
                            <span className="text-sm font-bold text-foreground hover:text-primary transition-colors">
                              {formatMarkdown(week.theme)}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-6 shrink-0 ml-auto md:ml-0">
                            {/* Week completion status */}
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-semibold font-mono text-muted-foreground">
                                {weekProgress}%
                              </span>
                              <Progress value={weekProgress} className="h-1.5 w-20 bg-muted" />
                            </div>

                            {/* Weekly Mock completion checkbox */}
                            <div
                              className="flex items-center gap-2"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              <Checkbox
                                id={`mock-${week.id}`}
                                checked={week.mockCompleted}
                                onCheckedChange={() =>
                                  dispatch({
                                    type: "TOGGLE_MOCK",
                                    payload: { weekId: week.id },
                                  })
                                }
                                className="size-4 shrink-0"
                              />
                              <label
                                htmlFor={`mock-${week.id}`}
                                className="text-[10px] uppercase font-bold tracking-wider font-mono text-muted-foreground select-none cursor-pointer"
                              >
                                Mock Done
                              </label>
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="pb-6 border-t border-border/20 pt-4">
                        {/* Day-by-day stack */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {week.days.map((day, dayIndex) => {
                            const isRest = day.tasks.some((t) => t.category === "rest");
                            const isMock = day.tasks.some((t) => t.category === "mock");
                            const calDate = getCalendarDateFromIndex(state.settings.startDate, week.weekNumber, dayIndex);
                            const actualDayName = getDayNameFromIndex(state.settings.startDate, week.weekNumber, dayIndex);

                            // Day type badge config based on day of week
                            const dayTypeConfig: Record<string, { classes: string; label: string; dot: string }> = {
                              Sat: { classes: "bg-emerald-500/10 text-emerald-500 border-emerald-500/25", label: "Free Day", dot: "bg-emerald-500" },
                              Sun: { classes: "bg-emerald-500/10 text-emerald-500 border-emerald-500/25", label: "Free Day", dot: "bg-emerald-500" },
                              Mon: { classes: "bg-rose-500/10 text-rose-500 border-rose-500/25", label: "Heavy Class", dot: "bg-rose-500" },
                              Tue: { classes: "bg-amber-500/10 text-amber-500 border-amber-500/25", label: "Medium Class", dot: "bg-amber-500" },
                              Wed: { classes: "bg-amber-500/10 text-amber-500 border-amber-500/25", label: "Class + Lab", dot: "bg-orange-500" },
                              Thu: { classes: "bg-purple-500/10 text-purple-500 border-purple-500/25", label: "Mock Day", dot: "bg-purple-500" },
                              Fri: { classes: "bg-gray-500/10 text-gray-500 border-gray-500/25", label: "Rest Day", dot: "bg-zinc-500" },
                            };
                            const dayType = dayTypeConfig[day.dayOfWeek] || dayTypeConfig["Sat"];

                            return (
                              <div
                                key={day.id}
                                className={cn(
                                  "flex flex-col gap-3 p-4.5 rounded-xl border bg-background/45 transition-all duration-300 hover:scale-[1.01] hover:bg-background/60 hover:shadow-xs",
                                  isRest 
                                    ? "border-emerald-500/30 bg-emerald-500/[3%] hover:border-emerald-500/40 hover:bg-emerald-500/[4%]" 
                                    : "border-border/50 hover:border-primary/20"
                                )}
                              >
                                {/* Day Title */}
                                <div className="flex items-center justify-between border-b border-border/40 pb-1.5">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs font-bold text-foreground">{actualDayName}</span>
                                    {calDate && (
                                      <span className="text-[9px] text-muted-foreground font-mono bg-muted px-1.5 py-0.5 rounded-sm">
                                        {calDate}
                                      </span>
                                    )}
                                  </div>
                                  <span className={cn(
                                    "text-[9px] font-bold tracking-wider font-mono px-2 py-0.5 rounded-full border inline-flex items-center gap-1.5",
                                    dayType.classes
                                  )}>
                                    <span className={cn("size-1.5 rounded-full shrink-0", dayType.dot)} />
                                    {dayType.label}
                                  </span>
                                </div>

                                {/* Task Rows */}
                                <div className="space-y-2.5 flex-1">
                                  {day.tasks.map((task) => (
                                    <div key={task.id} className="flex items-start gap-2.5">
                                      <Checkbox
                                        id={task.id}
                                        checked={task.completed}
                                        onCheckedChange={() =>
                                          dispatch({
                                            type: "TOGGLE_TASK",
                                            payload: {
                                              weekId: week.id,
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
                                            "text-xs font-semibold cursor-pointer select-none whitespace-normal break-words max-w-[220px]",
                                            task.completed ? "text-muted-foreground line-through" : "text-foreground"
                                          )}
                                        >
                                          {formatMarkdown(
                                            task.title
                                              .replace(/^DSA Focus:\s*/i, "")
                                              .replace(/^Deep Dive:\s*/i, "")
                                              .replace(/^Capstone Task:\s*/i, "")
                                          )}
                                        </label>
                                        <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider font-mono">
                                          {task.category === "dsa"
                                            ? "DSA"
                                            : task.category === "deep-dive"
                                              ? "Deep Dive"
                                              : task.category === "capstone"
                                                ? "Capstone"
                                                : task.category === "reverse-engineering"
                                                  ? "Rev Eng"
                                                  : task.category === "course-study"
                                                    ? "Course"
                                                    : task.category === "mock"
                                                      ? "Mock Round"
                                                      : "Rest"}
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                {/* Start Trigger */}
                                {day.startTrigger && day.startTrigger !== "No trigger" && (
                                  <p className="text-[10px] text-muted-foreground italic leading-relaxed mt-1.5 flex items-center gap-1.5">
                                    <HugeiconsIcon icon={Key01Icon} className="size-3 text-amber-500 shrink-0" />
                                    &ldquo;{day.startTrigger}&rdquo;
                                  </p>
                                )}

                                {/* Reward */}
                                {day.reward && (
                                  <p className="text-[10px] text-muted-foreground leading-relaxed mt-1 flex items-center gap-1.5">
                                    <HugeiconsIcon icon={GiftIcon} className="size-3 text-emerald-500 shrink-0" />
                                    {day.reward}
                                  </p>
                                )}

                                {/* Open Day Detail Link */}
                                <Button
                                  render={<Link href={`/plan/${week.id}`} />}
                                  variant="ghost"
                                  size="xs"
                                  className="mt-2 text-primary hover:text-primary justify-start p-0 h-6 gap-1"
                                >
                                  <span className="flex items-center gap-1">
                                    Open weekly workspace
                                    <HugeiconsIcon icon={ArrowRightIcon} className="size-3" />
                                  </span>
                                </Button>
                              </div>
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
