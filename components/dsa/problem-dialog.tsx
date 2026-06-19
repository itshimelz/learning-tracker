"use client";

import * as React from "react";
import { useStore } from "@/lib/store/context";
import { DSAProblem } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface ProblemDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  problemToEdit?: DSAProblem | null;
}

const CATEGORIES = [
  "Arrays & Hashing",
  "Two Pointers",
  "Sliding Window",
  "Stack",
  "Linked List",
  "Binary Search",
  "Trees",
  "Graphs",
  "Dynamic Programming",
  "Greedy",
  "Heap / Priority Queue",
  "Backtracking",
  "Trie",
  "Union-Find",
  "Matrix",
  "String",
  "Misc",
];

export function ProblemDialog({ open, onOpenChange, problemToEdit }: ProblemDialogProps) {
  const { state, dispatch } = useStore();
  const isEditing = !!problemToEdit;

  // Form states
  const [name, setName] = React.useState("");
  const [difficulty, setDifficulty] = React.useState<"easy" | "medium" | "hard">("medium");
  const [category, setCategory] = React.useState("Misc");
  const [customCategory, setCustomCategory] = React.useState("");
  const [weekId, setWeekId] = React.useState("week-1");
  const [solved, setSolved] = React.useState(false);
  const [timeMinutes, setTimeMinutes] = React.useState("");
  const [confidence, setConfidence] = React.useState<"1" | "2" | "3" | "4" | "5">("3");
  const [solutionUrl, setSolutionUrl] = React.useState("");
  const [notes, setNotes] = React.useState("");

  // Sync form states with problemToEdit when opened
  React.useEffect(() => {
    if (open) {
      if (problemToEdit) {
        setName(problemToEdit.name);
        setDifficulty(problemToEdit.difficulty);
        setSolved(problemToEdit.solved);
        setTimeMinutes(problemToEdit.timeMinutes?.toString() || "");
        setConfidence(problemToEdit.confidence.toString() as any);
        setSolutionUrl(problemToEdit.solutionUrl || "");
        setNotes(problemToEdit.notes || "");
        setWeekId(problemToEdit.weekId);
        
        if (CATEGORIES.includes(problemToEdit.category)) {
          setCategory(problemToEdit.category);
          setCustomCategory("");
        } else {
          setCategory("Custom");
          setCustomCategory(problemToEdit.category);
        }
      } else {
        // Reset to defaults for addition
        setName("");
        setDifficulty("medium");
        setCategory("Arrays & Hashing");
        setCustomCategory("");
        setWeekId("week-1");
        setSolved(false);
        setTimeMinutes("");
        setConfidence("3");
        setSolutionUrl("");
        setNotes("");
      }
    }
  }, [open, problemToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Problem name is required");
      return;
    }

    const finalCategory = category === "Custom" ? customCategory.trim() || "Misc" : category;
    const confidenceVal = parseInt(confidence) as 1 | 2 | 3 | 4 | 5;
    const timeVal = timeMinutes.trim() ? parseInt(timeMinutes) : undefined;

    if (isEditing && problemToEdit) {
      dispatch({
        type: "UPDATE_DSA_PROBLEM",
        payload: {
          ...problemToEdit,
          name: name.trim(),
          difficulty,
          category: finalCategory,
          weekId,
          solved,
          timeMinutes: timeVal,
          confidence: confidenceVal,
          solutionUrl: solutionUrl.trim() || undefined,
          notes: notes.trim() || undefined,
        },
      });
      toast.success("Problem updated successfully");
    } else {
      dispatch({
        type: "ADD_DSA_PROBLEM",
        payload: {
          name: name.trim(),
          difficulty,
          category: finalCategory,
          weekId,
          solved,
          timeMinutes: timeVal,
          confidence: confidenceVal,
          solutionUrl: solutionUrl.trim() || undefined,
          notes: notes.trim() || undefined,
        },
      });
      toast.success("Custom problem added successfully");
    }

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit DSA Problem" : "Add Custom DSA Problem"}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Update details, notes, or confidence level for this problem."
              : "Log a custom DSA problem to track alongside your structured syllabus."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          {/* Problem Name */}
          <div className="space-y-1">
            <Label htmlFor="name">Problem Name *</Label>
            <Input
              id="name"
              placeholder="e.g. 3Sum"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Difficulty */}
            <div className="space-y-1">
              <Label htmlFor="difficulty">Difficulty</Label>
              <Select value={difficulty} onValueChange={(val: any) => setDifficulty(val)}>
                <SelectTrigger id="difficulty" className="w-full">
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Target Week */}
            <div className="space-y-1">
              <Label htmlFor="week">Target Week</Label>
              <Select value={weekId} onValueChange={(val: any) => setWeekId(val)}>
                <SelectTrigger id="week" className="w-full">
                  <SelectValue placeholder="Select week" />
                </SelectTrigger>
                <SelectContent side="bottom" align="center" className="max-h-[200px]">
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
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Category Select */}
            <div className="space-y-1">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={(val: any) => setCategory(val)}>
                <SelectTrigger id="category" className="w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent side="bottom" className="max-h-[200px]">
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                  <SelectItem value="Custom">Custom...</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Custom Category Input if selected */}
            {category === "Custom" ? (
              <div className="space-y-1">
                <Label htmlFor="customCategory">Custom Category Name</Label>
                <Input
                  id="customCategory"
                  placeholder="e.g. Bit Manipulation"
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value)}
                  required={category === "Custom"}
                />
              </div>
            ) : (
              /* Time Spent */
              <div className="space-y-1">
                <Label htmlFor="timeMinutes">Time Spent (minutes)</Label>
                <Input
                  id="timeMinutes"
                  type="number"
                  placeholder="e.g. 35"
                  min="0"
                  value={timeMinutes}
                  onChange={(e) => setTimeMinutes(e.target.value)}
                />
              </div>
            )}
          </div>

          {category === "Custom" && (
            /* Shift Time Spent here if Custom Category is showing */
            <div className="space-y-1">
              <Label htmlFor="timeMinutes">Time Spent (minutes)</Label>
              <Input
                id="timeMinutes"
                type="number"
                placeholder="e.g. 35"
                min="0"
                value={timeMinutes}
                onChange={(e) => setTimeMinutes(e.target.value)}
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 items-center">
            {/* Confidence */}
            <div className="space-y-1">
              <Label htmlFor="confidence">Confidence Rating</Label>
              <Select value={confidence} onValueChange={(val: any) => setConfidence(val)}>
                <SelectTrigger id="confidence" className="w-full">
                  <SelectValue placeholder="Select rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 - Very Low</SelectItem>
                  <SelectItem value="2">2 - Low</SelectItem>
                  <SelectItem value="3">3 - Medium</SelectItem>
                  <SelectItem value="4">4 - High</SelectItem>
                  <SelectItem value="5">5 - Mastered</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Solved Checkbox */}
            <div className="flex items-center gap-2 pt-6">
              <Checkbox
                id="solved"
                checked={solved}
                onCheckedChange={(checked) => setSolved(!!checked)}
              />
              <Label htmlFor="solved" className="cursor-pointer text-sm font-medium">
                Mark as Solved
              </Label>
            </div>
          </div>

          {/* Solution URL */}
          <div className="space-y-1">
            <Label htmlFor="solutionUrl">Solution URL (optional)</Label>
            <Input
              id="solutionUrl"
              type="url"
              placeholder="e.g. https://leetcode.com/problems/..."
              value={solutionUrl}
              onChange={(e) => setSolutionUrl(e.target.value)}
            />
          </div>

          {/* Notes */}
          <div className="space-y-1">
            <Label htmlFor="notes">Notes / Observations</Label>
            <Textarea
              id="notes"
              placeholder="Write down key insights, complexity details, or alternative approaches..."
              value={notes}
              rows={3}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <DialogFooter className="pt-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">
              {isEditing ? "Save Changes" : "Add Problem"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
