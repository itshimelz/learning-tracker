"use client";

import * as React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  BookOpen02Icon,
  Add01Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons";
import { toast } from "sonner";

import { useStore } from "@/lib/store/context";
import { Resource } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Custom SVG Icons to avoid missing import errors
const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="size-3.5 shrink-0 inline-block ml-1 opacity-70 group-hover:opacity-100 transition-opacity"
  >
    <path
      fillRule="evenodd"
      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const STANDARD_CATEGORIES = [
  "Kotlin",
  "Compose",
  "Coroutines & Flow",
  "Architecture",
  "Testing",
  "DSA",
  "KMP",
];

const RESOURCE_TYPES = [
  { value: "doc", label: "Documentation" },
  { value: "video", label: "Video Tutorial" },
  { value: "article", label: "Article / Guide" },
  { value: "book", label: "Book Reference" },
  { value: "tool", label: "Utility / Tool" },
  { value: "repo", label: "Repository" },
];

export default function ResourcesPage() {
  const { state, dispatch, isHydrated } = useStore();
  const resources = state.resources || [];

  // Filter & Search states
  const [activeTab, setActiveTab] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [typeFilter, setTypeFilter] = React.useState<string>("all");
  const [completionFilter, setCompletionFilter] = React.useState<string>("all");

  // Modal Dialog states
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState("");
  const [newUrl, setNewUrl] = React.useState("");
  const [newType, setNewType] = React.useState<Resource["type"]>("doc");
  const [newCategory, setNewCategory] = React.useState("Kotlin");
  const [customCategory, setCustomCategory] = React.useState("");
  const [selectedWeeks, setSelectedWeeks] = React.useState<string[]>([]);
  const [newNotes, setNewNotes] = React.useState("");

  // Get active categories representing in current resources
  const availableCategories = React.useMemo(() => {
    const cats = new Set(resources.map((r) => r.category));
    return Array.from(cats);
  }, [resources]);

  // Combined tab listing including All & Custom categories
  const tabsList = React.useMemo(() => {
    const list = ["all", ...STANDARD_CATEGORIES];
    // Add any user custom categories that don't match the standard list
    availableCategories.forEach((cat) => {
      if (!STANDARD_CATEGORIES.includes(cat) && !list.includes(cat)) {
        list.push(cat);
      }
    });
    return list;
  }, [availableCategories]);

  // Filtered resources
  const filteredResources = React.useMemo(() => {
    return resources.filter((res) => {
      // 1. Search Query filter (matches title, url or notes)
      const matchesSearch =
        res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (res.notes && res.notes.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (res.url && res.url.toLowerCase().includes(searchQuery.toLowerCase()));

      // 2. Category filter
      let matchesCategory = true;
      if (activeTab !== "all") {
        matchesCategory = res.category === activeTab;
      }

      // 3. Type filter
      let matchesType = true;
      if (typeFilter !== "all") {
        matchesType = res.type === typeFilter;
      }

      // 4. Completion filter
      let matchesCompletion = true;
      if (completionFilter === "completed") {
        matchesCompletion = res.completed;
      } else if (completionFilter === "pending") {
        matchesCompletion = !res.completed;
      }

      return matchesSearch && matchesCategory && matchesType && matchesCompletion;
    });
  }, [resources, searchQuery, activeTab, typeFilter, completionFilter]);

  const handleToggleWeek = (weekId: string) => {
    setSelectedWeeks((prev) =>
      prev.includes(weekId) ? prev.filter((id) => id !== weekId) : [...prev, weekId]
    );
  };

  const handleOpenAddDialog = () => {
    setNewTitle("");
    setNewUrl("");
    setNewType("doc");
    setNewCategory("Kotlin");
    setCustomCategory("");
    setSelectedWeeks([]);
    setNewNotes("");
    setDialogOpen(true);
  };

  const handleAddResource = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newTitle.trim()) {
      toast.error("Reference title is required");
      return;
    }

    if (newUrl.trim() && !/^https?:\/\//i.test(newUrl.trim())) {
      toast.error("Please enter a valid URL starting with http:// or https://");
      return;
    }

    const finalCategory = newCategory === "Custom" ? customCategory.trim() || "Others" : newCategory;

    dispatch({
      type: "ADD_RESOURCE",
      payload: {
        title: newTitle.trim(),
        url: newUrl.trim() || undefined,
        type: newType,
        category: finalCategory,
        weekIds: selectedWeeks,
        notes: newNotes.trim() || undefined,
        completed: false,
      },
    });

    toast.success("Resource reference added!");
    setDialogOpen(false);
  };

  const getResourceTypeLabel = (type: Resource["type"]) => {
    return RESOURCE_TYPES.find((t) => t.value === type)?.label || type;
  };

  const getResourceTypeColor = (type: Resource["type"]) => {
    switch (type) {
      case "doc":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "video":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      case "article":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "book":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "tool":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "repo":
        return "bg-sky-500/10 text-sky-400 border-sky-500/20";
      default:
        return "bg-muted/10 text-muted-foreground border-border/50";
    }
  };

  if (!isHydrated) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <span className="text-xs text-muted-foreground font-mono">Loading Resource Library...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 lg:gap-8 max-w-6xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-5 gap-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-primary">
            <HugeiconsIcon icon={BookOpen02Icon} className="size-5" />
            <span className="text-[10px] uppercase font-bold tracking-wider font-mono">Reference Hub</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Resource Library</h1>
          <p className="text-xs text-muted-foreground max-w-xl">
            Access curated documentations, guides, and tools supporting your 12-week study program. Toggle items as completed to keep track of your readings.
          </p>
        </div>
        <Button onClick={handleOpenAddDialog} className="w-full sm:w-auto font-semibold gap-1.5 shadow-md">
          <HugeiconsIcon icon={Add01Icon} className="size-4" />
          Add Reference
        </Button>
      </div>

      {/* Toolbar Filters */}
      <div className="grid gap-4 md:grid-cols-12 bg-card/25 border border-border p-4 rounded-xl backdrop-blur-xs">
        {/* Search */}
        <div className="md:col-span-6 relative">
          <HugeiconsIcon
            icon={Search01Icon}
            className="absolute left-3 top-2.5 size-4 text-muted-foreground"
          />
          <Input
            placeholder="Search resources by title, notes, or URL..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-background/30 text-xs border-border/80 focus-visible:ring-primary/40 focus-visible:border-primary/50"
          />
        </div>

        {/* Type Filter */}
        <div className="md:col-span-3">
          <Select value={typeFilter} onValueChange={(val) => val && setTypeFilter(val)}>
            <SelectTrigger className="bg-background/30 text-xs border-border/80">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all" className="text-xs">All Types</SelectItem>
              {RESOURCE_TYPES.map((t) => (
                <SelectItem key={t.value} value={t.value} className="text-xs">
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Completion status filter */}
        <div className="md:col-span-3">
          <Select value={completionFilter} onValueChange={(val) => val && setCompletionFilter(val)}>
            <SelectTrigger className="bg-background/30 text-xs border-border/80">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all" className="text-xs">All Status</SelectItem>
              <SelectItem value="pending" className="text-xs">Not Started</SelectItem>
              <SelectItem value="completed" className="text-xs">Read / Done</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Tabs list for Categories */}
      <div className="flex overflow-x-auto pb-1 -mx-2 px-2 scrollbar-thin">
        <div className="flex gap-1.5 p-1 bg-muted/30 border border-border/50 rounded-lg w-fit shrink-0">
          {tabsList.map((tab) => {
            const isActive = activeTab === tab;
            const count = resources.filter((r) => tab === "all" || r.category === tab).length;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-3 py-1.5 rounded-md text-xs font-semibold font-sans transition-all duration-200 focus:outline-hidden shrink-0 flex items-center gap-1.5",
                  isActive
                    ? "bg-background text-foreground font-bold shadow-xs border border-border/60"
                    : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                )}
              >
                <span className="capitalize">{tab === "all" ? "All References" : tab}</span>
                <span className={cn(
                  "px-1.5 py-0.5 rounded-full text-[9px] font-mono",
                  isActive ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground/80"
                )}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid View */}
      {filteredResources.length === 0 ? (
        <Card className="bg-card/10 border-border/60 p-12 text-center flex flex-col items-center gap-4">
          <div className="p-3 rounded-full bg-muted/40 text-muted-foreground border border-border/50">
            <HugeiconsIcon icon={BookOpen02Icon} className="size-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-foreground">No resources found</h3>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
              We couldn&apos;t find any items matching your active search filters. Try clearing filters or add a new reference document.
            </p>
          </div>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((res) => (
            <Card
              key={res.id}
              className={cn(
                "group bg-card/20 border-border/80 hover:border-primary/40 hover:bg-card/30 transition-all duration-300 flex flex-col justify-between shadow-xs",
                res.completed && "opacity-80 border-border/40 bg-muted/10 hover:border-border/60"
              )}
            >
              <CardHeader className="p-5 pb-3">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <Badge variant="outline" className={cn("text-[9px] px-2 py-0.5 font-semibold", getResourceTypeColor(res.type))}>
                    {getResourceTypeLabel(res.type)}
                  </Badge>

                  {/* Association Week Badges */}
                  {res.weekIds && res.weekIds.length > 0 && (
                    <div className="flex flex-wrap gap-1 max-w-[120px] justify-end">
                      {res.weekIds.map((weekId) => {
                        const num = weekId.replace("week-", "");
                        return (
                          <span
                            key={weekId}
                            className="bg-muted px-1.5 py-0.5 rounded-xs text-[8px] font-bold font-mono text-muted-foreground border border-border/30"
                          >
                            W{num}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="flex items-start gap-2.5">
                  <Checkbox
                    id={`res-chk-${res.id}`}
                    checked={res.completed}
                    onCheckedChange={() =>
                      dispatch({ type: "TOGGLE_RESOURCE", payload: { resourceId: res.id } })
                    }
                    className="mt-1"
                  />
                  <div className="flex flex-col gap-0.5 leading-snug">
                    <label
                      htmlFor={`res-chk-${res.id}`}
                      className={cn(
                        "text-xs font-bold text-foreground cursor-pointer select-none group-hover:text-primary transition-colors",
                        res.completed && "text-muted-foreground line-through group-hover:text-muted-foreground"
                      )}
                    >
                      {res.title}
                    </label>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-5 py-0 pb-4 flex-1">
                {res.notes && (
                  <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-3">
                    {res.notes}
                  </p>
                )}
              </CardContent>

              <CardFooter className="px-5 py-3.5 bg-muted/10 border-t border-border/40 flex items-center justify-between">
                <span className="text-[9px] font-mono font-semibold text-muted-foreground uppercase bg-muted/40 px-2 py-0.5 rounded-xs">
                  {res.category}
                </span>

                {res.url ? (
                  <Link
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-semibold text-primary hover:underline flex items-center gap-0.5 group"
                  >
                    Open Link
                    <ExternalLinkIcon />
                  </Link>
                ) : (
                  <span className="text-[9px] font-mono text-muted-foreground/60">Reference Text</span>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* Add Resource Dialog Modal */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-md bg-popover/95 border border-border shadow-2xl backdrop-blur-md">
          <DialogHeader>
            <DialogTitle className="text-base font-bold text-foreground flex items-center gap-2">
              <HugeiconsIcon icon={BookOpen02Icon} className="size-4.5 text-primary" />
              Add Study Reference
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Add a reference document, video tutorial, or utility link to support your weekly syllabus learning goals.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleAddResource} className="space-y-4 pt-1">
            {/* Title */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="title" className="text-xs font-bold text-foreground">
                Title
              </Label>
              <Input
                id="title"
                placeholder="e.g. Android Memory Leak Debugging Guide"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="text-xs bg-background/50 border-border/80"
                required
              />
            </div>

            {/* URL */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="url" className="text-xs font-bold text-foreground">
                URL (Optional)
              </Label>
              <Input
                id="url"
                placeholder="https://example.com/guide"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                className="text-xs bg-background/50 border-border/80"
              />
            </div>

            {/* Type & Category row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="type" className="text-xs font-bold text-foreground">
                  Reference Type
                </Label>
                <Select value={newType} onValueChange={(val) => val && setNewType(val as any)}>
                  <SelectTrigger className="text-xs bg-background/50 border-border/80">
                    <SelectValue placeholder="Documentation" />
                  </SelectTrigger>
                  <SelectContent>
                    {RESOURCE_TYPES.map((t) => (
                      <SelectItem key={t.value} value={t.value} className="text-xs">
                        {t.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="category" className="text-xs font-bold text-foreground">
                  Category
                </Label>
                <Select value={newCategory} onValueChange={(val) => val && setNewCategory(val)}>
                  <SelectTrigger className="text-xs bg-background/50 border-border/80">
                    <SelectValue placeholder="Kotlin" />
                  </SelectTrigger>
                  <SelectContent>
                    {STANDARD_CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat} className="text-xs">
                        {cat}
                      </SelectItem>
                    ))}
                    <SelectItem value="Custom" className="text-xs">
                      Custom Category...
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Custom Category Input (shown when Custom is selected) */}
            {newCategory === "Custom" && (
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="custom-category" className="text-xs font-bold text-foreground">
                  Custom Category Name
                </Label>
                <Input
                  id="custom-category"
                  placeholder="e.g. Gradle, Jetpack Navigation"
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value)}
                  className="text-xs bg-background/50 border-border/80"
                  required
                />
              </div>
            )}

            {/* Week Associations Grid */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-bold text-foreground">
                Syllabus Week Associations
              </Label>
              <div className="bg-background/40 border border-border/60 rounded-lg p-3 grid grid-cols-4 gap-2.5">
                {Array.from({ length: 12 }).map((_, idx) => {
                  const weekNum = idx + 1;
                  const weekId = `week-${weekNum}`;
                  const isChecked = selectedWeeks.includes(weekId);
                  return (
                    <div key={weekId} className="flex items-center gap-1.5">
                      <Checkbox
                        id={`add-wk-chk-${weekId}`}
                        checked={isChecked}
                        onCheckedChange={() => handleToggleWeek(weekId)}
                      />
                      <label
                        htmlFor={`add-wk-chk-${weekId}`}
                        className="text-[10px] font-mono font-bold text-foreground cursor-pointer select-none leading-none"
                      >
                        W{weekNum}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Notes */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="notes" className="text-xs font-bold text-foreground">
                Notes & Summary
              </Label>
              <Textarea
                id="notes"
                placeholder="Key takeaways or summary details..."
                value={newNotes}
                onChange={(e) => setNewNotes(e.target.value)}
                className="text-xs bg-background/50 border-border/80 min-h-[60px] max-h-[120px]"
              />
            </div>

            <DialogFooter className="gap-2 sm:gap-0 pt-2">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setDialogOpen(false)}
                className="text-xs"
              >
                Cancel
              </Button>
              <Button type="submit" className="text-xs font-semibold">
                Add Reference
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
