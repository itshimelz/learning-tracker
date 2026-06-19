"use client";

import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import { AppState } from "../types";
import { appReducer, Action } from "./reducer";
import { initialAppState, extractDsaProblems } from "./initial-data";

const LOCAL_STORAGE_KEY = "learning_tracker_state_v1";

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
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as AppState;
        
        // Merge strategy: ensure any updates to static data/templates are preserved
        // but user's completion status is retained.
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
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Failed to save state to local storage:", e);
    }
  }, [state, isHydrated]);

  // Handle resetting the store completely
  const dispatchWithReset = (action: Action) => {
    if (action.type === "RESET_STATE") {
      try {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
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
