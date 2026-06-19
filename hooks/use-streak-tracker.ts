"use client";

import { useMemo } from "react";
import { useStore } from "@/lib/store/context";

export function useStreakTracker() {
  const { state } = useStore();

  return useMemo(() => {
    // 1. Collect all completion dates (YYYY-MM-DD)
    const completionDatesSet = new Set<string>();

    state.plan.months.forEach((month) => {
      month.weeks.forEach((week) => {
        week.days.forEach((day) => {
          day.tasks.forEach((task) => {
            if (task.completed && task.completedAt) {
              const dateStr = task.completedAt.split("T")[0];
              completionDatesSet.add(dateStr);
            }
          });
        });
      });
    });

    const dates = Array.from(completionDatesSet).sort(); // Ascending

    if (dates.length === 0) {
      return {
        currentStreak: 0,
        longestStreak: 0,
        lastActiveDate: null,
        activeDates: [],
      };
    }

    // Helpers to work with dates in local timezone
    const getLocalDateString = (d: Date) => {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const addDaysStr = (dateStr: string, days: number) => {
      const d = new Date(dateStr + "T12:00:00"); // middle of day to avoid timezone issues
      d.setDate(d.getDate() + days);
      return getLocalDateString(d);
    };

    const todayStr = getLocalDateString(new Date());
    const yesterdayStr = addDaysStr(todayStr, -1);

    // 2. Calculate current streak
    let currentStreak = 0;
    let checkDateStr = "";

    // If today is active, start counting from today.
    // If not today but yesterday was active, start counting from yesterday.
    // Otherwise, streak is broken (0).
    if (completionDatesSet.has(todayStr)) {
      currentStreak = 1;
      checkDateStr = todayStr;
    } else if (completionDatesSet.has(yesterdayStr)) {
      currentStreak = 1;
      checkDateStr = yesterdayStr;
    }

    if (currentStreak > 0) {
      // Walk backwards to find consecutive days
      let prevDateStr = addDaysStr(checkDateStr, -1);
      while (completionDatesSet.has(prevDateStr)) {
        currentStreak++;
        prevDateStr = addDaysStr(prevDateStr, -1);
      }
    }

    // 3. Calculate longest streak
    let longestStreak = 0;
    let tempStreak = 0;
    let expectedDateStr = "";

    dates.forEach((dateStr) => {
      if (tempStreak === 0) {
        tempStreak = 1;
        expectedDateStr = addDaysStr(dateStr, 1);
      } else {
        if (dateStr === expectedDateStr) {
          tempStreak++;
          expectedDateStr = addDaysStr(dateStr, 1);
        } else if (dateStr === addDaysStr(expectedDateStr, -1)) {
          // Same date, ignore duplicate entries on same day
        } else {
          // Streak broken, update max and reset
          if (tempStreak > longestStreak) {
            longestStreak = tempStreak;
          }
          tempStreak = 1;
          expectedDateStr = addDaysStr(dateStr, 1);
        }
      }
    });

    if (tempStreak > longestStreak) {
      longestStreak = tempStreak;
    }

    return {
      currentStreak,
      longestStreak,
      lastActiveDate: dates[dates.length - 1],
      activeDates: dates,
    };
  }, [state.plan]);
}
