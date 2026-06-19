export interface StudyPlan {
  months: Month[];
}

export interface Month {
  id: string;              // "month-1"
  title: string;           // "Kotlin Mastery & Compose Internals"
  weeks: Week[];
}

export interface Week {
  id: string;              // "week-1"
  weekNumber: number;
  theme: string;           // "Idiomatic Kotlin 2.x & Project Setup"
  capstoneMilestone: string;
  mockCompleted: boolean;
  days: Day[];
}

export interface Day {
  id: string;              // "week-1-day-mon"
  dayOfWeek: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  tasks: Task[];
}

export interface Task {
  id: string;
  category: 'dsa' | 'deep-dive' | 'capstone' | 'reverse-engineering' | 'mock' | 'rest';
  title: string;
  description?: string;
  completed: boolean;
  completedAt?: string;    // ISO timestamp
  notes?: string;
}

export interface DSAProblem {
  id: string;
  name: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;        // e.g. "HashMap", "Two Pointer", "DP", "Graph", etc.
  weekId: string;          // e.g. "week-1"
  solved: boolean;
  solvedAt?: string;       // ISO date
  timeMinutes?: number;
  confidence: 1 | 2 | 3 | 4 | 5;
  solutionUrl?: string;
  notes?: string;
}

export interface Resource {
  id: string;
  title: string;
  url?: string;
  type: 'doc' | 'video' | 'article' | 'book' | 'tool' | 'repo';
  category: string;        // "Kotlin", "Compose", etc.
  notes?: string;
  weekIds: string[];
  completed: boolean;
}

export interface AppState {
  plan: StudyPlan;
  dsaProblems: DSAProblem[];
  resources: Resource[];
  settings: AppSettings;
}

export interface AppSettings {
  theme: 'light' | 'dark' | 'system';
  dailyHours: number;
  startDate: string;       // ISO date
}
