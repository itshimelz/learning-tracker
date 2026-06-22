"use client";

import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import { AppState } from "../types";
import { appReducer, Action } from "./reducer";
import { initialAppState, extractDsaProblems, defaultResources } from "./initial-data";

import { toast } from "sonner";

const LOCAL_STORAGE_KEY_V1 = "learning_tracker_state_v1";
const LOCAL_STORAGE_KEY_V2 = "learning_tracker_state_v2";
const LOCAL_STORAGE_KEY_V3 = "learning_tracker_state_v3";
const LOCAL_STORAGE_KEY_V4 = "learning_tracker_state_v4";

interface StoreContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  isHydrated: boolean;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  // Initialize state with default templates
  const [state, dispatch] = useReducer(appReducer, {
    ...initialAppState,
    dsaProblems: extractDsaProblems(), // Load all parsed default DSA problems
  });

  const [isHydrated, setIsHydrated] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        // Clean up all legacy storage keys
        if (localStorage.getItem(LOCAL_STORAGE_KEY_V1)) {
          localStorage.removeItem(LOCAL_STORAGE_KEY_V1);
        }
        if (localStorage.getItem(LOCAL_STORAGE_KEY_V2)) {
          localStorage.removeItem(LOCAL_STORAGE_KEY_V2);
        }
        if (localStorage.getItem(LOCAL_STORAGE_KEY_V3)) {
          localStorage.removeItem(LOCAL_STORAGE_KEY_V3);
          setTimeout(() => {
            toast.info("Study Plan Upgraded to v3", {
              description: "Your study schedule has been restructured with the Bangladesh week (Sat→Fri), class routine integration, daily Start Triggers, and Rewards.",
              duration: 6000,
            });
          }, 500);
        }
      }

      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_V4);
      if (saved) {
        const parsed = JSON.parse(saved) as AppState;
        
        // Merge strategy: ensure any updates to static data/templates are preserved
        // but user's completion status is retained.
        // For resources: merge defaultResources and user custom resources.
        const mergedResources = defaultResources.map((defaultRes) => {
          const savedRes = parsed.resources?.find((r) => r.id === defaultRes.id);
          return savedRes ? { ...defaultRes, completed: savedRes.completed } : defaultRes;
        });
        const customResources = (parsed.resources || []).filter((r) => r.id.startsWith("res-custom-"));
        parsed.resources = [...mergedResources, ...customResources];

        dispatch({ type: "IMPORT_STATE", payload: parsed });
      }
    } catch (e) {
      console.error("Failed to load local storage state:", e);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save data to localStorage on state changes
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_V4, JSON.stringify(state));
    } catch (e) {
      console.error("Failed to save state to local storage:", e);
    }
  }, [state, isHydrated]);

  // Handle resetting the store completely
  const dispatchWithReset = (action: Action) => {
    if (action.type === "RESET_STATE") {
      try {
        localStorage.removeItem(LOCAL_STORAGE_KEY_V4);
        // Force reload to reset state back to template
        window.location.reload();
      } catch (e) {
        console.error("Failed to clear local storage:", e);
      }
    } else {
      dispatch(action);
    }
  };

  return (
    <StoreContext.Provider value={{ state, dispatch: dispatchWithReset, isHydrated }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
