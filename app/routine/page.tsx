"use client";

import * as React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar03Icon,
  BookOpen02Icon,
  Time02Icon,
  Location01Icon,
  TeacherIcon,
  ArrowLeftIcon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn, formatMarkdown } from "@/lib/utils";

// Course data type definition
interface CourseInfo {
  code: string;
  title: string;
  section: string;
  schedule: {
    day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
    room: string;
    time: string;
    startTime: string; // for sorting
  }[];
  color: string;
}

const COURSES: CourseInfo[] = [
  {
    code: "CSE 323",
    title: "Cryptography and Cybersecurity",
    section: "231_D3",
    color: "from-blue-50/80 to-indigo-50/80 border-blue-200 text-blue-800 dark:from-blue-950/40 dark:to-indigo-950/40 dark:border-blue-900/50 dark:text-blue-200",
    schedule: [
      { day: "Mon", room: "H107", time: "08:30 AM - 10:00 AM", startTime: "08:30" },
      { day: "Wed", room: "H107", time: "08:30 AM - 10:00 AM", startTime: "08:30" },
    ],
  },
  {
    code: "CSE 413",
    title: "Natural Language Processing",
    section: "231_D1",
    color: "from-purple-50/80 to-violet-50/80 border-purple-200 text-purple-800 dark:from-purple-950/40 dark:to-violet-950/40 dark:border-purple-900/50 dark:text-purple-200",
    schedule: [
      { day: "Mon", room: "A602", time: "10:00 AM - 11:30 AM", startTime: "10:00" },
      { day: "Wed", room: "A-605", time: "10:00 AM - 11:30 AM", startTime: "10:00" },
    ],
  },
  {
    code: "GED 403",
    title: "Industrial and Operational Management",
    section: "231_D2",
    color: "from-amber-50/80 to-orange-50/80 border-amber-200 text-amber-800 dark:from-amber-950/40 dark:to-orange-950/40 dark:border-amber-900/50 dark:text-amber-200",
    schedule: [
      { day: "Mon", room: "A603", time: "11:30 AM - 01:00 PM", startTime: "11:30" },
      { day: "Tue", room: "K106", time: "03:00 PM - 04:30 PM", startTime: "15:00" },
    ],
  },
  {
    code: "GED 407",
    title: "Professional Ethics & Environmental Protection",
    section: "231_D2",
    color: "from-emerald-50/80 to-teal-50/80 border-emerald-200 text-emerald-800 dark:from-emerald-950/40 dark:to-teal-950/40 dark:border-emerald-900/50 dark:text-emerald-200",
    schedule: [
      { day: "Mon", room: "H105", time: "01:30 PM - 03:00 PM", startTime: "13:30" },
      { day: "Tue", room: "K106", time: "01:30 PM - 03:00 PM", startTime: "13:30" },
    ],
  },
  {
    code: "CSE 414",
    title: "Natural Language Processing Lab",
    section: "231_D2",
    color: "from-pink-50/80 to-rose-50/80 border-pink-200 text-pink-800 dark:from-pink-950/40 dark:to-rose-950/40 dark:border-pink-900/50 dark:text-pink-200",
    schedule: [
      { day: "Wed", room: "K102", time: "01:30 PM - 03:30 PM", startTime: "13:30" },
    ],
  },
  {
    code: "CSE 400A",
    title: "Final Year Project / Thesis",
    section: "Summer_26_400A",
    color: "from-cyan-50/80 to-sky-50/80 border-cyan-200 text-cyan-800 dark:from-cyan-950/40 dark:to-sky-950/40 dark:border-cyan-900/50 dark:text-cyan-200",
    schedule: [
      { day: "Thu", room: "Lab/Seminar", time: "06:00 PM - 08:30 PM", startTime: "18:00" },
    ],
  },
];

const DAYS_OF_WEEK = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"] as const;

