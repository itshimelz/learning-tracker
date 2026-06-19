import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCalendarDate(
  startDateStr: string,
  weekNumber: number,
  dayOfWeek: "Sat" | "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri"
): string {
  if (!startDateStr) return "";
  try {
    const start = new Date(startDateStr + "T12:00:00");
    const dayIndexes: Record<string, number> = {
      Sun: 0,
      Mon: 1,
      Tue: 2,
      Wed: 3,
      Thu: 4,
      Fri: 5,
      Sat: 6,
    };
    
    const startDayOfWeekIndex = start.getDay(); // 0 (Sun) to 6 (Sat)
    const targetDayOfWeekIndex = dayIndexes[dayOfWeek];
    
    // Find index of targetDayOfWeek relative to startDayOfWeekIndex
    const relativeDayIndex = (targetDayOfWeekIndex - startDayOfWeekIndex + 7) % 7;
    
    const offset = (weekNumber - 1) * 7 + relativeDayIndex;
    start.setDate(start.getDate() + offset);
    return start.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch (e) {
    return "";
  }
}

export function getCalendarDateFromIndex(startDateStr: string, weekNumber: number, dayIndex: number): string {
  if (!startDateStr) return "";
  try {
    const start = new Date(startDateStr + "T12:00:00");
    const offset = (weekNumber - 1) * 7 + dayIndex;
    start.setDate(start.getDate() + offset);
    return start.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch (e) {
    return "";
  }
}

export function getDayNameFromIndex(startDateStr: string, weekNumber: number, dayIndex: number): "Sat" | "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" {
  const days: ("Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat")[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  if (!startDateStr) {
    const defaultWeekDays: ("Sat" | "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri")[] = [
      "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"
    ];
    return defaultWeekDays[dayIndex % 7] || "Sat";
  }
  try {
    const start = new Date(startDateStr + "T12:00:00");
    const offset = (weekNumber - 1) * 7 + dayIndex;
    start.setDate(start.getDate() + offset);
    
    const name = days[start.getDay()];
    return name === "Sun" || name === "Mon" || name === "Tue" || name === "Wed" || name === "Thu" || name === "Fri" || name === "Sat" ? name : "Sat";
  } catch (e) {
    return "Sat";
  }
}
