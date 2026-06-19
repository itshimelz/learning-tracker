"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Settings02Icon,
} from "@hugeicons/core-free-icons";
import { toast } from "sonner";

import { useStore } from "@/lib/store/context";
import { AppState } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

// Custom SVG Icons to guarantee no runtime import errors
const DownloadIconSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const UploadIconSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
  </svg>
);

const TrashIconSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
);

const WarningIconSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 text-destructive shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);

export default function SettingsPage() {
  const { state, dispatch, isHydrated } = useStore();
  const { theme: currentAppTheme, setTheme } = useTheme();

  // Settings states local copies to prevent continuous store dispatch lag during typing
  const [startDate, setStartDate] = React.useState("");
  const [dailyHours, setDailyHours] = React.useState("");
  const [selectedTheme, setSelectedTheme] = React.useState<"light" | "dark" | "system">("dark");
  const [resetDialogOpen, setResetDialogOpen] = React.useState(false);

  // File input ref for importing JSON backup
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Sync state values to local variables on load
  React.useEffect(() => {
    if (isHydrated && state.settings) {
      setStartDate(state.settings.startDate || "");
      setDailyHours(state.settings.dailyHours?.toString() || "4.5");
      setSelectedTheme(state.settings.theme || "dark");
    }
  }, [isHydrated, state.settings]);

  // Dispatch settings changes to global store
  const handleSaveSettings = (updatedFields: { startDate?: string; dailyHours?: number; theme?: "light" | "dark" | "system" }) => {
    dispatch({
      type: "UPDATE_SETTINGS",
      payload: updatedFields,
    });
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStartDate(value);
    if (value) {
      handleSaveSettings({ startDate: value });
      toast.success("Start date updated", {
        description: `Your study syllabus schedule dates have adjusted relative to ${value}.`,
      });
    }
  };

  const handleDailyHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    setDailyHours(rawVal);
    const parsed = parseFloat(rawVal);
    if (!isNaN(parsed) && parsed > 0 && parsed <= 24) {
      handleSaveSettings({ dailyHours: parsed });
    }
  };

  const handleThemeChange = (value: string) => {
    if (value === "light" || value === "dark" || value === "system") {
      setSelectedTheme(value);
      setTheme(value);
      handleSaveSettings({ theme: value });
      toast.success(`Theme set to ${value}`);
    }
  };

  // Export App State
  const handleExportState = () => {
    try {
      const backupData = JSON.stringify(state, null, 2);
      const blob = new Blob([backupData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      const dateStr = new Date().toISOString().split("T")[0];
      
      downloadLink.href = url;
      downloadLink.download = `learning_tracker_backup_${dateStr}.json`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(url);
      
      toast.success("Backup file exported successfully!");
    } catch (e) {
      console.error(e);
      toast.error("Failed to export backup");
    }
  };

  // Import App State
  const handleImportState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
      try {
        const text = event.target?.result;
        if (typeof text !== "string") return;

        const parsed = JSON.parse(text) as AppState;

        // Validation schema check
        const hasPlan = parsed && parsed.plan && Array.isArray(parsed.plan.months);
        const hasDsa = parsed && Array.isArray(parsed.dsaProblems);
        const hasResources = parsed && Array.isArray(parsed.resources);
        const hasSettings = parsed && parsed.settings && typeof parsed.settings.startDate === "string";

        if (!hasPlan || !hasDsa || !hasResources || !hasSettings) {
          toast.error("Invalid backup file", {
            description: "The uploaded file does not match the expected state schema structure.",
          });
          return;
        }

        dispatch({
          type: "IMPORT_STATE",
          payload: parsed,
        });

        // Sync theme setting to next-themes immediately if present
        if (parsed.settings.theme) {
          setTheme(parsed.settings.theme);
        }

        toast.success("State restored successfully!", {
          description: "All task completion records, custom problems, and resources have been loaded.",
        });

        // Reset file input value
        if (fileInputRef.current) fileInputRef.current.value = "";

      } catch (err) {
        console.error(err);
        toast.error("Failed to parse file", {
          description: "Make sure the uploaded file is a valid JSON backup.",
        });
      }
    };

    reader.readAsText(file);
  };

  // Reset App State
  const handleResetProgress = () => {
    dispatch({ type: "RESET_STATE" });
    setResetDialogOpen(false);
  };

  if (!isHydrated) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <span className="text-xs text-muted-foreground font-mono">Loading Settings...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 lg:gap-8 max-w-4xl mx-auto">
      {/* Page Title */}
      <div className="flex flex-col gap-1.5 border-b border-border pb-5">
        <div className="flex items-center gap-2 text-primary">
          <HugeiconsIcon icon={Settings02Icon} className="size-5" />
          <span className="text-[10px] uppercase font-bold tracking-wider font-mono">Control Center</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Settings</h1>
        <p className="text-xs text-muted-foreground max-w-xl">
          Configure start dates, toggle themes, export files, or wipe data.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Left Column: General Configuration */}
        <div className="flex flex-col gap-6">
          <Card className="bg-card/25 border-border/80 shadow-xs">
            <CardHeader className="p-5 pb-3">
              <CardTitle className="text-sm font-bold text-foreground">Syllabus Configuration</CardTitle>
              <CardDescription className="text-xs">Adjust study parameters and start schedules.</CardDescription>
            </CardHeader>
            <CardContent className="p-5 pt-0 space-y-4">
              {/* Start Date */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="start-date" className="text-xs font-bold text-foreground">
                  Study Start Date
                </Label>
                <Input
                  id="start-date"
                  type="date"
                  value={startDate}
                  onChange={handleStartDateChange}
                  className="text-xs bg-background/50 border-border/80 w-full"
                />
                <p className="text-[10px] text-muted-foreground leading-normal">
                  Sets the starting day for Week 1 Day 1. Changing this dynamically shifts all daily task dates.
                </p>
              </div>

              {/* Daily Hours */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="daily-hours" className="text-xs font-bold text-foreground">
                  Daily Study Hours Target
                </Label>
                <div className="flex items-center gap-3">
                  <Input
                    id="daily-hours"
                    type="number"
                    min="1"
                    max="24"
                    step="0.5"
                    value={dailyHours}
                    onChange={handleDailyHoursChange}
                    className="text-xs bg-background/50 border-border/80 w-24"
                  />
                  <span className="text-xs text-muted-foreground font-medium">hours / day</span>
                </div>
                <p className="text-[10px] text-muted-foreground leading-normal">
                  Specify your ideal target. This configuration adjusts stats calculations.
                </p>
              </div>

              {/* Theme Settings */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="theme-select" className="text-xs font-bold text-foreground">
                  Interface Theme Mode
                </Label>
                <Select value={selectedTheme} onValueChange={(val) => val && handleThemeChange(val)}>
                  <SelectTrigger id="theme-select" className="text-xs bg-background/50 border-border/80 w-full">
                    <SelectValue placeholder="System Default" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light" className="text-xs">Light Mode</SelectItem>
                    <SelectItem value="dark" className="text-xs">Dark Mode</SelectItem>
                    <SelectItem value="system" className="text-xs">System Default</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Backup, Restore & Reset */}
        <div className="flex flex-col gap-6">
          {/* Data Backup Card */}
          <Card className="bg-card/25 border-border/80 shadow-xs">
            <CardHeader className="p-5 pb-3">
              <CardTitle className="text-sm font-bold text-foreground">Data Backup & Recovery</CardTitle>
              <CardDescription className="text-xs">Export state data or restore progress from files.</CardDescription>
            </CardHeader>
            <CardContent className="p-5 pt-0 space-y-4">
              <div className="space-y-3 pt-1">
                {/* Export Data */}
                <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-muted/20 border border-border/40">
                  <div className="flex flex-col gap-0.5 leading-snug">
                    <span className="text-xs font-bold text-foreground">Export Progress JSON</span>
                    <span className="text-[10px] text-muted-foreground">Download state logs to your local drive.</span>
                  </div>
                  <Button onClick={handleExportState} size="sm" variant="outline" className="font-semibold text-xs gap-1.5 shrink-0">
                    <DownloadIconSvg />
                    Export
                  </Button>
                </div>

                {/* Import Data */}
                <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-muted/20 border border-border/40">
                  <div className="flex flex-col gap-0.5 leading-snug">
                    <span className="text-xs font-bold text-foreground">Import Progress JSON</span>
                    <span className="text-[10px] text-muted-foreground">Restore your checkpoints from backup files.</span>
                  </div>
                  <div>
                    <input
                      type="file"
                      accept=".json"
                      ref={fileInputRef}
                      onChange={handleImportState}
                      className="hidden"
                    />
                    <Button
                      onClick={() => fileInputRef.current?.click()}
                      size="sm"
                      variant="outline"
                      className="font-semibold text-xs gap-1.5"
                    >
                      <UploadIconSvg />
                      Import
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="bg-red-500/5 border-red-500/20 shadow-xs">
            <CardHeader className="p-5 pb-3">
              <CardTitle className="text-sm font-bold text-red-500">Danger Zone</CardTitle>
              <CardDescription className="text-xs text-red-400/80">Destructive actions cannot be undone.</CardDescription>
            </CardHeader>
            <CardContent className="p-5 pt-0 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-3.5 rounded-lg bg-red-500/10 border border-red-500/20">
                <div className="flex flex-col gap-1 leading-snug">
                  <span className="text-xs font-bold text-foreground">Reset Application State</span>
                  <p className="text-[10px] text-muted-foreground leading-normal max-w-md">
                    Wipes all syllabus completions, tasks progress, custom DSA questions, and resource references back to fresh template defaults.
                  </p>
                </div>
                <Button
                  onClick={() => setResetDialogOpen(true)}
                  size="sm"
                  variant="destructive"
                  className="font-bold text-xs gap-1.5 shrink-0"
                >
                  <TrashIconSvg />
                  Reset State
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Confirm Reset Dialog Modal */}
      <Dialog open={resetDialogOpen} onOpenChange={setResetDialogOpen}>
        <DialogContent className="max-w-md bg-popover border border-border shadow-2xl">
          <DialogHeader className="flex flex-row items-start gap-3">
            <div className="p-2 rounded-full bg-destructive/10 text-destructive shrink-0 mt-0.5">
              <WarningIconSvg />
            </div>
            <div className="flex flex-col gap-1">
              <DialogTitle className="text-base font-bold text-foreground">
                Confirm Database Reset
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground leading-relaxed">
                Are you absolutely sure? This will clear all local storage data, including:
              </DialogDescription>
            </div>
          </DialogHeader>

          <div className="text-xs text-muted-foreground bg-muted/40 border border-border/50 rounded-lg p-3.5 space-y-1.5 ml-11 font-mono">
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-destructive" />
              <span>All 12-week task completion statuses</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-destructive" />
              <span>All logged DSA problems & custom notes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-destructive" />
              <span>Any added custom study resources</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-destructive" />
              <span>User schedule/start date configuration settings</span>
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0 mt-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setResetDialogOpen(false)}
              className="text-xs"
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={handleResetProgress}
              className="text-xs font-bold"
            >
              Confirm Reset
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
