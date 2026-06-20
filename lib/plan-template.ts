import { StudyPlan } from "./types";

export const initialPlanTemplate: StudyPlan = {
  "months": [
    {
      "id": "month-1",
      "title": "Kotlin Mastery & Compose Internals",
      "weeks": [
        {
          "id": "week-1",
          "weekNumber": 1,
          "theme": "Kotlin Core",
          "capstoneMilestone": "Project + module skeleton",
          "mockCompleted": false,
          "days": [
            {
              "id": "week-1-day-sat",
              "dayOfWeek": "Sat",
              "tasks": [
                {
                  "id": "week-1-day-sat-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Two Sum & HashMap variants",
                  "completed": false
                },
                {
                  "id": "week-1-day-sat-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Sealed classes/interfaces, exhaustive `when`",
                  "completed": false
                },
                {
                  "id": "week-1-day-sat-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Pick your capstone app idea, scope a feature list, init the repo",
                  "completed": false
                },
                {
                  "id": "week-1-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-1-day-sun",
              "dayOfWeek": "Sun",
              "tasks": [
                {
                  "id": "week-1-day-sun-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Valid Anagram / Group Anagrams",
                  "completed": false
                },
                {
                  "id": "week-1-day-sun-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Generics, variance (`in`/`out`), reified type params",
                  "completed": false
                },
                {
                  "id": "week-1-day-sun-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Define core domain models (data classes, sealed `Result` types)",
                  "completed": false
                },
                {
                  "id": "week-1-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-1-day-mon",
              "dayOfWeek": "Mon",
              "tasks": [
                {
                  "id": "week-1-day-mon-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Two-pointer on sorted arrays",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-1-day-tue",
              "dayOfWeek": "Tue",
              "tasks": [
                {
                  "id": "week-1-day-tue-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Sliding window (longest substring)",
                  "completed": false
                },
                {
                  "id": "week-1-day-tue-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Inline/value classes, how K2 optimizes bytecode",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-1-day-wed",
              "dayOfWeek": "Wed",
              "tasks": [
                {
                  "id": "week-1-day-wed-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Intro BFS on a grid",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-1-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-1-day-thu-dsa",
                  "category": "dsa",
                  "title": "DSA: Timed: 2 medium problems back to back",
                  "completed": false
                },
                {
                  "id": "week-1-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Property delegation (`by lazy`, custom delegates)",
                  "completed": false
                },
                {
                  "id": "week-1-day-thu-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Set up multi-module Gradle structure (`:app`, `:core`, `:data`, `:domain`, `:feature-x`)",
                  "completed": false
                },
                {
                  "id": "week-1-day-thu-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-1-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-1-day-fri-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Scope functions (`let/run/apply/also/with`) \u2014 when to use which",
                  "completed": false
                },
                {
                  "id": "week-1-day-fri-capstone-part1",
                  "category": "capstone",
                  "title": "Part 1: Capstone Task: Wire Hilt across the new module graph",
                  "completed": false
                },
                {
                  "id": "week-1-day-fri-reverse-engineering-part1",
                  "category": "reverse-engineering",
                  "title": "Part 1: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-1-day-fri-capstone-part2",
                  "category": "capstone",
                  "title": "Part 2: Capstone Task: Build the Compose Navigation skeleton",
                  "completed": false
                },
                {
                  "id": "week-1-day-fri-reverse-engineering-part2",
                  "category": "reverse-engineering",
                  "title": "Part 2: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-1-day-fri-mock",
                  "category": "mock",
                  "title": "Capstone: Record yourself explaining \"sealed classes vs enums\" out loud for 5 min; log mistakes",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "week-2",
          "weekNumber": 2,
          "theme": "Compose State",
          "capstoneMilestone": "First screen + ViewModel",
          "mockCompleted": false,
          "days": [
            {
              "id": "week-2-day-sat",
              "dayOfWeek": "Sat",
              "tasks": [
                {
                  "id": "week-2-day-sat-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Reverse a linked list",
                  "completed": false
                },
                {
                  "id": "week-2-day-sat-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Composable functions, recomposition basics",
                  "completed": false
                },
                {
                  "id": "week-2-day-sat-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Build the first screen UI with static data",
                  "completed": false
                },
                {
                  "id": "week-2-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-2-day-sun",
              "dayOfWeek": "Sun",
              "tasks": [
                {
                  "id": "week-2-day-sun-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Linked list cycle detection",
                  "completed": false
                },
                {
                  "id": "week-2-day-sun-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: `remember` vs `rememberSaveable`",
                  "completed": false
                },
                {
                  "id": "week-2-day-sun-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Add ViewModel + `UiState` data class for that screen",
                  "completed": false
                },
                {
                  "id": "week-2-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-2-day-mon",
              "dayOfWeek": "Mon",
              "tasks": [
                {
                  "id": "week-2-day-mon-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Valid Parentheses (stack)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-2-day-tue",
              "dayOfWeek": "Tue",
              "tasks": [
                {
                  "id": "week-2-day-tue-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Queue/Deque problems",
                  "completed": false
                },
                {
                  "id": "week-2-day-tue-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: `derivedStateOf` and its performance cost",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-2-day-wed",
              "dayOfWeek": "Wed",
              "tasks": [
                {
                  "id": "week-2-day-wed-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Binary search variants",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-2-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-2-day-thu-dsa",
                  "category": "dsa",
                  "title": "Mock/Whiteboard: Whiteboard your app's unidirectional data flow like an interviewer asked for it",
                  "completed": false
                },
                {
                  "id": "week-2-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: State hoisting patterns",
                  "completed": false
                },
                {
                  "id": "week-2-day-thu-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Build detail screen + navigation list\u2194detail",
                  "completed": false
                },
                {
                  "id": "week-2-day-thu-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-2-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-2-day-fri-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: `@Stable` / `@Immutable` \u2014 why stability controls recomposition skipping",
                  "completed": false
                },
                {
                  "id": "week-2-day-fri-capstone-part1",
                  "category": "capstone",
                  "title": "Part 1: Capstone Task: Add loading/error/empty states to both screens",
                  "completed": false
                },
                {
                  "id": "week-2-day-fri-reverse-engineering-part1",
                  "category": "reverse-engineering",
                  "title": "Part 1: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-2-day-fri-capstone-part2",
                  "category": "capstone",
                  "title": "Part 2: Capstone Task: Add a debounced search/filter bar",
                  "completed": false
                },
                {
                  "id": "week-2-day-fri-reverse-engineering-part2",
                  "category": "reverse-engineering",
                  "title": "Part 2: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-2-day-fri-mock",
                  "category": "mock",
                  "title": "Capstone: Timed: 1 medium problem",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "week-3",
          "weekNumber": 3,
          "theme": "Compose Internals",
          "capstoneMilestone": "Stable, animated UI",
          "mockCompleted": false,
          "days": [
            {
              "id": "week-3-day-sat",
              "dayOfWeek": "Sat",
              "tasks": [
                {
                  "id": "week-3-day-sat-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Tree traversal (pre/in/post-order)",
                  "completed": false
                },
                {
                  "id": "week-3-day-sat-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: The Snapshot system \u2014 how Compose tracks state reads",
                  "completed": false
                },
                {
                  "id": "week-3-day-sat-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Add `LaunchedEffect` for initial data load",
                  "completed": false
                },
                {
                  "id": "week-3-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-3-day-sun",
              "dayOfWeek": "Sun",
              "tasks": [
                {
                  "id": "week-3-day-sun-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Tree level-order (BFS)",
                  "completed": false
                },
                {
                  "id": "week-3-day-sun-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: `SideEffect` vs `DisposableEffect`",
                  "completed": false
                },
                {
                  "id": "week-3-day-sun-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Hook up a lifecycle-aware connectivity observer",
                  "completed": false
                },
                {
                  "id": "week-3-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-3-day-mon",
              "dayOfWeek": "Mon",
              "tasks": [
                {
                  "id": "week-3-day-mon-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Validate a BST",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-3-day-tue",
              "dayOfWeek": "Tue",
              "tasks": [
                {
                  "id": "week-3-day-tue-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Graph DFS \u2014 connected components",
                  "completed": false
                },
                {
                  "id": "week-3-day-tue-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: `produceState`, `rememberCoroutineScope`",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-3-day-wed",
              "dayOfWeek": "Wed",
              "tasks": [
                {
                  "id": "week-3-day-wed-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Graph BFS \u2014 shortest path",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-3-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-3-day-thu-dsa",
                  "category": "dsa",
                  "title": "DSA: 1 DSA problem (30 min)",
                  "completed": false
                },
                {
                  "id": "week-3-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Pull up the Compose compiler metrics report for your own app",
                  "completed": false
                },
                {
                  "id": "week-3-day-thu-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Fix one unstable parameter flagged by the report",
                  "completed": false
                },
                {
                  "id": "week-3-day-thu-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-3-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-3-day-fri-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Custom modifiers (light intro)",
                  "completed": false
                },
                {
                  "id": "week-3-day-fri-capstone-part1",
                  "category": "capstone",
                  "title": "Part 1: Capstone Task: Add coroutine-driven pull-to-refresh",
                  "completed": false
                },
                {
                  "id": "week-3-day-fri-reverse-engineering-part1",
                  "category": "reverse-engineering",
                  "title": "Part 1: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-3-day-fri-capstone-part2",
                  "category": "capstone",
                  "title": "Part 2: Capstone Task: Polish transitions with `AnimatedVisibility`/`Crossfade`",
                  "completed": false
                },
                {
                  "id": "week-3-day-fri-reverse-engineering-part2",
                  "category": "reverse-engineering",
                  "title": "Part 2: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-3-day-fri-mock",
                  "category": "mock",
                  "title": "Mock/Whiteboard: Explain the recomposition deep-dive to a friend/camera (15 min)",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "week-4",
          "weekNumber": 4,
          "theme": "**Month 1 Checkpoint**",
          "capstoneMilestone": "Tested, documented MVP",
          "mockCompleted": false,
          "days": [
            {
              "id": "week-4-day-sat",
              "dayOfWeek": "Sat",
              "tasks": [
                {
                  "id": "week-4-day-sat-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Revisit 2 weak problems from Weeks 1\u20133",
                  "completed": false
                },
                {
                  "id": "week-4-day-sat-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Re-read your sealed-class/state notes, fill gaps",
                  "completed": false
                },
                {
                  "id": "week-4-day-sat-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Refactor Week 1\u20133 code for idiomatic Kotlin",
                  "completed": false
                },
                {
                  "id": "week-4-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-4-day-sun",
              "dayOfWeek": "Sun",
              "tasks": [
                {
                  "id": "week-4-day-sun-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Mixed review",
                  "completed": false
                },
                {
                  "id": "week-4-day-sun-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Read remaining sections of the official Compose performance guide",
                  "completed": false
                },
                {
                  "id": "week-4-day-sun-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Add intro-level unit tests for ViewModel logic",
                  "completed": false
                },
                {
                  "id": "week-4-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-4-day-mon",
              "dayOfWeek": "Mon",
              "tasks": [
                {
                  "id": "week-4-day-mon-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Mixed review",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-4-day-tue",
              "dayOfWeek": "Tue",
              "tasks": [
                {
                  "id": "week-4-day-tue-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Mixed review",
                  "completed": false
                },
                {
                  "id": "week-4-day-tue-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Skim Kotlin 2.x release notes",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-4-day-wed",
              "dayOfWeek": "Wed",
              "tasks": [
                {
                  "id": "week-4-day-wed-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Timed: 2 problems",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-4-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-4-day-thu-dsa",
                  "category": "dsa",
                  "title": "DSA: Month 1 Mock Interview (45 min): 1 DSA problem + \"walk me through your Compose state management\" + 1 behavioral STAR question",
                  "completed": false
                },
                {
                  "id": "week-4-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Revisit any shaky Compose concept",
                  "completed": false
                },
                {
                  "id": "week-4-day-thu-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Clean up module boundaries \u2014 verify `:domain` has zero Android deps",
                  "completed": false
                },
                {
                  "id": "week-4-day-thu-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-4-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-4-day-fri-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Buffer day",
                  "completed": false
                },
                {
                  "id": "week-4-day-fri-capstone-part1",
                  "category": "capstone",
                  "title": "Part 1: Capstone Task: Write a short README documenting the architecture so far",
                  "completed": false
                },
                {
                  "id": "week-4-day-fri-reverse-engineering-part1",
                  "category": "reverse-engineering",
                  "title": "Part 1: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-4-day-fri-capstone-part2",
                  "category": "capstone",
                  "title": "Part 2: Capstone Task: Demo the app end-to-end; list 3 bugs/improvements",
                  "completed": false
                },
                {
                  "id": "week-4-day-fri-reverse-engineering-part2",
                  "category": "reverse-engineering",
                  "title": "Part 2: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "month-2",
      "title": "Concurrency, Data & Architecture",
      "weeks": [
        {
          "id": "week-5",
          "weekNumber": 5,
          "theme": "Coroutines",
          "capstoneMilestone": "Async network layer",
          "mockCompleted": false,
          "days": [
            {
              "id": "week-5-day-sat",
              "dayOfWeek": "Sat",
              "tasks": [
                {
                  "id": "week-5-day-sat-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Backtracking \u2014 subsets/permutations",
                  "completed": false
                },
                {
                  "id": "week-5-day-sat-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: `launch` vs `async`, `CoroutineScope` basics",
                  "completed": false
                },
                {
                  "id": "week-5-day-sat-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Convert one network call to a suspend function (Retrofit)",
                  "completed": false
                },
                {
                  "id": "week-5-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-5-day-sun",
              "dayOfWeek": "Sun",
              "tasks": [
                {
                  "id": "week-5-day-sun-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Backtracking \u2014 combinations",
                  "completed": false
                },
                {
                  "id": "week-5-day-sun-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Dispatchers (`Main`/`IO`/`Default`) \u2014 when to switch",
                  "completed": false
                },
                {
                  "id": "week-5-day-sun-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Move DB/network calls to `Dispatchers.IO`",
                  "completed": false
                },
                {
                  "id": "week-5-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-5-day-mon",
              "dayOfWeek": "Mon",
              "tasks": [
                {
                  "id": "week-5-day-mon-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: DP intro \u2014 climbing stairs, Fibonacci",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-5-day-tue",
              "dayOfWeek": "Tue",
              "tasks": [
                {
                  "id": "week-5-day-tue-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: DP \u2014 1D array problems",
                  "completed": false
                },
                {
                  "id": "week-5-day-tue-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: `SupervisorJob` vs `Job` \u2014 isolating failures",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-5-day-wed",
              "dayOfWeek": "Wed",
              "tasks": [
                {
                  "id": "week-5-day-wed-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: DP \u2014 2D grid problems",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-5-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-5-day-thu-dsa",
                  "category": "dsa",
                  "title": "DSA: Timed: 1 medium problem",
                  "completed": false
                },
                {
                  "id": "week-5-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Structured concurrency \u2014 job hierarchy & cancellation",
                  "completed": false
                },
                {
                  "id": "week-5-day-thu-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Add cancellation-safe loading (cancel on screen leave)",
                  "completed": false
                },
                {
                  "id": "week-5-day-thu-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-5-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-5-day-fri-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Exception handling in coroutines (`CoroutineExceptionHandler`)",
                  "completed": false
                },
                {
                  "id": "week-5-day-fri-capstone-part1",
                  "category": "capstone",
                  "title": "Part 1: Capstone Task: Run parallel API calls (e.g. user + settings) under a supervisor scope",
                  "completed": false
                },
                {
                  "id": "week-5-day-fri-reverse-engineering-part1",
                  "category": "reverse-engineering",
                  "title": "Part 1: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-5-day-fri-capstone-part2",
                  "category": "capstone",
                  "title": "Part 2: Capstone Task: Add error handling/retry to the network layer",
                  "completed": false
                },
                {
                  "id": "week-5-day-fri-reverse-engineering-part2",
                  "category": "reverse-engineering",
                  "title": "Part 2: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-5-day-fri-mock",
                  "category": "mock",
                  "title": "Mock/Whiteboard: Explain structured concurrency to an imaginary junior dev (record it)",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "week-6",
          "weekNumber": 6,
          "theme": "Flow/StateFlow",
          "capstoneMilestone": "Reactive UI state",
          "mockCompleted": false,
          "days": [
            {
              "id": "week-6-day-sat",
              "dayOfWeek": "Sat",
              "tasks": [
                {
                  "id": "week-6-day-sat-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: DP \u2014 knapsack-style",
                  "completed": false
                },
                {
                  "id": "week-6-day-sat-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Cold vs hot streams, `Flow` builders",
                  "completed": false
                },
                {
                  "id": "week-6-day-sat-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Convert Room DAO queries to return `Flow`",
                  "completed": false
                },
                {
                  "id": "week-6-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-6-day-sun",
              "dayOfWeek": "Sun",
              "tasks": [
                {
                  "id": "week-6-day-sun-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Greedy algorithms",
                  "completed": false
                },
                {
                  "id": "week-6-day-sun-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: `StateFlow` \u2014 state preservation, `stateIn`",
                  "completed": false
                },
                {
                  "id": "week-6-day-sun-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Expose ViewModel UI state as `StateFlow`",
                  "completed": false
                },
                {
                  "id": "week-6-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-6-day-mon",
              "dayOfWeek": "Mon",
              "tasks": [
                {
                  "id": "week-6-day-mon-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Greedy \u2014 interval scheduling",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-6-day-tue",
              "dayOfWeek": "Tue",
              "tasks": [
                {
                  "id": "week-6-day-tue-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Heap/Priority Queue",
                  "completed": false
                },
                {
                  "id": "week-6-day-tue-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: `Channels` \u2014 unicast vs broadcast, buffering",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-6-day-wed",
              "dayOfWeek": "Wed",
              "tasks": [
                {
                  "id": "week-6-day-wed-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Heap \u2014 top-K problems",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-6-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-6-day-thu-dsa",
                  "category": "dsa",
                  "title": "DSA: Timed: 1 problem",
                  "completed": false
                },
                {
                  "id": "week-6-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: `SharedFlow` \u2014 one-off events",
                  "completed": false
                },
                {
                  "id": "week-6-day-thu-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Implement a one-time event channel (snackbars/navigation)",
                  "completed": false
                },
                {
                  "id": "week-6-day-thu-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-6-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-6-day-fri-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Flow operators: `map`, `combine`, `flatMapLatest`, `debounce`",
                  "completed": false
                },
                {
                  "id": "week-6-day-fri-capstone-part1",
                  "category": "capstone",
                  "title": "Part 1: Capstone Task: Build a debounced search via channel",
                  "completed": false
                },
                {
                  "id": "week-6-day-fri-reverse-engineering-part1",
                  "category": "reverse-engineering",
                  "title": "Part 1: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-6-day-fri-capstone-part2",
                  "category": "capstone",
                  "title": "Part 2: Capstone Task: Combine search query + filter state into one UI stream",
                  "completed": false
                },
                {
                  "id": "week-6-day-fri-reverse-engineering-part2",
                  "category": "reverse-engineering",
                  "title": "Part 2: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-6-day-fri-mock",
                  "category": "mock",
                  "title": "Mock/Whiteboard: Whiteboard: \"StateFlow vs SharedFlow vs Channel \u2014 when would you use each?\"",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "week-7",
          "weekNumber": 7,
          "theme": "Architecture/DI",
          "capstoneMilestone": "Clean layers + Hilt",
          "mockCompleted": false,
          "days": [
            {
              "id": "week-7-day-sat",
              "dayOfWeek": "Sat",
              "tasks": [
                {
                  "id": "week-7-day-sat-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Trie problems",
                  "completed": false
                },
                {
                  "id": "week-7-day-sat-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Clean Architecture layers (official Android guide)",
                  "completed": false
                },
                {
                  "id": "week-7-day-sat-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Extract Use Cases into `:domain` for one feature",
                  "completed": false
                },
                {
                  "id": "week-7-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-7-day-sun",
              "dayOfWeek": "Sun",
              "tasks": [
                {
                  "id": "week-7-day-sun-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Union-Find basics",
                  "completed": false
                },
                {
                  "id": "week-7-day-sun-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Repository pattern \u2014 single source of truth",
                  "completed": false
                },
                {
                  "id": "week-7-day-sun-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Build Repository interface + impl over Room/Retrofit",
                  "completed": false
                },
                {
                  "id": "week-7-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-7-day-mon",
              "dayOfWeek": "Mon",
              "tasks": [
                {
                  "id": "week-7-day-mon-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Matrix traversal",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-7-day-tue",
              "dayOfWeek": "Tue",
              "tasks": [
                {
                  "id": "week-7-day-tue-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Palindrome problems",
                  "completed": false
                },
                {
                  "id": "week-7-day-tue-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Hilt scopes (`@Singleton`, `@ViewModelScoped`), bindings",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-7-day-wed",
              "dayOfWeek": "Wed",
              "tasks": [
                {
                  "id": "week-7-day-wed-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: String matching (conceptual KMP/Rabin-Karp)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-7-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-7-day-thu-dsa",
                  "category": "dsa",
                  "title": "DSA: Timed: 1 problem",
                  "completed": false
                },
                {
                  "id": "week-7-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: MVVM vs MVI trade-offs",
                  "completed": false
                },
                {
                  "id": "week-7-day-thu-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Refactor one screen to strict intent/state/effect MVI",
                  "completed": false
                },
                {
                  "id": "week-7-day-thu-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-7-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-7-day-fri-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Offline-first caching strategy",
                  "completed": false
                },
                {
                  "id": "week-7-day-fri-capstone-part1",
                  "category": "capstone",
                  "title": "Part 1: Capstone Task: Audit and clean the Hilt graph",
                  "completed": false
                },
                {
                  "id": "week-7-day-fri-reverse-engineering-part1",
                  "category": "reverse-engineering",
                  "title": "Part 1: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-7-day-fri-capstone-part2",
                  "category": "capstone",
                  "title": "Part 2: Capstone Task: Implement offline-first sync for one feature",
                  "completed": false
                },
                {
                  "id": "week-7-day-fri-reverse-engineering-part2",
                  "category": "reverse-engineering",
                  "title": "Part 2: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-7-day-fri-mock",
                  "category": "mock",
                  "title": "Mock/Whiteboard: Mock: \"Design an offline-first news feed app\" (30 min verbal/whiteboard)",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "week-8",
          "weekNumber": 8,
          "theme": "**Month 2 Checkpoint**",
          "capstoneMilestone": "KMP shared module live",
          "mockCompleted": false,
          "days": [
            {
              "id": "week-8-day-sat",
              "dayOfWeek": "Sat",
              "tasks": [
                {
                  "id": "week-8-day-sat-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Mixed review",
                  "completed": false
                },
                {
                  "id": "week-8-day-sat-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: KMP basics \u2014 `expect`/`actual`, shared module setup",
                  "completed": false
                },
                {
                  "id": "week-8-day-sat-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Create a KMP shared module for core data models",
                  "completed": false
                },
                {
                  "id": "week-8-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-8-day-sun",
              "dayOfWeek": "Sun",
              "tasks": [
                {
                  "id": "week-8-day-sun-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Mixed review",
                  "completed": false
                },
                {
                  "id": "week-8-day-sun-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: KMP networking with Ktor Client",
                  "completed": false
                },
                {
                  "id": "week-8-day-sun-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Move one repository's network layer into the shared module",
                  "completed": false
                },
                {
                  "id": "week-8-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-8-day-mon",
              "dayOfWeek": "Mon",
              "tasks": [
                {
                  "id": "week-8-day-mon-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Mixed review",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-8-day-tue",
              "dayOfWeek": "Tue",
              "tasks": [
                {
                  "id": "week-8-day-tue-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Mixed review",
                  "completed": false
                },
                {
                  "id": "week-8-day-tue-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Read Google's layered-architecture guide end-to-end",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-8-day-wed",
              "dayOfWeek": "Wed",
              "tasks": [
                {
                  "id": "week-8-day-wed-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Timed: 2 problems",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-8-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-8-day-thu-dsa",
                  "category": "dsa",
                  "title": "DSA: Month 2 Mock Interview (45 min): medium-hard DSA + \"explain your layered architecture and why KMP\" + STAR on a technical disagreement",
                  "completed": false
                },
                {
                  "id": "week-8-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Koin vs Hilt \u2014 why Koin for KMP",
                  "completed": false
                },
                {
                  "id": "week-8-day-thu-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Wire Koin into the shared module",
                  "completed": false
                },
                {
                  "id": "week-8-day-thu-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-8-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-8-day-fri-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Buffer/catch-up day",
                  "completed": false
                },
                {
                  "id": "week-8-day-fri-capstone-part1",
                  "category": "capstone",
                  "title": "Part 1: Capstone Task: Document a full data-flow diagram for the app",
                  "completed": false
                },
                {
                  "id": "week-8-day-fri-reverse-engineering-part1",
                  "category": "reverse-engineering",
                  "title": "Part 1: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-8-day-fri-capstone-part2",
                  "category": "capstone",
                  "title": "Part 2: Capstone Task: End-to-end test run; fix integration bugs",
                  "completed": false
                },
                {
                  "id": "week-8-day-fri-reverse-engineering-part2",
                  "category": "reverse-engineering",
                  "title": "Part 2: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "month-3",
      "title": "Testing, Diagnostics, System Design & Interview Readiness",
      "weeks": [
        {
          "id": "week-9",
          "weekNumber": 9,
          "theme": "Testing",
          "capstoneMilestone": "Unit + Compose UI tests",
          "mockCompleted": false,
          "days": [
            {
              "id": "week-9-day-sat",
              "dayOfWeek": "Sat",
              "tasks": [
                {
                  "id": "week-9-day-sat-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Mixed mediums",
                  "completed": false
                },
                {
                  "id": "week-9-day-sat-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: JUnit 5 fundamentals (Arrange-Act-Assert)",
                  "completed": false
                },
                {
                  "id": "week-9-day-sat-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Write first unit tests for a Repository class",
                  "completed": false
                },
                {
                  "id": "week-9-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-9-day-sun",
              "dayOfWeek": "Sun",
              "tasks": [
                {
                  "id": "week-9-day-sun-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Mixed mediums",
                  "completed": false
                },
                {
                  "id": "week-9-day-sun-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: MockK \u2014 relaxed mocks, `verify`",
                  "completed": false
                },
                {
                  "id": "week-9-day-sun-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Mock dependencies in ViewModel tests",
                  "completed": false
                },
                {
                  "id": "week-9-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-9-day-mon",
              "dayOfWeek": "Mon",
              "tasks": [
                {
                  "id": "week-9-day-mon-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Mixed mediums",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-9-day-tue",
              "dayOfWeek": "Tue",
              "tasks": [
                {
                  "id": "week-9-day-tue-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Mixed mediums",
                  "completed": false
                },
                {
                  "id": "week-9-day-tue-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: `advanceTimeBy()` / `advanceUntilIdle()`",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-9-day-wed",
              "dayOfWeek": "Wed",
              "tasks": [
                {
                  "id": "week-9-day-wed-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Mixed mediums",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-9-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-9-day-thu-dsa",
                  "category": "dsa",
                  "title": "DSA: Timed: 1 problem",
                  "completed": false
                },
                {
                  "id": "week-9-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Testing coroutines \u2014 `runTest`, `StandardTestDispatcher`",
                  "completed": false
                },
                {
                  "id": "week-9-day-thu-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Test loading/success/error states in a ViewModel",
                  "completed": false
                },
                {
                  "id": "week-9-day-thu-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-9-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-9-day-fri-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Compose UI testing \u2014 `createComposeRule`, semantics finders",
                  "completed": false
                },
                {
                  "id": "week-9-day-fri-capstone-part1",
                  "category": "capstone",
                  "title": "Part 1: Capstone Task: Test the debounced search flow from Week 6",
                  "completed": false
                },
                {
                  "id": "week-9-day-fri-reverse-engineering-part1",
                  "category": "reverse-engineering",
                  "title": "Part 1: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-9-day-fri-capstone-part2",
                  "category": "capstone",
                  "title": "Part 2: Capstone Task: Write 2\u20133 Compose UI tests for critical screens",
                  "completed": false
                },
                {
                  "id": "week-9-day-fri-reverse-engineering-part2",
                  "category": "reverse-engineering",
                  "title": "Part 2: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-9-day-fri-mock",
                  "category": "mock",
                  "title": "Mock/Whiteboard: Explain your testing pyramid as if asked \"how do you ensure code quality?\"",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "week-10",
          "weekNumber": 10,
          "theme": "Diagnostics",
          "capstoneMilestone": "Leak-free, profiled, AI module",
          "mockCompleted": false,
          "days": [
            {
              "id": "week-10-day-sat",
              "dayOfWeek": "Sat",
              "tasks": [
                {
                  "id": "week-10-day-sat-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Mixed medium-hard",
                  "completed": false
                },
                {
                  "id": "week-10-day-sat-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Common leak patterns (static Context refs, listener leaks)",
                  "completed": false
                },
                {
                  "id": "week-10-day-sat-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Run LeakCanary on the capstone; fix any leaks found",
                  "completed": false
                },
                {
                  "id": "week-10-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-10-day-sun",
              "dayOfWeek": "Sun",
              "tasks": [
                {
                  "id": "week-10-day-sun-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Mixed medium-hard",
                  "completed": false
                },
                {
                  "id": "week-10-day-sun-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Reading a heap dump \u2014 retained size, dominator tree",
                  "completed": false
                },
                {
                  "id": "week-10-day-sun-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Write up the leak you fixed in your journal",
                  "completed": false
                },
                {
                  "id": "week-10-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-10-day-mon",
              "dayOfWeek": "Mon",
              "tasks": [
                {
                  "id": "week-10-day-mon-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Mixed medium-hard",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-10-day-tue",
              "dayOfWeek": "Tue",
              "tasks": [
                {
                  "id": "week-10-day-tue-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Mixed medium-hard",
                  "completed": false
                },
                {
                  "id": "week-10-day-tue-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: CPU/memory profiler basics",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-10-day-wed",
              "dayOfWeek": "Wed",
              "tasks": [
                {
                  "id": "week-10-day-wed-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Mixed medium-hard",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-10-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-10-day-thu-dsa",
                  "category": "dsa",
                  "title": "DSA: Timed: 1 problem",
                  "completed": false
                },
                {
                  "id": "week-10-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: ANR causes \u2014 main-thread blocking, StrictMode",
                  "completed": false
                },
                {
                  "id": "week-10-day-thu-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Audit and offload any main-thread-blocking calls",
                  "completed": false
                },
                {
                  "id": "week-10-day-thu-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-10-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-10-day-fri-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: On-device AI \u2014 Gemini Nano / Google AI Edge SDK overview",
                  "completed": false
                },
                {
                  "id": "week-10-day-fri-capstone-part1",
                  "category": "capstone",
                  "title": "Part 1: Capstone Task: Profile app startup; fix one bottleneck",
                  "completed": false
                },
                {
                  "id": "week-10-day-fri-reverse-engineering-part1",
                  "category": "reverse-engineering",
                  "title": "Part 1: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-10-day-fri-capstone-part2",
                  "category": "capstone",
                  "title": "Part 2: Capstone Task: Add a small on-device text-classification/suggestion module",
                  "completed": false
                },
                {
                  "id": "week-10-day-fri-reverse-engineering-part2",
                  "category": "reverse-engineering",
                  "title": "Part 2: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-10-day-fri-mock",
                  "category": "mock",
                  "title": "Mock/Whiteboard: STAR-format answer for \"tell me about a time you diagnosed a performance issue,\" pulled from your journal",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "week-11",
          "weekNumber": 11,
          "theme": "System Design",
          "capstoneMilestone": "Design docs + STAR bank",
          "mockCompleted": false,
          "days": [
            {
              "id": "week-11-day-sat",
              "dayOfWeek": "Sat",
              "tasks": [
                {
                  "id": "week-11-day-sat-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Hard graphs/DP mix",
                  "completed": false
                },
                {
                  "id": "week-11-day-sat-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: System design: real-time messaging (WebSockets, queues, local cache)",
                  "completed": false
                },
                {
                  "id": "week-11-day-sat-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Sketch a design doc extending capstone with a chat feature",
                  "completed": false
                },
                {
                  "id": "week-11-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-11-day-sun",
              "dayOfWeek": "Sun",
              "tasks": [
                {
                  "id": "week-11-day-sun-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Hard problems",
                  "completed": false
                },
                {
                  "id": "week-11-day-sun-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: System design: offline-first news feed (sync, conflict resolution)",
                  "completed": false
                },
                {
                  "id": "week-11-day-sun-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Apply sync improvements to the capstone",
                  "completed": false
                },
                {
                  "id": "week-11-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-11-day-mon",
              "dayOfWeek": "Mon",
              "tasks": [
                {
                  "id": "week-11-day-mon-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Hard problems",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-11-day-tue",
              "dayOfWeek": "Tue",
              "tasks": [
                {
                  "id": "week-11-day-tue-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Hard problems",
                  "completed": false
                },
                {
                  "id": "week-11-day-tue-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Trade-offs: REST vs GraphQL vs WebSockets on mobile",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-11-day-wed",
              "dayOfWeek": "Wed",
              "tasks": [
                {
                  "id": "week-11-day-wed-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Hard problems",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-11-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-11-day-thu-dsa",
                  "category": "dsa",
                  "title": "DSA: Mock system design interview (45 min): \"Design an offline-first note-taking app with sync\"",
                  "completed": false
                },
                {
                  "id": "week-11-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: System design: image-heavy feed (caching, pagination, prefetch)",
                  "completed": false
                },
                {
                  "id": "week-11-day-thu-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Implement Paging 3 for a list screen",
                  "completed": false
                },
                {
                  "id": "week-11-day-thu-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-11-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-11-day-fri-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Compile 5\u20137 STAR stories from your journal (leaks, races, architecture calls)",
                  "completed": false
                },
                {
                  "id": "week-11-day-fri-capstone-part1",
                  "category": "capstone",
                  "title": "Part 1: Capstone Task: Write trade-off notes for your chosen networking approach",
                  "completed": false
                },
                {
                  "id": "week-11-day-fri-reverse-engineering-part1",
                  "category": "reverse-engineering",
                  "title": "Part 1: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-11-day-fri-capstone-part2",
                  "category": "capstone",
                  "title": "Part 2: Capstone Task: Final UI polish \u2014 icon, splash screen",
                  "completed": false
                },
                {
                  "id": "week-11-day-fri-reverse-engineering-part2",
                  "category": "reverse-engineering",
                  "title": "Part 2: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            }
          ]
        },
        {
          "id": "week-12",
          "weekNumber": 12,
          "theme": "**Final Checkpoint**",
          "capstoneMilestone": "Full mock passed, portfolio ready",
          "mockCompleted": false,
          "days": [
            {
              "id": "week-12-day-sat",
              "dayOfWeek": "Sat",
              "tasks": [
                {
                  "id": "week-12-day-sat-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Timed full simulation: 3 problems, 90 min",
                  "completed": false
                },
                {
                  "id": "week-12-day-sat-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Review the weak areas flagged all quarter",
                  "completed": false
                },
                {
                  "id": "week-12-day-sat-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Final bug bash",
                  "completed": false
                },
                {
                  "id": "week-12-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-12-day-sun",
              "dayOfWeek": "Sun",
              "tasks": [
                {
                  "id": "week-12-day-sun-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Timed full simulation",
                  "completed": false
                },
                {
                  "id": "week-12-day-sun-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Polish resume technical bullet points",
                  "completed": false
                },
                {
                  "id": "week-12-day-sun-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Write the capstone case-study (problem \u2192 architecture \u2192 challenges \u2192 results)",
                  "completed": false
                },
                {
                  "id": "week-12-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-12-day-mon",
              "dayOfWeek": "Mon",
              "tasks": [
                {
                  "id": "week-12-day-mon-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Timed full simulation",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-12-day-tue",
              "dayOfWeek": "Tue",
              "tasks": [
                {
                  "id": "week-12-day-tue-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Light review only",
                  "completed": false
                },
                {
                  "id": "week-12-day-tue-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Mock full technical round: DSA + architecture + behavioral (60 min)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-12-day-wed",
              "dayOfWeek": "Wed",
              "tasks": [
                {
                  "id": "week-12-day-wed-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Light review only",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-12-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-12-day-thu-dsa",
                  "category": "dsa",
                  "title": "DSA: Final full mock interview: DSA + Compose/architecture deep dive + system design + behavioral, end to end",
                  "completed": false
                },
                {
                  "id": "week-12-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Mock behavioral round using your STAR stories",
                  "completed": false
                },
                {
                  "id": "week-12-day-thu-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Record a 2\u20133 min demo video",
                  "completed": false
                },
                {
                  "id": "week-12-day-thu-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            },
            {
              "id": "week-12-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-12-day-fri-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Rest your brain \u2014 cheat sheets/one-pagers only",
                  "completed": false
                },
                {
                  "id": "week-12-day-fri-capstone-part1",
                  "category": "capstone",
                  "title": "Part 1: Capstone Task: Final commit, clean history, finalize README",
                  "completed": false
                },
                {
                  "id": "week-12-day-fri-reverse-engineering-part1",
                  "category": "reverse-engineering",
                  "title": "Part 1: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                },
                {
                  "id": "week-12-day-fri-capstone-part2",
                  "category": "capstone",
                  "title": "Part 2: Capstone Task: Final polish pass",
                  "completed": false
                },
                {
                  "id": "week-12-day-fri-reverse-engineering-part2",
                  "category": "reverse-engineering",
                  "title": "Part 2: Reverse-Engineering: Update engineering journal (STAR format)",
                  "completed": false
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
