"use client";

import { useMemo } from "react";
import { useStore } from "@/lib/store/context";

export interface ProgressSummary {
  overallPercent: number;
  totalTasks: number;
  completedTasks: number;
  
  monthProgress: Record<string, { percent: number; completed: number; total: number }>;
  weekProgress: Record<string, { percent: number; completed: number; total: number }>;
  categoryProgress: Record<string, { percent: number; completed: number; total: number }>;

  dsaStats: {
    total: number;
    solved: number;
    percent: number;
    easy: { total: number; solved: number };
    medium: { total: number; solved: number };
    hard: { total: number; solved: number };
  };
}

export function useProgressCalc(): ProgressSummary {
  const { state } = useStore();

  return useMemo(() => {
    let totalTasksCount = 0;
    let completedTasksCount = 0;

    const monthProgress: ProgressSummary["monthProgress"] = {};
    const weekProgress: ProgressSummary["weekProgress"] = {};
    const categoryProgress: ProgressSummary["categoryProgress"] = {
      "dsa": { percent: 0, completed: 0, total: 0 },
      "deep-dive": { percent: 0, completed: 0, total: 0 },
      "capstone": { percent: 0, completed: 0, total: 0 },
      "reverse-engineering": { percent: 0, completed: 0, total: 0 },
      "mock": { percent: 0, completed: 0, total: 0 },
      "rest": { percent: 0, completed: 0, total: 0 },
    };

    // Calculate plan progress
    state.plan.months.forEach((month) => {
      let monthTotal = 0;
      let monthCompleted = 0;

      month.weeks.forEach((week) => {
        let weekTotal = 0;
        let weekCompleted = 0;

        week.days.forEach((day) => {
          day.tasks.forEach((task) => {
            // Count all tasks except rest days if we want to be strict,
            // or count all tasks. Let's count all tasks.
            totalTasksCount++;
            weekTotal++;
            monthTotal++;

            if (task.completed) {
              completedTasksCount++;
              weekCompleted++;
              monthCompleted++;
            }

            // Category progress
            if (categoryProgress[task.category]) {
              categoryProgress[task.category].total++;
              if (task.completed) {
                categoryProgress[task.category].completed++;
              }
            }
          });
        });

        // Add mock interview as a task if mockCompleted is checked
        // (Wait, mock is toggleable per week in progress tracker, let's track it separately or combine)
        weekProgress[week.id] = {
          total: weekTotal,
          completed: weekCompleted,
          percent: weekTotal > 0 ? Math.round((weekCompleted / weekTotal) * 100) : 0,
        };
      });

      monthProgress[month.id] = {
        total: monthTotal,
        completed: monthCompleted,
        percent: monthTotal > 0 ? Math.round((monthCompleted / monthTotal) * 100) : 0,
      };
    });

    // Compute category percentages
    Object.keys(categoryProgress).forEach((cat) => {
      const stats = categoryProgress[cat];
      stats.percent = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;
    });

    const overallPercent = totalTasksCount > 0 ? Math.round((completedTasksCount / totalTasksCount) * 100) : 0;

    // Calculate DSA Tracker stats
    const dsaStats = {
      total: state.dsaProblems.length,
      solved: 0,
      percent: 0,
      easy: { total: 0, solved: 0 },
      medium: { total: 0, solved: 0 },
      hard: { total: 0, solved: 0 },
    };

    state.dsaProblems.forEach((prob) => {
      if (prob.solved) {
        dsaStats.solved++;
      }

      const diff = prob.difficulty; // "easy" | "medium" | "hard"
      if (dsaStats[diff]) {
        dsaStats[diff].total++;
        if (prob.solved) {
          dsaStats[diff].solved++;
        }
      }
    });

    dsaStats.percent = dsaStats.total > 0 ? Math.round((dsaStats.solved / dsaStats.total) * 100) : 0;

    return {
      overallPercent,
      totalTasks: totalTasksCount,
      completedTasks: completedTasksCount,
      monthProgress,
      weekProgress,
      categoryProgress,
      dsaStats,
    };
  }, [state]);
}
