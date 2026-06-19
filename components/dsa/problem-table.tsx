"use client";

import * as React from "react";
import { useStore } from "@/lib/store/context";
import { DSAProblem } from "@/lib/types";
import { DifficultyBadge } from "./difficulty-badge";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  StarIcon,
  PencilIcon,
  Delete02Icon,
  Tick02Icon,
  LinkIcon,
  ArrowUp01Icon,
  ArrowDown01Icon,
} from "@hugeicons/core-free-icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface ProblemTableProps {
  problems: DSAProblem[];
  onEdit: (problem: DSAProblem) => void;
}

type SortField = "name" | "difficulty" | "week" | "confidence";
type SortDirection = "asc" | "desc";

const DIFFICULTY_ORDER = { easy: 1, medium: 2, hard: 3 };

export function ProblemTable({ problems, onEdit }: ProblemTableProps) {
  const { dispatch } = useStore();

  // Sorting state
  const [sortField, setSortField] = React.useState<SortField>("week");
  const [sortDirection, setSortDirection] = React.useState<SortDirection>("asc");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedProblems = React.useMemo(() => {
    return [...problems].sort((a, b) => {
      let comparison = 0;

      if (sortField === "name") {
        comparison = a.name.localeCompare(b.name);
      } else if (sortField === "difficulty") {
        comparison = DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty];
      } else if (sortField === "week") {
        const aWeekNum = parseInt(a.weekId.split("-")[1]) || 0;
        const bWeekNum = parseInt(b.weekId.split("-")[1]) || 0;
        comparison = aWeekNum - bWeekNum;
      } else if (sortField === "confidence") {
        comparison = a.confidence - b.confidence;
      }

      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [problems, sortField, sortDirection]);

  const toggleSolved = (problem: DSAProblem) => {
    dispatch({
      type: "UPDATE_DSA_PROBLEM",
      payload: {
        ...problem,
        solved: !problem.solved,
      },
    });
    toast.success(
      problem.solved
        ? `Marked "${problem.name}" as unsolved`
        : `Congrats! Marked "${problem.name}" as solved!`
    );
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete "${name}"?`)) {
      dispatch({ type: "DELETE_DSA_PROBLEM", payload: { id } });
      toast.success(`Deleted "${name}"`);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5 text-amber-500 select-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <HugeiconsIcon
            key={i}
            icon={StarIcon}
            className={cn(
              "size-3 shrink-0",
              i < rating ? "fill-amber-500 text-amber-500" : "text-muted-foreground/20 fill-transparent"
            )}
            strokeWidth={2}
          />
        ))}
      </div>
    );
  };

  const SortIndicator = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return (
      <HugeiconsIcon
        icon={sortDirection === "asc" ? ArrowUp01Icon : ArrowDown01Icon}
        className="size-3 text-primary shrink-0"
        strokeWidth={2.5}
      />
    );
  };

  return (
    <div className="rounded-md border border-border bg-card/40 backdrop-blur-md overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[60px] text-center">Status</TableHead>
              <TableHead
                className="cursor-pointer select-none font-medium hover:text-foreground"
                onClick={() => handleSort("name")}
              >
                <div className="flex items-center gap-1.5">
                  <span>Problem Name</span>
                  <SortIndicator field="name" />
                </div>
              </TableHead>
              <TableHead className="font-medium">Category</TableHead>
              <TableHead
                className="cursor-pointer select-none font-medium text-center hover:text-foreground"
                onClick={() => handleSort("week")}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <span>Week</span>
                  <SortIndicator field="week" />
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer select-none font-medium text-center hover:text-foreground"
                onClick={() => handleSort("difficulty")}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <span>Difficulty</span>
                  <SortIndicator field="difficulty" />
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer select-none font-medium hover:text-foreground"
                onClick={() => handleSort("confidence")}
              >
                <div className="flex items-center gap-1.5">
                  <span>Confidence</span>
                  <SortIndicator field="confidence" />
                </div>
              </TableHead>
              <TableHead className="text-center font-medium">Time</TableHead>
              <TableHead className="w-[100px] text-right font-medium pr-6">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedProblems.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="h-32 text-center text-muted-foreground">
                  No problems found. Try adjusting your search or filters.
                </TableCell>
              </TableRow>
            ) : (
              sortedProblems.map((prob) => {
                const weekNum = prob.weekId.split("-")[1];
                return (
                  <TableRow key={prob.id} className="hover:bg-muted/30">
                    {/* Status Toggle */}
                    <TableCell className="text-center py-2.5">
                      <button
                        onClick={() => toggleSolved(prob)}
                        className={cn(
                          "mx-auto flex size-5 cursor-pointer items-center justify-center rounded-full border transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-ring",
                          prob.solved
                            ? "border-emerald-500 bg-emerald-500/10 text-emerald-500"
                            : "border-muted-foreground/30 hover:border-muted-foreground/60 text-transparent"
                        )}
                        title={prob.solved ? "Mark unsolved" : "Mark solved"}
                      >
                        <HugeiconsIcon icon={Tick02Icon} strokeWidth={3} className="size-3" />
                      </button>
                    </TableCell>

                    {/* Problem Name & Link */}
                    <TableCell className="font-semibold text-foreground py-2.5">
                      {prob.solutionUrl ? (
                        <a
                          href={prob.solutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 hover:text-primary transition-colors hover:underline underline-offset-2"
                        >
                          <span>{prob.name}</span>
                          <HugeiconsIcon icon={LinkIcon} className="size-3 text-muted-foreground" />
                        </a>
                      ) : (
                        <span>{prob.name}</span>
                      )}
                      {prob.notes && (
                        <div className="text-[10px] font-normal text-muted-foreground max-w-sm truncate mt-0.5">
                          {prob.notes}
                        </div>
                      )}
                    </TableCell>

                    {/* Category */}
                    <TableCell className="py-2.5">
                      <span className="font-mono text-xs text-muted-foreground px-2 py-0.5 rounded-md bg-muted/40">
                        {prob.category}
                      </span>
                    </TableCell>

                    {/* Week */}
                    <TableCell className="text-center font-mono text-xs text-muted-foreground py-2.5">
                      W{weekNum}
                    </TableCell>

                    {/* Difficulty Badge */}
                    <TableCell className="text-center py-2.5">
                      <DifficultyBadge difficulty={prob.difficulty} />
                    </TableCell>

                    {/* Confidence Stars */}
                    <TableCell className="py-2.5">{renderStars(prob.confidence)}</TableCell>

                    {/* Time Spent */}
                    <TableCell className="text-center font-mono text-xs text-muted-foreground py-2.5">
                      {prob.timeMinutes ? `${prob.timeMinutes}m` : "—"}
                    </TableCell>

                    {/* Actions */}
                    <TableCell className="text-right py-2.5 pr-6">
                      <div className="inline-flex items-center justify-end gap-1.5">
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          onClick={() => onEdit(prob)}
                          title="Edit problem"
                          className="size-7 hover:bg-muted text-muted-foreground hover:text-foreground"
                        >
                          <HugeiconsIcon icon={PencilIcon} strokeWidth={2} className="size-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          onClick={() => handleDelete(prob.id, prob.name)}
                          title="Delete problem"
                          className="size-7 hover:bg-muted text-destructive hover:text-destructive/90"
                        >
                          <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} className="size-3.5" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