export default function RoutinePage() {
  // Group schedule slots by day of week
  const scheduleByDay = React.useMemo(() => {
    const dayMap: Record<string, { code: string; title: string; room: string; time: string; startTime: string; color: string }[]> = {};
    
    DAYS_OF_WEEK.forEach((d) => {
      dayMap[d] = [];
    });

    COURSES.forEach((course) => {
      course.schedule.forEach((slot) => {
        dayMap[slot.day].push({
          code: course.code,
          title: course.title,
          room: slot.room,
          time: slot.time,
          startTime: slot.startTime,
          color: course.color,
        });
      });
    });

    // Sort slots within each day chronologically
    DAYS_OF_WEEK.forEach((d) => {
      dayMap[d].sort((a, b) => a.startTime.localeCompare(b.startTime));
    });

    return dayMap;
  }, []);

  return (
    <div className="flex flex-col gap-6 lg:gap-8 max-w-5xl mx-auto pb-10">
      {/* Header section */}
      <div className="flex flex-col gap-3 pb-4 border-b border-border">
        <Button
          render={<Link href="/" />}
          variant="ghost"
          size="sm"
          className="w-fit -ml-2 text-muted-foreground hover:text-foreground h-8 gap-1.5"
        >
          <HugeiconsIcon icon={ArrowLeftIcon} className="size-4" />
          Back to Dashboard
        </Button>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-1">
          <div className="flex flex-col gap-1 leading-snug">
            <div className="flex items-center gap-2 text-primary">
              <HugeiconsIcon icon={Calendar03Icon} className="size-4.5" />
              <span className="text-[10px] uppercase font-bold tracking-wider font-mono">Academic Planner</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
              University Class Routine
            </h1>
            <p className="text-xs text-muted-foreground mt-0.5">
              Semester: Summer 2026 • CSE Curriculum Graph
            </p>
          </div>
        </div>
      </div>

      {/* Integration Info Banner */}
      <div className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5 text-xs leading-relaxed text-muted-foreground">
        <HugeiconsIcon icon={InformationCircleIcon} className="size-5 text-primary shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1">
          <span className="font-bold text-foreground">Study Plan Integration</span>
          <p>
            {formatMarkdown("Your Android Developer Study Plan is configured around this schedule. On class-heavy days (**Monday** and **Wednesday**), the Android workload is scaled down to a single timed **DSA** challenge (~45m). On free days (**Saturday**, **Sunday**, and **Friday**), the study plan scales up to full 4-block deep work sessions.")}
          </p>
        </div>
      </div>

      {/* Timetable Calendar Grid */}
      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-muted-foreground">Weekly Timetable</h2>
        <div className="grid gap-4 md:grid-cols-7">
          {DAYS_OF_WEEK.map((day) => {
            const classes = scheduleByDay[day];
            const isWeekend = day === "Sat" || day === "Sun" || day === "Fri";
            
            return (
              <Card 
                key={day} 
                className={cn(
                  "bg-card/25 border-border/60 flex flex-col h-full",
                  isWeekend && "bg-muted/10 border-border/30 opacity-90"
                )}
              >
                <CardHeader className="p-3 border-b border-border/40 text-center">
                  <span className="text-xs font-bold text-foreground">{day}</span>
                  {isWeekend && (
                    <span className="text-[8px] text-emerald-500 font-mono font-bold uppercase tracking-widest mt-0.5">
                      No Class
                    </span>
                  )}
                </CardHeader>
                <CardContent className="p-3 flex-1 flex flex-col gap-2">
                  {classes.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center py-8 text-center">
                      <span className="text-[10px] text-muted-foreground font-mono italic">
                        {isWeekend ? "Syllabus Study Day" : "No classes scheduled"}
                      </span>
                    </div>
                  ) : (
                    classes.map((cls, idx) => (
                      <div 
                        key={cls.code + idx}
                        className={cn(
                          "p-2.5 rounded-lg border bg-gradient-to-br text-left flex flex-col gap-1.5 transition-all duration-300 hover:scale-[1.02]",
                          cls.color
                        )}
                      >
                        <div className="flex flex-col gap-0.5 leading-none">
                          <span className="text-[10px] font-extrabold tracking-tight">{cls.code}</span>
                          <span className="text-[9px] font-semibold opacity-80 truncate" title={cls.title}>
                            {cls.title}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 text-[8px] font-mono opacity-90 border-t border-current/10 pt-1">
                          <span className="flex items-center gap-1">
                            <HugeiconsIcon icon={Time02Icon} className="size-2.5" />
                            {cls.time.split(" - ")[0]}
                          </span>
                          <span className="flex items-center gap-1">
                            <HugeiconsIcon icon={Location01Icon} className="size-2.5" />
                            Room {cls.room}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Detailed Course Listing */}
      <div className="flex flex-col gap-4 mt-2">
        <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-muted-foreground">Course Information</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {COURSES.map((course) => (
            <Card key={course.code} className="bg-card/25 border-border/80 flex flex-col shadow-xs">
              <CardHeader className="p-5 pb-3 border-b border-border/30">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1 leading-snug">
                    <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full w-fit">
                      Section {course.section}
                    </span>
                    <CardTitle className="text-sm font-bold text-foreground mt-1">{course.title}</CardTitle>
                  </div>
                  <span className="font-mono text-xs font-bold text-foreground shrink-0">{course.code}</span>
                </div>
              </CardHeader>
              <CardContent className="p-5 flex flex-col gap-3 text-xs">
                <span className="font-mono text-[10px] uppercase font-bold text-muted-foreground tracking-wider select-none">
                  Weekly Class Slots
                </span>
                <div className="flex flex-col gap-2">
                  {course.schedule.map((slot, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-between p-2 rounded-lg bg-muted/20 border border-border/40 font-mono text-[11px]"
                    >
                      <span className="font-bold text-foreground flex items-center gap-1.5">
                        <HugeiconsIcon icon={Calendar03Icon} className="size-3.5 text-muted-foreground" />
                        {slot.day === "Mon" ? "Monday" : slot.day === "Tue" ? "Tuesday" : slot.day === "Wed" ? "Wednesday" : "Thursday"}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-muted-foreground flex items-center gap-1">
                          <HugeiconsIcon icon={Time02Icon} className="size-3 text-muted-foreground" />
                          {slot.time}
                        </span>
                        <span className="text-primary font-bold flex items-center gap-1">
                          <HugeiconsIcon icon={Location01Icon} className="size-3 text-primary/80" />
                          Room {slot.room}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
