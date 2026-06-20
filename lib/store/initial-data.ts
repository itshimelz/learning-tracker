import { AppState, DSAProblem, Resource } from "../types";
import { initialPlanTemplate } from "../plan-template";

// Helper to extract problems from initial template
export function extractDsaProblems(): DSAProblem[] {
  const problems: DSAProblem[] = [];
  let idCounter = 1;

  initialPlanTemplate.months.forEach((month) => {
    month.weeks.forEach((week) => {
      week.days.forEach((day) => {
        day.tasks.forEach((task) => {
          if (task.category === "dsa") {
            // Clean up title: remove "DSA Focus: " prefix
            const name = task.title.replace(/^DSA Focus:\s*/i, "").replace(/^DSA:\s*/i, "").trim();
            if (name && name !== "—" && name !== "-" && !name.toLowerCase().includes("revisit") && !name.toLowerCase().includes("mixed review")) {
              // Determine category based on problem names/keywords
              let category = "Misc";
              const lowerName = name.toLowerCase();
              if (lowerName.includes("hash") || lowerName.includes("anagram") || lowerName.includes("two sum")) {
                category = "Arrays & Hashing";
              } else if (lowerName.includes("two-pointer") || lowerName.includes("palindrome")) {
                category = "Two Pointers";
              } else if (lowerName.includes("sliding window")) {
                category = "Sliding Window";
              } else if (lowerName.includes("stack") || lowerName.includes("parentheses")) {
                category = "Stack";
              } else if (lowerName.includes("linked list") || lowerName.includes("cycle")) {
                category = "Linked List";
              } else if (lowerName.includes("binary search")) {
                category = "Binary Search";
              } else if (lowerName.includes("tree") || lowerName.includes("bst")) {
                category = "Trees";
              } else if (lowerName.includes("graph") || lowerName.includes("bfs") || lowerName.includes("dfs")) {
                category = "Graphs";
              } else if (lowerName.includes("dp") || lowerName.includes("climbing stairs") || lowerName.includes("fibonacci")) {
                category = "Dynamic Programming";
              } else if (lowerName.includes("greedy") || lowerName.includes("interval")) {
                category = "Greedy";
              } else if (lowerName.includes("heap") || lowerName.includes("priority queue") || lowerName.includes("top-k")) {
                category = "Heap / Priority Queue";
              } else if (lowerName.includes("backtracking") || lowerName.includes("subset") || lowerName.includes("permutation") || lowerName.includes("combination")) {
                category = "Backtracking";
              } else if (lowerName.includes("trie")) {
                category = "Trie";
              } else if (lowerName.includes("union-find")) {
                category = "Union-Find";
              } else if (lowerName.includes("matrix")) {
                category = "Matrix";
              } else if (lowerName.includes("string")) {
                category = "String";
              }

              // Determine difficulty (rough estimation based on plan timeline)
              let difficulty: "easy" | "medium" | "hard" = "medium";
              if (lowerName.includes("two sum") || lowerName.includes("valid anagram") || lowerName.includes("climbing stairs") || lowerName.includes("reverse a linked list") || lowerName.includes("valid parentheses") || lowerName.includes("fibonacci")) {
                difficulty = "easy";
              } else if (lowerName.includes("hard") || week.weekNumber >= 11) {
                difficulty = "hard";
              }

              problems.push({
                id: `dsa-default-${idCounter++}`,
                name,
                difficulty,
                category,
                weekId: week.id,
                solved: false,
                confidence: 3,
              });
            }
          }
        });
      });
    });
  });

  return problems;
}

