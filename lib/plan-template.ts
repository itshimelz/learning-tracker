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
          "theme": "Idiomatic Kotlin 2.x & Project Setup",
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
                  "id": "week-1-day-sat-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study or FYP catch-up (1h) \u2014 rotate whichever subject needs it most this week",
                  "completed": false
                },
                {
                  "id": "week-1-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Open a Kotlin file, write `fun twoSum(nums: IntArray, target: Int)` \u2014 just the signature",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Free day \u2014 full prep block (see Sat template)"
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
                  "id": "week-1-day-sun-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP/Thesis independent work (1h) \u2014 weekly self-directed block",
                  "completed": false
                },
                {
                  "id": "week-1-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write one example input/output for today's anagram problem",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Free day \u2014 full prep block (see Sun template)"
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
                },
                {
                  "id": "week-1-day-mon-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Property delegation (`by lazy`, custom delegates)",
                  "completed": false
                },
                {
                  "id": "week-1-day-mon-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Set up multi-module Gradle structure (`:app`, `:core`, `:data`, `:domain`, `:feature-x`)",
                  "completed": false
                },
                {
                  "id": "week-1-day-mon-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (45 min) \u2014 quick consolidation of today's 4 classes",
                  "completed": false
                },
                {
                  "id": "week-1-day-mon-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (15 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Copy today's two-pointer problem into your notes, read it once",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Class 8:30 AM\u20133:00 PM \u2014 compressed evening prep (see Mon template)"
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
                },
                {
                  "id": "week-1-day-tue-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Wire Hilt across the new module graph",
                  "completed": false
                },
                {
                  "id": "week-1-day-tue-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-1-day-tue-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Start the timer, write the problem's name at the top of a blank file",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Class 1:30\u20134:30 PM \u2014 prep split AM/PM (see Tue template)"
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
                },
                {
                  "id": "week-1-day-wed-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Scope functions (`let/run/apply/also/with`) \u2014 when to use which",
                  "completed": false
                },
                {
                  "id": "week-1-day-wed-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Build the Compose Navigation skeleton",
                  "completed": false
                },
                {
                  "id": "week-1-day-wed-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-1-day-wed-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Draw today's grid by hand on paper \u2014 no code yet",
              "reward": "\ud83c\udf3f\ud83d\udeb6 Both \u2014 week-closing reward",
              "blockType": "Class 8:30\u201311:30 AM + Lab 1:30\u20133:30 PM (see Wed template)"
            },
            {
              "id": "week-1-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-1-day-thu-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Timed: 2 medium problems back to back",
                  "completed": false
                },
                {
                  "id": "week-1-day-thu-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Record yourself explaining \"sealed classes vs enums\" out loud for 5 min; log mistakes",
                  "completed": false
                },
                {
                  "id": "week-1-day-thu-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP prep (30 min) \u2014 review before the meeting",
                  "completed": false
                }
              ],
              "startTrigger": "Write today's two problem names down on paper, before anything else",
              "reward": "\ud83c\udf81 Walk 30\u201345 min + a favorite poem",
              "blockType": "FYP meeting 6\u20138:30 PM \u2014 mock day, free until evening (see Thu template)"
            },
            {
              "id": "week-1-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-1-day-fri-rest",
                  "category": "rest",
                  "title": "National holiday, full rest",
                  "completed": false
                }
              ],
              "startTrigger": "No trigger",
              "reward": "Poetry/walk, optional",
              "blockType": "\ud83c\udf89 National holiday \u2014 full rest"
            }
          ]
        },
        {
          "id": "week-2",
          "weekNumber": 2,
          "theme": "Jetpack Compose Fundamentals & State",
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
                  "id": "week-2-day-sat-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study or FYP catch-up (1h) \u2014 rotate whichever subject needs it most this week",
                  "completed": false
                },
                {
                  "id": "week-2-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Open the file, sketch the linked list as boxes-and-arrows",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Free day (see Sat template)"
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
                  "id": "week-2-day-sun-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP/Thesis independent work (1h) \u2014 weekly self-directed block",
                  "completed": false
                },
                {
                  "id": "week-2-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write one real-world example of a \"cycle\" before touching code",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Free day (see Sun template)"
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
                },
                {
                  "id": "week-2-day-mon-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: State hoisting patterns",
                  "completed": false
                },
                {
                  "id": "week-2-day-mon-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Build detail screen + navigation list\u2194detail",
                  "completed": false
                },
                {
                  "id": "week-2-day-mon-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (45 min) \u2014 quick consolidation of today's 4 classes",
                  "completed": false
                },
                {
                  "id": "week-2-day-mon-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (15 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Copy the problem statement into your notes, read it once",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Class 8:30 AM\u20133:00 PM (see Mon template)"
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
                },
                {
                  "id": "week-2-day-tue-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Add loading/error/empty states to both screens",
                  "completed": false
                },
                {
                  "id": "week-2-day-tue-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-2-day-tue-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write the function signature only \u2014 leave the body empty",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Class 1:30\u20134:30 PM (see Tue template)"
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
                },
                {
                  "id": "week-2-day-wed-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: `@Stable` / `@Immutable` \u2014 why stability controls recomposition skipping",
                  "completed": false
                },
                {
                  "id": "week-2-day-wed-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Add a debounced search/filter bar",
                  "completed": false
                },
                {
                  "id": "week-2-day-wed-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-2-day-wed-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write one example array + target on paper before opening the IDE",
              "reward": "\ud83c\udf3f\ud83d\udeb6 Both",
              "blockType": "Class + Lab (see Wed template)"
            },
            {
              "id": "week-2-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-2-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Whiteboard your app's unidirectional data flow like an interviewer asked for it",
                  "completed": false
                },
                {
                  "id": "week-2-day-thu-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Timed: 1 medium problem",
                  "completed": false
                },
                {
                  "id": "week-2-day-thu-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP prep (30 min) \u2014 review before the meeting",
                  "completed": false
                }
              ],
              "startTrigger": "Draw one box on paper: \"data flows from ___ to ___\"",
              "reward": "\ud83c\udf81 Walk 30\u201345 min + a favorite poem",
              "blockType": "FYP meeting 6\u20138:30 PM (see Thu template)"
            },
            {
              "id": "week-2-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-2-day-fri-rest",
                  "category": "rest",
                  "title": "National holiday, full rest",
                  "completed": false
                }
              ],
              "startTrigger": "No trigger",
              "reward": "Poetry/walk, optional",
              "blockType": "\ud83c\udf89 National holiday"
            }
          ]
        },
        {
          "id": "week-3",
          "weekNumber": 3,
          "theme": "Compose Internals & Side Effects",
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
                  "id": "week-3-day-sat-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study or FYP catch-up (1h) \u2014 rotate whichever subject needs it most this week",
                  "completed": false
                },
                {
                  "id": "week-3-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Draw a tiny 4-node tree on paper, label pre/in/post",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Free day (see Sat template)"
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
                  "id": "week-3-day-sun-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP/Thesis independent work (1h) \u2014 weekly self-directed block",
                  "completed": false
                },
                {
                  "id": "week-3-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write the word \"queue\" at the top of your notes",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Free day (see Sun template)"
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
                },
                {
                  "id": "week-3-day-mon-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Pull up the Compose compiler metrics report for your own app",
                  "completed": false
                },
                {
                  "id": "week-3-day-mon-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Fix one unstable parameter flagged by the report",
                  "completed": false
                },
                {
                  "id": "week-3-day-mon-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (45 min) \u2014 quick consolidation of today's 4 classes",
                  "completed": false
                },
                {
                  "id": "week-3-day-mon-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (15 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Open the BST problem, copy just the constraints",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Class 8:30 AM\u20133:00 PM (see Mon template)"
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
                },
                {
                  "id": "week-3-day-tue-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Add coroutine-driven pull-to-refresh",
                  "completed": false
                },
                {
                  "id": "week-3-day-tue-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-3-day-tue-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Sketch today's graph as 4\u20135 dots and lines",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Class 1:30\u20134:30 PM (see Tue template)"
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
                },
                {
                  "id": "week-3-day-wed-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Custom modifiers (light intro)",
                  "completed": false
                },
                {
                  "id": "week-3-day-wed-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Polish transitions with `AnimatedVisibility`/`Crossfade`",
                  "completed": false
                },
                {
                  "id": "week-3-day-wed-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-3-day-wed-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write the start and end node of today's problem",
              "reward": "\ud83c\udf3f\ud83d\udeb6 Both",
              "blockType": "Class + Lab (see Wed template)"
            },
            {
              "id": "week-3-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-3-day-thu-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: 1 DSA problem (30 min)",
                  "completed": false
                },
                {
                  "id": "week-3-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Explain the recomposition deep-dive to a friend/camera (15 min)",
                  "completed": false
                },
                {
                  "id": "week-3-day-thu-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP prep (30 min) \u2014 review before the meeting",
                  "completed": false
                }
              ],
              "startTrigger": "Write one sentence: \"Recomposition happens when ___\"",
              "reward": "\ud83c\udf81 Walk 30\u201345 min + a favorite poem",
              "blockType": "FYP meeting 6\u20138:30 PM (see Thu template)"
            },
            {
              "id": "week-3-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-3-day-fri-rest",
                  "category": "rest",
                  "title": "National holiday, full rest",
                  "completed": false
                }
              ],
              "startTrigger": "No trigger",
              "reward": "Poetry/walk, optional",
              "blockType": "\ud83c\udf89 National holiday"
            }
          ]
        },
        {
          "id": "week-4",
          "weekNumber": 4,
          "theme": "Capstone Consolidation & Month 1 Checkpoint",
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
                  "id": "week-4-day-sat-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study or FYP catch-up (1h) \u2014 rotate whichever subject needs it most this week",
                  "completed": false
                },
                {
                  "id": "week-4-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Open your journal, write the 2 weakest problem names",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Free day (see Sat template)"
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
                  "id": "week-4-day-sun-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP/Thesis independent work (1h) \u2014 weekly self-directed block",
                  "completed": false
                },
                {
                  "id": "week-4-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Open one ViewModel file, write `@Test fun ` with no body",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Free day (see Sun template)"
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
                },
                {
                  "id": "week-4-day-mon-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Revisit any shaky Compose concept",
                  "completed": false
                },
                {
                  "id": "week-4-day-mon-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Clean up module boundaries \u2014 verify `:domain` has zero Android deps",
                  "completed": false
                },
                {
                  "id": "week-4-day-mon-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (45 min) \u2014 quick consolidation of today's 4 classes",
                  "completed": false
                },
                {
                  "id": "week-4-day-mon-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (15 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Open `:domain`'s `build.gradle`, read the dependency list",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Class 8:30 AM\u20133:00 PM (see Mon template)"
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
                },
                {
                  "id": "week-4-day-tue-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Write a short README documenting the architecture so far",
                  "completed": false
                },
                {
                  "id": "week-4-day-tue-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-4-day-tue-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write the README's title and one bullet point",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Class 1:30\u20134:30 PM (see Tue template)"
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
                },
                {
                  "id": "week-4-day-wed-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Buffer day",
                  "completed": false
                },
                {
                  "id": "week-4-day-wed-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Demo the app end-to-end; list 3 bugs/improvements",
                  "completed": false
                },
                {
                  "id": "week-4-day-wed-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-4-day-wed-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Open the app and just look at the first screen",
              "reward": "\ud83c\udf3f\ud83d\udeb6 Both",
              "blockType": "Class + Lab (see Wed template)"
            },
            {
              "id": "week-4-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-4-day-thu-dsa",
                  "category": "mock",
                  "title": "**Month 1 Mock Interview (45 min):** 1 DSA problem + \"walk me through your Compose state management\" + 1 behavioral STAR question",
                  "completed": false
                },
                {
                  "id": "week-4-day-thu-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP prep (30 min) \u2014 review before the meeting",
                  "completed": false
                }
              ],
              "startTrigger": "Write one sentence on what you're most nervous to be asked, then start anyway",
              "reward": "\ud83c\udf89 You closed Month 1 \u2014 enjoy something a little extra tonight",
              "blockType": "FYP meeting 6\u20138:30 PM (see Thu template)"
            },
            {
              "id": "week-4-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-4-day-fri-rest",
                  "category": "rest",
                  "title": "National holiday, full rest",
                  "completed": false
                }
              ],
              "startTrigger": "No trigger",
              "reward": "\ud83c\udf89 **Fully empty day \u2014 no plan at all. You earned it.**",
              "blockType": "\ud83c\udf89 National holiday + Month 1 checkpoint"
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
          "theme": "Coroutines & Structured Concurrency",
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
                  "id": "week-5-day-sat-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study or FYP catch-up (1h) \u2014 rotate whichever subject needs it most this week",
                  "completed": false
                },
                {
                  "id": "week-5-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write out one subset of a 3-element set by hand",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Free day (see Sat template)"
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
                  "id": "week-5-day-sun-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP/Thesis independent work (1h) \u2014 weekly self-directed block",
                  "completed": false
                },
                {
                  "id": "week-5-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write `withContext(Dispatchers.IO) { }` with an empty body",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Free day (see Sun template)"
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
                },
                {
                  "id": "week-5-day-mon-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Structured concurrency \u2014 job hierarchy & cancellation",
                  "completed": false
                },
                {
                  "id": "week-5-day-mon-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Add cancellation-safe loading (cancel on screen leave)",
                  "completed": false
                },
                {
                  "id": "week-5-day-mon-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (45 min) \u2014 quick consolidation of today's 4 classes",
                  "completed": false
                },
                {
                  "id": "week-5-day-mon-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (15 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write `f(1)=1, f(2)=2` on paper before opening the IDE",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Class 8:30 AM\u20133:00 PM (see Mon template)"
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
                },
                {
                  "id": "week-5-day-tue-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Run parallel API calls (e.g. user + settings) under a supervisor scope",
                  "completed": false
                },
                {
                  "id": "week-5-day-tue-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-5-day-tue-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Open the array problem, write its length and one boundary case",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Class 1:30\u20134:30 PM (see Tue template)"
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
                },
                {
                  "id": "week-5-day-wed-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Exception handling in coroutines (`CoroutineExceptionHandler`)",
                  "completed": false
                },
                {
                  "id": "week-5-day-wed-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Add error handling/retry to the network layer",
                  "completed": false
                },
                {
                  "id": "week-5-day-wed-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-5-day-wed-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Draw today's grid's dimensions only",
              "reward": "\ud83c\udf3f\ud83d\udeb6 Both",
              "blockType": "Class + Lab (see Wed template)"
            },
            {
              "id": "week-5-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-5-day-thu-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Timed: 1 medium problem",
                  "completed": false
                },
                {
                  "id": "week-5-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Explain structured concurrency to an imaginary junior dev (record it)",
                  "completed": false
                },
                {
                  "id": "week-5-day-thu-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP prep (30 min) \u2014 review before the meeting",
                  "completed": false
                }
              ],
              "startTrigger": "Write one line: \"Structured concurrency means ___\"",
              "reward": "\ud83c\udf81 Walk 30\u201345 min + a favorite poem",
              "blockType": "FYP meeting 6\u20138:30 PM (see Thu template)"
            },
            {
              "id": "week-5-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-5-day-fri-rest",
                  "category": "rest",
                  "title": "National holiday, full rest",
                  "completed": false
                }
              ],
              "startTrigger": "No trigger",
              "reward": "Poetry/walk, optional",
              "blockType": "\ud83c\udf89 National holiday"
            }
          ]
        },
        {
          "id": "week-6",
          "weekNumber": 6,
          "theme": "Flow, StateFlow, SharedFlow & Data Pipelines",
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
                  "id": "week-6-day-sat-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study or FYP catch-up (1h) \u2014 rotate whichever subject needs it most this week",
                  "completed": false
                },
                {
                  "id": "week-6-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write the knapsack's weight/value pair for item 1 only",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Free day (see Sat template)"
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
                  "id": "week-6-day-sun-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP/Thesis independent work (1h) \u2014 weekly self-directed block",
                  "completed": false
                },
                {
                  "id": "week-6-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write `private val _state = MutableStateFlow(` and stop",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Free day (see Sun template)"
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
                },
                {
                  "id": "week-6-day-mon-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: `SharedFlow` \u2014 one-off events",
                  "completed": false
                },
                {
                  "id": "week-6-day-mon-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Implement a one-time event channel (snackbars/navigation)",
                  "completed": false
                },
                {
                  "id": "week-6-day-mon-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (45 min) \u2014 quick consolidation of today's 4 classes",
                  "completed": false
                },
                {
                  "id": "week-6-day-mon-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (15 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write today's first two intervals on paper",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Class 8:30 AM\u20133:00 PM (see Mon template)"
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
                },
                {
                  "id": "week-6-day-tue-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Build a debounced search via channel",
                  "completed": false
                },
                {
                  "id": "week-6-day-tue-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-6-day-tue-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Draw a 5-element array, mark the smallest one",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Class 1:30\u20134:30 PM (see Tue template)"
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
                },
                {
                  "id": "week-6-day-wed-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Flow operators: `map`, `combine`, `flatMapLatest`, `debounce`",
                  "completed": false
                },
                {
                  "id": "week-6-day-wed-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Combine search query + filter state into one UI stream",
                  "completed": false
                },
                {
                  "id": "week-6-day-wed-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-6-day-wed-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write \"top-K means I keep the ___\" and fill the blank",
              "reward": "\ud83c\udf3f\ud83d\udeb6 Both",
              "blockType": "Class + Lab (see Wed template)"
            },
            {
              "id": "week-6-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-6-day-thu-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Timed: 1 problem",
                  "completed": false
                },
                {
                  "id": "week-6-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Whiteboard: \"StateFlow vs SharedFlow vs Channel \u2014 when would you use each?\"",
                  "completed": false
                },
                {
                  "id": "week-6-day-thu-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP prep (30 min) \u2014 review before the meeting",
                  "completed": false
                }
              ],
              "startTrigger": "Write the three names in a column, leave \"when\" blank for now",
              "reward": "\ud83c\udf81 Walk 30\u201345 min + a favorite poem",
              "blockType": "FYP meeting 6\u20138:30 PM (see Thu template)"
            },
            {
              "id": "week-6-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-6-day-fri-rest",
                  "category": "rest",
                  "title": "National holiday, full rest",
                  "completed": false
                }
              ],
              "startTrigger": "No trigger",
              "reward": "Poetry/walk, optional",
              "blockType": "\ud83c\udf89 National holiday"
            }
          ]
        },
        {
          "id": "week-7",
          "weekNumber": 7,
          "theme": "Layered Architecture & Dependency Injection",
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
                  "id": "week-7-day-sat-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study or FYP catch-up (1h) \u2014 rotate whichever subject needs it most this week",
                  "completed": false
                },
                {
                  "id": "week-7-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Draw the root node of a trie with two children",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Free day (see Sat template)"
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
                  "id": "week-7-day-sun-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP/Thesis independent work (1h) \u2014 weekly self-directed block",
                  "completed": false
                },
                {
                  "id": "week-7-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write `interface ___Repository {` and stop",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Free day (see Sun template)"
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
                },
                {
                  "id": "week-7-day-mon-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: MVVM vs MVI trade-offs",
                  "completed": false
                },
                {
                  "id": "week-7-day-mon-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Refactor one screen to strict intent/state/effect MVI",
                  "completed": false
                },
                {
                  "id": "week-7-day-mon-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (45 min) \u2014 quick consolidation of today's 4 classes",
                  "completed": false
                },
                {
                  "id": "week-7-day-mon-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (15 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write today's matrix's dimensions only",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Class 8:30 AM\u20133:00 PM (see Mon template)"
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
                },
                {
                  "id": "week-7-day-tue-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Audit and clean the Hilt graph",
                  "completed": false
                },
                {
                  "id": "week-7-day-tue-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-7-day-tue-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write one example palindrome and one non-palindrome string",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Class 1:30\u20134:30 PM (see Tue template)"
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
                },
                {
                  "id": "week-7-day-wed-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Offline-first caching strategy",
                  "completed": false
                },
                {
                  "id": "week-7-day-wed-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Implement offline-first sync for one feature",
                  "completed": false
                },
                {
                  "id": "week-7-day-wed-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-7-day-wed-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write the pattern string and the text string you'll search",
              "reward": "\ud83c\udf3f\ud83d\udeb6 Both",
              "blockType": "Class + Lab (see Wed template)"
            },
            {
              "id": "week-7-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-7-day-thu-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Timed: 1 problem",
                  "completed": false
                },
                {
                  "id": "week-7-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: **Mock:** \"Design an offline-first news feed app\" (30 min verbal/whiteboard)",
                  "completed": false
                },
                {
                  "id": "week-7-day-thu-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP prep (30 min) \u2014 review before the meeting",
                  "completed": false
                }
              ],
              "startTrigger": "Write: \"Users should be able to read the feed even when ___\"",
              "reward": "\ud83c\udf81 Walk 30\u201345 min + a favorite poem",
              "blockType": "FYP meeting 6\u20138:30 PM (see Thu template)"
            },
            {
              "id": "week-7-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-7-day-fri-rest",
                  "category": "rest",
                  "title": "National holiday, full rest",
                  "completed": false
                }
              ],
              "startTrigger": "No trigger",
              "reward": "Poetry/walk, optional",
              "blockType": "\ud83c\udf89 National holiday"
            }
          ]
        },
        {
          "id": "week-8",
          "weekNumber": 8,
          "theme": "KMP Integration & Month 2 Checkpoint",
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
                  "id": "week-8-day-sat-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study or FYP catch-up (1h) \u2014 rotate whichever subject needs it most this week",
                  "completed": false
                },
                {
                  "id": "week-8-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write one data class name you'll move into the shared module",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Free day (see Sat template)"
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
                  "id": "week-8-day-sun-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP/Thesis independent work (1h) \u2014 weekly self-directed block",
                  "completed": false
                },
                {
                  "id": "week-8-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Open the Ktor docs homepage, read the first paragraph only",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Free day (see Sun template)"
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
                },
                {
                  "id": "week-8-day-mon-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Koin vs Hilt \u2014 why Koin for KMP",
                  "completed": false
                },
                {
                  "id": "week-8-day-mon-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Wire Koin into the shared module",
                  "completed": false
                },
                {
                  "id": "week-8-day-mon-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (45 min) \u2014 quick consolidation of today's 4 classes",
                  "completed": false
                },
                {
                  "id": "week-8-day-mon-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (15 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write \"Koin vs Hilt:\" and one word under each",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Class 8:30 AM\u20133:00 PM (see Mon template)"
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
                },
                {
                  "id": "week-8-day-tue-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Document a full data-flow diagram for the app",
                  "completed": false
                },
                {
                  "id": "week-8-day-tue-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-8-day-tue-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Draw one box labeled \"UI\" on paper",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Class 1:30\u20134:30 PM (see Tue template)"
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
                },
                {
                  "id": "week-8-day-wed-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Buffer/catch-up day",
                  "completed": false
                },
                {
                  "id": "week-8-day-wed-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: End-to-end test run; fix integration bugs",
                  "completed": false
                },
                {
                  "id": "week-8-day-wed-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-8-day-wed-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Run the app once, just watch what happens",
              "reward": "\ud83c\udf3f\ud83d\udeb6 Both",
              "blockType": "Class + Lab (see Wed template)"
            },
            {
              "id": "week-8-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-8-day-thu-dsa",
                  "category": "mock",
                  "title": "**Month 2 Mock Interview (45 min):** medium-hard DSA + \"explain your layered architecture and why KMP\" + STAR on a technical disagreement",
                  "completed": false
                },
                {
                  "id": "week-8-day-thu-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP prep (30 min) \u2014 review before the meeting",
                  "completed": false
                }
              ],
              "startTrigger": "Write the disagreement story you'll tell, in one sentence",
              "reward": "\ud83c\udf89 You closed Month 2 \u2014 enjoy something extra tonight",
              "blockType": "FYP meeting 6\u20138:30 PM (see Thu template)"
            },
            {
              "id": "week-8-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-8-day-fri-rest",
                  "category": "rest",
                  "title": "National holiday, full rest",
                  "completed": false
                }
              ],
              "startTrigger": "No trigger",
              "reward": "\ud83c\udf89 **Fully empty day \u2014 no plan at all. You earned it.**",
              "blockType": "\ud83c\udf89 National holiday + Month 2 checkpoint"
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
          "theme": "Testing Strategy",
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
                  "id": "week-9-day-sat-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study or FYP catch-up (1h) \u2014 rotate whichever subject needs it most this week",
                  "completed": false
                },
                {
                  "id": "week-9-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write \"Arrange / Act / Assert\" as comments in a blank test file",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Free day (see Sat template)"
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
                  "id": "week-9-day-sun-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP/Thesis independent work (1h) \u2014 weekly self-directed block",
                  "completed": false
                },
                {
                  "id": "week-9-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write `mockk<` and stop, just to see the type hints",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Free day (see Sun template)"
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
                },
                {
                  "id": "week-9-day-mon-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Testing coroutines \u2014 `runTest`, `StandardTestDispatcher`",
                  "completed": false
                },
                {
                  "id": "week-9-day-mon-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Test loading/success/error states in a ViewModel",
                  "completed": false
                },
                {
                  "id": "week-9-day-mon-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (45 min) \u2014 quick consolidation of today's 4 classes",
                  "completed": false
                },
                {
                  "id": "week-9-day-mon-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (15 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write `runTest { }` with nothing inside yet",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Class 8:30 AM\u20133:00 PM (see Mon template)"
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
                },
                {
                  "id": "week-9-day-tue-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Test the debounced search flow from Week 6",
                  "completed": false
                },
                {
                  "id": "week-9-day-tue-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-9-day-tue-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write the debounce delay value at the top of the test file",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Class 1:30\u20134:30 PM (see Tue template)"
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
                },
                {
                  "id": "week-9-day-wed-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Compose UI testing \u2014 `createComposeRule`, semantics finders",
                  "completed": false
                },
                {
                  "id": "week-9-day-wed-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Write 2\u20133 Compose UI tests for critical screens",
                  "completed": false
                },
                {
                  "id": "week-9-day-wed-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-9-day-wed-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write `composeTestRule.onNodeWithText(\"` and stop",
              "reward": "\ud83c\udf3f\ud83d\udeb6 Both",
              "blockType": "Class + Lab (see Wed template)"
            },
            {
              "id": "week-9-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-9-day-thu-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Timed: 1 problem",
                  "completed": false
                },
                {
                  "id": "week-9-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Explain your testing pyramid as if asked \"how do you ensure code quality?\"",
                  "completed": false
                },
                {
                  "id": "week-9-day-thu-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP prep (30 min) \u2014 review before the meeting",
                  "completed": false
                }
              ],
              "startTrigger": "Draw a small triangle and label its three layers",
              "reward": "\ud83c\udf81 Walk 30\u201345 min + a favorite poem",
              "blockType": "FYP meeting 6\u20138:30 PM (see Thu template)"
            },
            {
              "id": "week-9-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-9-day-fri-rest",
                  "category": "rest",
                  "title": "National holiday, full rest",
                  "completed": false
                }
              ],
              "startTrigger": "No trigger",
              "reward": "Poetry/walk, optional",
              "blockType": "\ud83c\udf89 National holiday"
            }
          ]
        },
        {
          "id": "week-10",
          "weekNumber": 10,
          "theme": "System Diagnostics & On-Device AI Module",
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
                  "id": "week-10-day-sat-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study or FYP catch-up (1h) \u2014 rotate whichever subject needs it most this week",
                  "completed": false
                },
                {
                  "id": "week-10-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Open LeakCanary's dashboard, just look at it once",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Free day (see Sat template)"
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
                  "id": "week-10-day-sun-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP/Thesis independent work (1h) \u2014 weekly self-directed block",
                  "completed": false
                },
                {
                  "id": "week-10-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Open your journal, write yesterday's leak's name as a heading",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Free day (see Sun template)"
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
                },
                {
                  "id": "week-10-day-mon-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: ANR causes \u2014 main-thread blocking, StrictMode",
                  "completed": false
                },
                {
                  "id": "week-10-day-mon-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Audit and offload any main-thread-blocking calls",
                  "completed": false
                },
                {
                  "id": "week-10-day-mon-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (45 min) \u2014 quick consolidation of today's 4 classes",
                  "completed": false
                },
                {
                  "id": "week-10-day-mon-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (15 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Enable StrictMode, run the app once to see what fires",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Class 8:30 AM\u20133:00 PM (see Mon template)"
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
                },
                {
                  "id": "week-10-day-tue-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Profile app startup; fix one bottleneck",
                  "completed": false
                },
                {
                  "id": "week-10-day-tue-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-10-day-tue-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Open the profiler, record one cold start, stop there",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Class 1:30\u20134:30 PM (see Tue template)"
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
                },
                {
                  "id": "week-10-day-wed-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: On-device AI \u2014 Gemini Nano / Google AI Edge SDK overview",
                  "completed": false
                },
                {
                  "id": "week-10-day-wed-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Add a small on-device text-classification/suggestion module",
                  "completed": false
                },
                {
                  "id": "week-10-day-wed-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-10-day-wed-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Read the SDK overview page's first two paragraphs",
              "reward": "\ud83c\udf3f\ud83d\udeb6 Both",
              "blockType": "Class + Lab (see Wed template)"
            },
            {
              "id": "week-10-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-10-day-thu-dsa",
                  "category": "dsa",
                  "title": "DSA Focus: Timed: 1 problem",
                  "completed": false
                },
                {
                  "id": "week-10-day-thu-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: STAR-format answer for \"tell me about a time you diagnosed a performance issue,\" pulled from your journal",
                  "completed": false
                },
                {
                  "id": "week-10-day-thu-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP prep (30 min) \u2014 review before the meeting",
                  "completed": false
                }
              ],
              "startTrigger": "Write the \"Situation\" line of that STAR story only",
              "reward": "\ud83c\udf81 Walk 30\u201345 min + a favorite poem",
              "blockType": "FYP meeting 6\u20138:30 PM (see Thu template)"
            },
            {
              "id": "week-10-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-10-day-fri-rest",
                  "category": "rest",
                  "title": "National holiday, full rest",
                  "completed": false
                }
              ],
              "startTrigger": "No trigger",
              "reward": "Poetry/walk, optional",
              "blockType": "\ud83c\udf89 National holiday"
            }
          ]
        },
        {
          "id": "week-11",
          "weekNumber": 11,
          "theme": "System Design & Behavioral Depth",
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
                  "id": "week-11-day-sat-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study or FYP catch-up (1h) \u2014 rotate whichever subject needs it most this week",
                  "completed": false
                },
                {
                  "id": "week-11-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Draw one box \"client\" and one \"server,\" connect them",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Free day (see Sat template)"
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
                  "id": "week-11-day-sun-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP/Thesis independent work (1h) \u2014 weekly self-directed block",
                  "completed": false
                },
                {
                  "id": "week-11-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write the one conflict scenario you're most unsure about",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Free day (see Sun template)"
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
                },
                {
                  "id": "week-11-day-mon-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: System design: image-heavy feed (caching, pagination, prefetch)",
                  "completed": false
                },
                {
                  "id": "week-11-day-mon-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Implement Paging 3 for a list screen",
                  "completed": false
                },
                {
                  "id": "week-11-day-mon-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (45 min) \u2014 quick consolidation of today's 4 classes",
                  "completed": false
                },
                {
                  "id": "week-11-day-mon-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (15 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write `PagingSource<` and stop, just to see the signature",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Class 8:30 AM\u20133:00 PM (see Mon template)"
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
                },
                {
                  "id": "week-11-day-tue-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Write trade-off notes for your chosen networking approach",
                  "completed": false
                },
                {
                  "id": "week-11-day-tue-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-11-day-tue-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write the three names in a column, nothing under them yet",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Class 1:30\u20134:30 PM (see Tue template)"
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
                },
                {
                  "id": "week-11-day-wed-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Compile 5\u20137 STAR stories from your journal (leaks, races, architecture calls)",
                  "completed": false
                },
                {
                  "id": "week-11-day-wed-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Final UI polish \u2014 icon, splash screen",
                  "completed": false
                },
                {
                  "id": "week-11-day-wed-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-11-day-wed-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Open your journal, count how many STAR-worthy entries you have",
              "reward": "\ud83c\udf3f\ud83d\udeb6 Both",
              "blockType": "Class + Lab (see Wed template)"
            },
            {
              "id": "week-11-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-11-day-thu-dsa",
                  "category": "mock",
                  "title": "**Mock system design interview (45 min):** \"Design an offline-first note-taking app with sync\"",
                  "completed": false
                },
                {
                  "id": "week-11-day-thu-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP prep (30 min) \u2014 review before the meeting",
                  "completed": false
                }
              ],
              "startTrigger": "Write: \"Notes must be editable even when ___\"",
              "reward": "\ud83c\udf81 Walk 30\u201345 min + a favorite poem",
              "blockType": "FYP meeting 6\u20138:30 PM (see Thu template)"
            },
            {
              "id": "week-11-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-11-day-fri-rest",
                  "category": "rest",
                  "title": "National holiday, full rest",
                  "completed": false
                }
              ],
              "startTrigger": "No trigger",
              "reward": "Poetry/walk, optional",
              "blockType": "\ud83c\udf89 National holiday"
            }
          ]
        },
        {
          "id": "week-12",
          "weekNumber": 12,
          "theme": "Final Mock Interviews & Portfolio Polish",
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
                  "id": "week-12-day-sat-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study or FYP catch-up (1h) \u2014 rotate whichever subject needs it most this week",
                  "completed": false
                },
                {
                  "id": "week-12-day-sat-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Open your journal's weak-areas list, read it once",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Free day (see Sat template)"
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
                  "id": "week-12-day-sun-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP/Thesis independent work (1h) \u2014 weekly self-directed block",
                  "completed": false
                },
                {
                  "id": "week-12-day-sun-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Write the case-study's title and \"Problem:\" as a heading",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Free day (see Sun template)"
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
                },
                {
                  "id": "week-12-day-mon-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Mock behavioral round using your STAR stories",
                  "completed": false
                },
                {
                  "id": "week-12-day-mon-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Record a 2\u20133 min demo video",
                  "completed": false
                },
                {
                  "id": "week-12-day-mon-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (45 min) \u2014 quick consolidation of today's 4 classes",
                  "completed": false
                },
                {
                  "id": "week-12-day-mon-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (15 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Open the camera app, frame the first shot, don't record yet",
              "reward": "\ud83c\udf3f Poetry 15 min",
              "blockType": "Class 8:30 AM\u20133:00 PM (see Mon template)"
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
                },
                {
                  "id": "week-12-day-tue-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Final commit, clean history, finalize README",
                  "completed": false
                },
                {
                  "id": "week-12-day-tue-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-12-day-tue-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Open the README, read your own Week 4 version of it",
              "reward": "\ud83d\udeb6 Walk 20\u201330 min",
              "blockType": "Class 1:30\u20134:30 PM (see Tue template)"
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
                },
                {
                  "id": "week-12-day-wed-deep-dive",
                  "category": "deep-dive",
                  "title": "Deep Dive: Rest your brain \u2014 cheat sheets/one-pagers only",
                  "completed": false
                },
                {
                  "id": "week-12-day-wed-capstone",
                  "category": "capstone",
                  "title": "Capstone Task: Final polish pass",
                  "completed": false
                },
                {
                  "id": "week-12-day-wed-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 Course Study/Review (30 min)",
                  "completed": false
                },
                {
                  "id": "week-12-day-wed-reverse-engineering",
                  "category": "reverse-engineering",
                  "title": "Reverse-Engineering: Update engineering journal (STAR format) (30 min)",
                  "completed": false
                }
              ],
              "startTrigger": "Open the app once, just look at the home screen",
              "reward": "\ud83c\udf3f\ud83d\udeb6 Both",
              "blockType": "Class + Lab (see Wed template)"
            },
            {
              "id": "week-12-day-thu",
              "dayOfWeek": "Thu",
              "tasks": [
                {
                  "id": "week-12-day-thu-dsa",
                  "category": "mock",
                  "title": "**Final full mock interview:** DSA + Compose/architecture deep dive + system design + behavioral, end to end",
                  "completed": false
                },
                {
                  "id": "week-12-day-thu-course-study",
                  "category": "course-study",
                  "title": "\ud83c\udf93 FYP prep (30 min) \u2014 review before the meeting",
                  "completed": false
                }
              ],
              "startTrigger": "Write: \"Twelve weeks ago I couldn't ___\" before you start",
              "reward": "\ud83c\udf89 The biggest reward of the quarter",
              "blockType": "FYP meeting 6\u20138:30 PM (see Thu template)"
            },
            {
              "id": "week-12-day-fri",
              "dayOfWeek": "Fri",
              "tasks": [
                {
                  "id": "week-12-day-fri-rest",
                  "category": "rest",
                  "title": "National holiday, full rest",
                  "completed": false
                }
              ],
              "startTrigger": "No trigger",
              "reward": "\ud83c\udf89\ud83c\udfc6 **Fully empty day \u2014 no plan at all. Twelve weeks done.**",
              "blockType": "\ud83c\udf89 National holiday + final checkpoint"
            }
          ]
        }
      ]
    }
  ]
};
