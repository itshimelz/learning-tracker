"use client";

import * as React from "react";
import { useStore } from "@/lib/store/context";
import { DSAProblem } from "@/lib/types";
import { ProblemTable } from "@/components/dsa/problem-table";
import { ProblemDialog } from "@/components/dsa/problem-dialog";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01Icon,
  Search01Icon,
  StarIcon,
  Tick02Icon,
  CodeIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

export default function DsaPage() {
  const { state, isHydrated } = useStore();
  const problems = state.dsaProblems || [];

  // Dialog State
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [editingProblem, setEditingProblem] = React.useState<DSAProblem | null>(null);

  // Filter States
  const [searchQuery, setSearchQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [difficultyFilter, setDifficultyFilter] = React.useState("all");
  const [categoryFilter, setCategoryFilter] = React.useState("all");
  const [weekFilter, setWeekFilter] = React.useState("all");

  const openAddDialog = () => {
    setEditingProblem(null);
    setDialogOpen(true);
  };

  const openEditDialog = (problem: DSAProblem) => {
    setEditingProblem(problem);
    setDialogOpen(true);
  };

  // 1. Calculate General Stats
  const totalCount = problems.length;
  const solvedCount = problems.filter((p) => p.solved).length;
  const solvedPercentage = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

  // Difficulty stats
  const easyProblems = problems.filter((p) => p.difficulty === "easy");
  const easySolved = easyProblems.filter((p) => p.solved).length;
  const easyTotal = easyProblems.length;

  const mediumProblems = problems.filter((p) => p.difficulty === "medium");
  const mediumSolved = mediumProblems.filter((p) => p.solved).length;
  const mediumTotal = mediumProblems.length;

  const hardProblems = problems.filter((p) => p.difficulty === "hard");
  const hardSolved = hardProblems.filter((p) => p.solved).length;
  const hardTotal = hardProblems.length;

  // Average confidence
  const solvedWithConfidence = problems.filter((p) => p.solved);
  const averageConfidence =
    solvedWithConfidence.length > 0
      ? (solvedWithConfidence.reduce((sum, p) => sum + p.confidence, 0) / solvedWithConfidence.length).toFixed(1)
      : "0.0";

  // 2. Calculate Category Breakdown dynamically (only show categories that have problems)
  const categoryStats = React.useMemo(() => {
    const stats: Record<string, { total: number; solved: number }> = {};
    problems.forEach((p) => {
      if (!stats[p.category]) {
        stats[p.category] = { total: 0, solved: 0 };
      }
      stats[p.category].total++;
      if (p.solved) {
        stats[p.category].solved++;
      }
    });

    return Object.entries(stats)
      .map(([name, data]) => ({
        name,
        total: data.total,
        solved: data.solved,
        percentage: Math.round((data.solved / data.total) * 100),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [problems]);

  // Unique categories for the dropdown filter
  const uniqueCategories = React.useMemo(() => {
    const cats = new Set<string>();
    problems.forEach((p) => cats.add(p.category));
    return Array.from(cats).sort();
  }, [problems]);

  // 3. Filtered problems list
  const filteredProblems = React.useMemo(() => {
    return problems.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus =
        statusFilter === "all"
          ? true
          : statusFilter === "solved"
          ? p.solved
          : !p.solved;

      const matchesDifficulty =
        difficultyFilter === "all" ? true : p.difficulty === difficultyFilter;

      const matchesCategory =
        categoryFilter === "all" ? true : p.category === categoryFilter;

      const matchesWeek =
        weekFilter === "all" ? true : p.weekId === weekFilter;

      return matchesSearch && matchesStatus && matchesDifficulty && matchesCategory && matchesWeek;
    });
  }, [problems, searchQuery, statusFilter, difficultyFilter, categoryFilter, weekFilter]);

  const renderConfidenceStars = (ratingNum: number) => {
    return (
      <div className="flex items-center gap-0.5 text-amber-500 select-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <HugeiconsIcon
            key={i}
            icon={StarIcon}
            className={cn(
              "size-3.5 shrink-0",
              i < ratingNum ? "fill-amber-500 text-amber-500" : "text-muted-foreground/20 fill-transparent"
            )}
            strokeWidth={2}
          />
        ))}
      </div>
    );
  };

  if (!isHydrated) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-sm text-muted-foreground animate-pulse font-mono">Loading State Pipeline...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-6 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <HugeiconsIcon icon={CodeIcon} className="size-6 text-primary" strokeWidth={2.5} />
            DSA Problem Tracker
          </h1>
          <p className="text-sm text-muted-foreground">
            Track your weekly syllabus problems and log additional practice questions.
          </p>
        </div>
        <Button onClick={openAddDialog} className="w-full md:w-auto h-9">
          <HugeiconsIcon icon={Add01Icon} strokeWidth={2.5} className="size-4 shrink-0" />
          <span>Add Custom Problem</span>
        </Button>
      </div>

      {/* Stats Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1: Overall Solved */}
        <Card className="bg-card/30 backdrop-blur-md border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider font-mono">
              Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-bold tracking-tight text-foreground">
                {solvedCount} <span className="text-sm font-normal text-muted-foreground">/ {totalCount} solved</span>
              </span>
              <span className="text-sm font-semibold font-mono text-primary">{solvedPercentage}%</span>
            </div>
            <Progress value={solvedPercentage} className="h-2 bg-muted" />
          </CardContent>
        </Card>

        {/* Card 2: Difficulty breakdown */}
        <Card className="bg-card/30 backdrop-blur-md border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider font-mono">
              Difficulty Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-2 py-1 text-center">
            <div className="flex flex-col items-center p-1.5 rounded-lg bg-muted/20 border border-border/40">
              <span className="text-[10px] font-semibold text-blue-500 uppercase tracking-wider font-mono mb-1">Easy</span>
              <span className="text-lg font-bold text-foreground">{easySolved}</span>
              <span className="text-[10px] text-muted-foreground font-mono">/ {easyTotal}</span>
            </div>
            <div className="flex flex-col items-center p-1.5 rounded-lg bg-muted/20 border border-border/40">
              <span className="text-[10px] font-semibold text-amber-500 uppercase tracking-wider font-mono mb-1">Med</span>
              <span className="text-lg font-bold text-foreground">{mediumSolved}</span>
              <span className="text-[10px] text-muted-foreground font-mono">/ {mediumTotal}</span>
            </div>
            <div className="flex flex-col items-center p-1.5 rounded-lg bg-muted/20 border border-border/40">
              <span className="text-[10px] font-semibold text-red-500 uppercase tracking-wider font-mono mb-1">Hard</span>
              <span className="text-lg font-bold text-foreground">{hardSolved}</span>
              <span className="text-[10px] text-muted-foreground font-mono">/ {hardTotal}</span>
            </div>
          </CardContent>
        </Card>

        {/* Card 3: Average Confidence */}
        <Card className="bg-card/30 backdrop-blur-md border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider font-mono">
              Confidence Rating
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-bold tracking-tight text-foreground">
                {averageConfidence} <span className="text-xs font-normal text-muted-foreground">/ 5.0 avg</span>
              </span>
            </div>
            <div className="flex items-center gap-1">
              {renderConfidenceStars(Math.round(parseFloat(averageConfidence)))}
              <span className="text-[10px] text-muted-foreground font-mono ml-1">on solved problems</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Progress Grid (Only show if there are categories) */}
      {categoryStats.length > 0 && (
        <Card className="bg-card/10 backdrop-blur-sm border-border/40">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold">Category Breakdown</CardTitle>
            <CardDescription className="text-xs">
              Monitor your mastery percentage across different data structures and algorithms.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {categoryStats.map((cat) => (
                <div
                  key={cat.name}
                  className="p-2.5 rounded-lg border border-border/50 bg-background/50 hover:bg-muted/10 transition-colors flex flex-col gap-1.5"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground truncate max-w-[70%]">{cat.name}</span>
                    <span className="font-mono text-muted-foreground shrink-0 text-[10px]">
                      {cat.solved}/{cat.total}
                    </span>
                  </div>
                  <Progress value={cat.percentage} className="h-1 bg-muted" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filters & Interactive Table */}
      <Card className="border-border bg-card/20 backdrop-blur-md">
        <CardHeader className="pb-4">
          <CardTitle className="text-sm font-semibold">Problem Directory</CardTitle>
          {/* Filter Bar */}
          <div className="grid gap-3 mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {/* Search query */}
            <div className="relative">
              <HugeiconsIcon
                icon={Search01Icon}
                className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder="Search problems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 h-8 text-xs bg-background/50"
              />
            </div>

            {/* Solved Status Filter */}
            <Select value={statusFilter} onValueChange={(val) => setStatusFilter(val || "all")}>
              <SelectTrigger className="h-8 text-xs bg-background/50">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="solved">Solved</SelectItem>
                <SelectItem value="unsolved">Unsolved</SelectItem>
              </SelectContent>
            </Select>

            {/* Difficulty Filter */}
            <Select value={difficultyFilter} onValueChange={(val) => setDifficultyFilter(val || "all")}>
              <SelectTrigger className="h-8 text-xs bg-background/50">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>

            {/* Category Filter */}
            <Select value={categoryFilter} onValueChange={(val) => setCategoryFilter(val || "all")}>
              <SelectTrigger className="h-8 text-xs bg-background/50">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent side="bottom" className="max-h-[200px]">
                <SelectItem value="all">All Categories</SelectItem>
                {uniqueCategories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Week Filter */}
            <Select value={weekFilter} onValueChange={(val) => setWeekFilter(val || "all")}>
              <SelectTrigger className="h-8 text-xs bg-background/50">
                <SelectValue placeholder="Week" />
              </SelectTrigger>
              <SelectContent side="bottom" className="max-h-[200px]">
                <SelectItem value="all">All Weeks</SelectItem>
                {Array.from({ length: 12 }, (_, i) => {
                  const wNum = i + 1;
                  return (
                    <SelectItem key={`week-${wNum}`} value={`week-${wNum}`}>
                      Week {wNum}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ProblemTable problems={filteredProblems} onEdit={openEditDialog} />
        </CardContent>
      </Card>

      {/* Problem Edit/Add dialog */}
      <ProblemDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        problemToEdit={editingProblem}
      />
    </div>
  );
}
