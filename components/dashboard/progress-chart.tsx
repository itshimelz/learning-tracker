"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend } from "recharts";
import { ChartContainer, ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useStore } from "@/lib/store/context";

export function ProgressChart() {
  const { state } = useStore();

  const chartData = React.useMemo(() => {
    return state.plan.months.map((month) => {
      // Initialize counts
      const counts = {
        dsa: { total: 0, completed: 0 },
        deepDive: { total: 0, completed: 0 },
        capstone: { total: 0, completed: 0 },
      };

      month.weeks.forEach((week) => {
        week.days.forEach((day) => {
          day.tasks.forEach((task) => {
            if (task.category === "dsa") {
              counts.dsa.total++;
              if (task.completed) counts.dsa.completed++;
            } else if (task.category === "deep-dive") {
              counts.deepDive.total++;
              if (task.completed) counts.deepDive.completed++;
            } else if (task.category === "capstone") {
              counts.capstone.total++;
              if (task.completed) counts.capstone.completed++;
            }
          });
        });
      });

      // Format title: e.g. "Month 1" from "month-1"
      const name = month.id
        .replace("-", " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()); // "Month 1"

      return {
        month: name,
        DSA: counts.dsa.total > 0 ? Math.round((counts.dsa.completed / counts.dsa.total) * 100) : 0,
        "Deep Dive": counts.deepDive.total > 0 ? Math.round((counts.deepDive.completed / counts.deepDive.total) * 100) : 0,
        Capstone: counts.capstone.total > 0 ? Math.round((counts.capstone.completed / counts.capstone.total) * 100) : 0,
      };
    });
  }, [state.plan]);

  const chartConfig: ChartConfig = {
    DSA: {
      label: "DSA Focus",
      color: "var(--primary)",
    },
    "Deep Dive": {
      label: "Deep Dive",
      color: "var(--chart-2)",
    },
    Capstone: {
      label: "Capstone Tasks",
      color: "var(--chart-3)",
    },
  };

  return (
    <div className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-card/40 backdrop-blur-sm select-none">
      <div className="flex flex-col gap-0.5 border-b border-border/50 pb-2">
        <h3 className="font-semibold text-sm text-foreground">Completion Trends per Month</h3>
        <p className="text-[10px] text-muted-foreground font-mono">Comparing block completions across the study cycle</p>
      </div>

      <div className="h-[240px] w-full mt-2">
        <ChartContainer config={chartConfig} className="size-full">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" strokeOpacity={0.3} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              stroke="var(--muted-foreground)"
              fontSize={11}
              fontFamily="var(--font-mono)"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              stroke="var(--muted-foreground)"
              fontSize={11}
              fontFamily="var(--font-mono)"
              domain={[0, 100]}
              tickFormatter={(val) => `${val}%`}
            />
            <ChartTooltip content={<ChartTooltipContent indicator="dashed" />} />
            <Bar dataKey="DSA" fill="var(--primary)" radius={[4, 4, 0, 0]} maxBarSize={30} />
            <Bar dataKey="Deep Dive" fill="var(--chart-2)" radius={[4, 4, 0, 0]} maxBarSize={30} />
            <Bar dataKey="Capstone" fill="var(--chart-3)" radius={[4, 4, 0, 0]} maxBarSize={30} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
