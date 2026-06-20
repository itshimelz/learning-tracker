"use client";

import * as React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick01Icon, Task02Icon } from "@hugeicons/core-free-icons";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useStore } from "@/lib/store/context";
import { cn, getDayNameFromIndex } from "@/lib/utils";

export function HeatmapGrid() {
  const { state } = useStore();

  const weeks = React.useMemo(() => {
    return state.plan.months.flatMap((m) => m.weeks);
  }, [state.plan]);

  const orderedWeekDayNames = React.useMemo(() => {
    if (!state.settings.startDate) {
      return ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
    }
    return Array.from({ length: 7 }).map((_, idx) => {
      return getDayNameFromIndex(state.settings.startDate, 1, idx);
    });
  }, [state.settings.startDate]);

  // Color mapping based on completion ratio
  const getCellColor = (ratio: number, isRest: boolean) => {
    if (ratio === 0) return "bg-muted/20 border-border/50";
    if (ratio < 0.5) return "bg-primary/20 border-primary/30 text-primary";
    if (ratio < 1) return "bg-primary/50 border-primary/60 text-primary-foreground";
    return isRest 
      ? "bg-emerald-500/80 border-emerald-600/90 text-white shadow-[0_0_8px_rgba(16,185,129,0.2)]" 
      : "bg-primary border-primary-foreground/10 text-primary-foreground shadow-[0_0_8px_rgba(var(--primary),0.2)]";
  };

  return (
    <div className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-card/40 backdrop-blur-sm select-none">
      <div className="flex items-center justify-between border-b border-border/50 pb-2.5">
        <div className="flex items-center gap-2">
          <HugeiconsIcon icon={Task02Icon} className="size-4 text-primary" />
          <h3 className="font-semibold text-xs text-foreground uppercase tracking-wider">Syllabus Grid</h3>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground font-mono">
          <span>Less</span>
          <div className="size-2.5 rounded-xs bg-muted/20 border border-border/50" />
          <div className="size-2.5 rounded-xs bg-primary/20 border border-primary/30" />
          <div className="size-2.5 rounded-xs bg-primary/50 border border-primary/60" />
          <div className="size-2.5 rounded-xs bg-primary border border-primary-foreground/10" />
          <span>More</span>
        </div>
      </div>

      {/* Main Grid Wrapper with horizontal scrolling for responsiveness */}
      <div className="flex items-start gap-3 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-thin">
        {/* Row Headers (Day Names) - Fixed on the left */}
        <div className="flex flex-col gap-[7.5px] text-[10px] font-medium text-muted-foreground/60 font-mono shrink-0">
          <div className="h-[14px] flex items-center justify-start text-[9px] font-bold text-muted-foreground/45 uppercase select-none">
            Week
          </div>
          {orderedWeekDayNames.map((day, idx) => (
            <div key={day + idx} className="h-3.5 flex items-center justify-start leading-none select-none">
              {idx % 2 === 0 ? day : ""}
            </div>
          ))}
        </div>

        {/* Columns: each column is a week with a label and day cells */}
        <div className="flex gap-[7px] flex-1">
          {weeks.map((week) => (
            <div key={week.id} className="flex flex-col gap-[7.5px] items-center shrink-0">
              {/* Column header (Week number) */}
              <span className="text-[8px] font-extrabold text-muted-foreground/60 font-mono h-[14px] flex items-center justify-center select-none tracking-tighter">
                W{week.weekNumber}
              </span>
              
              {/* Vertical stack of day cells */}
              <div className="flex flex-col gap-[7.5px]">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const dayName = orderedWeekDayNames[dayIndex];
                  const day = week.days.find((d) => d.dayOfWeek === dayName);
                  if (!day) return null;

                  const totalTasks = day.tasks.length;
                  const completedTasks = day.tasks.filter((t) => t.completed).length;
                  const ratio = totalTasks > 0 ? completedTasks / totalTasks : 0;
                  const isRest = day.tasks.some((t) => t.category === "rest");

                  return (
                    <Tooltip key={dayIndex}>
                      <TooltipTrigger
                        render={
                          <Link
                            href={`/plan/${week.id}`}
                            className={cn(
                              "size-[14px] rounded-xs border transition-all duration-200 hover:scale-125 hover:z-10 focus:outline-none focus:ring-1 focus:ring-ring",
                              getCellColor(ratio, isRest)
                            )}
                          />
                        }
                      />
                      <TooltipContent
                        side="top"
                        align="center"
                        className="p-3 max-w-[260px] border border-border/80 bg-popover text-popover-foreground shadow-lg rounded-md font-sans"
                      >
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between border-b border-border/50 pb-1.5 font-mono text-[10px]">
                            <span className="font-semibold text-foreground">Week {week.weekNumber} — {dayName}</span>
                            <span className="text-primary font-bold">
                              {completedTasks}/{totalTasks} Blocks
                            </span>
                          </div>
                          <div className="space-y-1.5 max-h-[140px] overflow-y-auto pr-1">
                            {day.tasks.map((t) => (
                              <div key={t.id} className="flex items-start gap-2 text-[10px] leading-tight">
                                {t.completed ? (
                                  <HugeiconsIcon
                                    icon={Tick01Icon}
                                    className="size-3 text-emerald-500 shrink-0 mt-0.5"
                                    strokeWidth={3}
                                  />
                                ) : (
                                  <div className="size-2.5 rounded-full border border-muted-foreground/30 shrink-0 mt-0.5" />
                                )}
                                <span className={cn("whitespace-normal break-words max-w-[190px]", t.completed ? "text-muted-foreground line-through" : "text-foreground")}>
                                  {t.title
                                    .replace(/^DSA Focus:\s*/i, "")
                                    .replace(/^Deep Dive:\s*/i, "")
                                    .replace(/^Capstone Task:\s*/i, "")}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
