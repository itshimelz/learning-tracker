"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

interface TimerState {
  timeLeft: number;
  isRunning: boolean;
  blockId: string | null;
  blockTitle: string | null;
  durationMinutes: number;
}

interface SavedTimerState {
  timeLeft: number;
  isRunning: boolean;
  blockId: string | null;
  blockTitle: string | null;
  durationMinutes: number;
  lastTimestamp: number; // Date.now() when saved
}

interface TimerContextType {
  timer: TimerState;
  startTimer: (blockId: string, blockTitle: string, durationMinutes: number) => void;
  pauseTimer: () => void;
  resumeTimer: () => void;
  resetTimer: () => void;
  isTimerHydrated: boolean;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "learning_tracker_active_timer_v1";

export function TimerProvider({ children }: { children: React.ReactNode }) {
  const [timer, setTimer] = useState<TimerState>({
    timeLeft: 0,
    isRunning: false,
    blockId: null,
    blockTitle: null,
    durationMinutes: 0,
  });

  const [isTimerHydrated, setIsTimerHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as SavedTimerState;
        if (parsed.isRunning && parsed.timeLeft > 0) {
          // Calculate how much time elapsed while tab was closed/inactive
          const elapsed = Math.floor((Date.now() - parsed.lastTimestamp) / 1000);
          const newTimeLeft = Math.max(0, parsed.timeLeft - elapsed);
          const isStillRunning = newTimeLeft > 0;

          setTimer({
            timeLeft: newTimeLeft,
            isRunning: isStillRunning,
            blockId: parsed.blockId,
            blockTitle: parsed.blockTitle,
            durationMinutes: parsed.durationMinutes,
          });

          if (newTimeLeft <= 0) {
            toast.success("Timer completed!", {
              description: `You have completed your timer for: ${parsed.blockTitle}`,
              duration: 5000,
            });
          }
        } else {
          setTimer({
            timeLeft: parsed.timeLeft,
            isRunning: false,
            blockId: parsed.blockId,
            blockTitle: parsed.blockTitle,
            durationMinutes: parsed.durationMinutes,
          });
        }
      }
    } catch (e) {
      console.error("Failed to load active timer state:", e);
    } finally {
      setIsTimerHydrated(true);
    }
  }, []);

  // Save to localStorage on state changes
  useEffect(() => {
    if (!isTimerHydrated) return;
    try {
      const savedState: SavedTimerState = {
        ...timer,
        lastTimestamp: Date.now(),
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedState));
    } catch (e) {
      console.error("Failed to save timer state:", e);
    }
  }, [timer, isTimerHydrated]);

  // Timer Tick Hook
  useEffect(() => {
    if (!timer.isRunning) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev.timeLeft <= 1) {
          clearInterval(interval);
          toast.success("Timer completed!", {
            description: `You have completed your timer for: ${prev.blockTitle}`,
            duration: 5000,
          });
          return {
            ...prev,
            timeLeft: 0,
            isRunning: false,
          };
        }
        return {
          ...prev,
          timeLeft: prev.timeLeft - 1,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer.isRunning]);

  const startTimer = (blockId: string, blockTitle: string, durationMinutes: number) => {
    setTimer({
      timeLeft: durationMinutes * 60,
      isRunning: true,
      blockId,
      blockTitle,
      durationMinutes,
    });
  };

  const pauseTimer = () => {
    setTimer((prev) => ({ ...prev, isRunning: false }));
  };

  const resumeTimer = () => {
    setTimer((prev) => {
      if (prev.timeLeft <= 0) return prev;
      return { ...prev, isRunning: true };
    });
  };

  const resetTimer = () => {
    setTimer((prev) => ({
      ...prev,
      timeLeft: prev.durationMinutes * 60,
      isRunning: false,
    }));
  };

  return (
    <TimerContext.Provider value={{ timer, startTimer, pauseTimer, resumeTimer, resetTimer, isTimerHydrated }}>
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
}