export const defaultResources: Resource[] = [
  {
    id: "res-kotlin-docs",
    title: "Official Kotlin Language Documentation",
    url: "https://kotlinlang.org/docs/home.html",
    type: "doc",
    category: "Kotlin",
    notes: "Primary reference for language specification, syntax details, and structural features.",
    weekIds: ["week-1", "week-4"],
    completed: false,
  },
  {
    id: "res-kotlin-k2",
    title: "Kotlin 2.0 Compiler Release Notes & Details",
    url: "https://kotlinlang.org/docs/whatsnew20.html",
    type: "article",
    category: "Kotlin",
    notes: "Review K2 improvements, smart cast improvements, and compiler architecture optimization details.",
    weekIds: ["week-1", "week-4"],
    completed: false,
  },
  {
    id: "res-thinking-compose",
    title: "Thinking in Jetpack Compose Guide",
    url: "https://developer.android.com/develop/ui/compose/mental-model",
    type: "doc",
    category: "Compose",
    notes: "Declarative programming paradigms, recomposition mechanics, and functional UI models.",
    weekIds: ["week-2", "week-3"],
    completed: false,
  },
  {
    id: "res-compose-perf",
    title: "Official Jetpack Compose Performance Guidelines",
    url: "https://developer.android.com/develop/ui/compose/performance",
    type: "doc",
    category: "Compose",
    notes: "Stability configurations, Composable metrics reports, and layout performance rules.",
    weekIds: ["week-2", "week-3", "week-4"],
    completed: false,
  },
  {
    id: "res-coroutines-guide",
    title: "Kotlin Coroutines Official Guide",
    url: "https://kotlinlang.org/docs/coroutines-overview.html",
    type: "doc",
    category: "Coroutines & Flow",
    notes: "Structured concurrency, jobs, dispatchers, cancellation, scopes, and exceptions.",
    weekIds: ["week-5", "week-8"],
    completed: false,
  },
  {
    id: "res-flow-guide",
    title: "Asynchronous Flow Guide (StateFlow, SharedFlow)",
    url: "https://kotlinlang.org/docs/flow.html",
    type: "doc",
    category: "Coroutines & Flow",
    notes: "Hot streams vs cold streams, combining flows, buffering, and thread-switching operators.",
    weekIds: ["week-6", "week-8"],
    completed: false,
  },
  {
    id: "res-architecture-guide",
    title: "Android Official App Architecture Guide",
    url: "https://developer.android.com/topic/architecture",
    type: "doc",
    category: "Architecture",
    notes: "Recommended layered architecture patterns (UI, Domain, Data layers), repository configurations, and DI bindings.",
    weekIds: ["week-7", "week-8", "week-11"],
    completed: false,
  },
  {
    id: "res-kmp-docs",
    title: "Kotlin Multiplatform (KMP) Documentation",
    url: "https://kotlinlang.org/docs/multiplatform.html",
    type: "doc",
    category: "KMP",
    notes: "Expect/actual declarations, multiplatform targets setup, and shared network models.",
    weekIds: ["week-8"],
    completed: false,
  },
  {
    id: "res-mockk-docs",
    title: "MockK Mocking Library Documentation",
    url: "https://mockk.io/",
    type: "doc",
    category: "Testing",
    notes: "Mocking dependencies, relaxed mocks, spys, verifying behavior, and writing unit tests.",
    weekIds: ["week-9"],
    completed: false,
  },
  {
    id: "res-neetcode-150",
    title: "NeetCode 150 DSA Problem Roadmap",
    url: "https://neetcode.io/practice",
    type: "tool",
    category: "DSA",
    notes: "Curated roadmap of interview problems matching our weekly DSA topics.",
    weekIds: ["week-1", "week-2", "week-3", "week-5", "week-6", "week-7", "week-9", "week-10", "week-11", "week-12"],
    completed: false,
  },
];

export const initialAppState: AppState = {
  plan: initialPlanTemplate,
  dsaProblems: [], // Will be filled dynamically in Context using extractDsaProblems()
  resources: defaultResources,
  settings: {
    theme: "dark",
    dailyHours: 4.5,
    startDate: (() => {
      // Default to the most recent Saturday (today or preceding Saturday)
      const d = new Date();
      const day = d.getDay(); // 0 (Sun) to 6 (Sat)
      const distance = (day + 1) % 7; // distance to Saturday
      d.setDate(d.getDate() - distance);
      return d.toISOString().split("T")[0];
    })(),
  },
};
