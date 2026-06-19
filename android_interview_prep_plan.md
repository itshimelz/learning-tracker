# Android Developer Interview Prep — 12-Week Detailed Plan

A day-by-day execution plan built on top of the 3-month blueprint, so you never have to ask "what do I actually do today?"

## How to Read This Plan

Every weekday follows the same 4.5-hour skeleton:

| Block | Time | What it's for |
|---|---|---|
| **1. Problem Solving (DSA)** | 45 min | One problem, written in clean Kotlin, timed |
| **2. Core Deep Dive** | 1h 15m | Theory/internals reading + notes on *why*, not just *how* |
| **3. Capstone Build** | 2h | The one production-grade app you build all quarter |
| **4. Reverse-Engineering** | 30 min | Turn today's work into a STAR-format interview answer in your journal |

**Saturdays** are mock-interview/whiteboard days. **Sundays** are rest or light-review only — no new material. Keep a running **"Engineering Journal"** (a doc or notes app) where every bug, leak, or race condition gets logged with: what broke → how you found it → how you fixed it. This becomes your behavioral-question ammunition in Month 3.

---

## MONTH 1 — Kotlin Mastery & Compose Internals

### Week 1: Idiomatic Kotlin 2.x & Project Setup

| Day | DSA Focus | Deep Dive | Capstone Task |
|---|---|---|---|
| Mon | Two Sum & HashMap variants | Sealed classes/interfaces, exhaustive `when` | Pick your capstone app idea, scope a feature list, init the repo |
| Tue | Valid Anagram / Group Anagrams | Generics, variance (`in`/`out`), reified type params | Define core domain models (data classes, sealed `Result` types) |
| Wed | Two-pointer on sorted arrays | Property delegation (`by lazy`, custom delegates) | Set up multi-module Gradle structure (`:app`, `:core`, `:data`, `:domain`, `:feature-x`) |
| Thu | Sliding window (longest substring) | Inline/value classes, how K2 optimizes bytecode | Wire Hilt across the new module graph |
| Fri | Intro BFS on a grid | Scope functions (`let/run/apply/also/with`) — when to use which | Build the Compose Navigation skeleton |
| **Sat** | Timed: 2 medium problems back to back | — | Record yourself explaining "sealed classes vs enums" out loud for 5 min; log mistakes |
| **Sun** | Rest — re-skim the week's notes only | | |

### Week 2: Jetpack Compose Fundamentals & State

| Day | DSA Focus | Deep Dive | Capstone Task |
|---|---|---|---|
| Mon | Reverse a linked list | Composable functions, recomposition basics | Build the first screen UI with static data |
| Tue | Linked list cycle detection | `remember` vs `rememberSaveable` | Add ViewModel + `UiState` data class for that screen |
| Wed | Valid Parentheses (stack) | State hoisting patterns | Build detail screen + navigation list↔detail |
| Thu | Queue/Deque problems | `derivedStateOf` and its performance cost | Add loading/error/empty states to both screens |
| Fri | Binary search variants | `@Stable` / `@Immutable` — why stability controls recomposition skipping | Add a debounced search/filter bar |
| **Sat** | — | Whiteboard your app's unidirectional data flow like an interviewer asked for it | Timed: 1 medium problem |
| **Sun** | Rest | | |

### Week 3: Compose Internals & Side Effects

| Day | DSA Focus | Deep Dive | Capstone Task |
|---|---|---|---|
| Mon | Tree traversal (pre/in/post-order) | The Snapshot system — how Compose tracks state reads | Add `LaunchedEffect` for initial data load |
| Tue | Tree level-order (BFS) | `SideEffect` vs `DisposableEffect` | Hook up a lifecycle-aware connectivity observer |
| Wed | Validate a BST | Pull up the Compose compiler metrics report for your own app | Fix one unstable parameter flagged by the report |
| Thu | Graph DFS — connected components | `produceState`, `rememberCoroutineScope` | Add coroutine-driven pull-to-refresh |
| Fri | Graph BFS — shortest path | Custom modifiers (light intro) | Polish transitions with `AnimatedVisibility`/`Crossfade` |
| **Sat** | 1 DSA problem (30 min) | Explain the recomposition deep-dive to a friend/camera (15 min) | |
| **Sun** | Rest | | |

### Week 4: Capstone Consolidation & Month 1 Checkpoint

| Day | DSA Focus | Deep Dive | Capstone Task |
|---|---|---|---|
| Mon | Revisit 2 weak problems from Weeks 1–3 | Re-read your sealed-class/state notes, fill gaps | Refactor Week 1–3 code for idiomatic Kotlin |
| Tue | Mixed review | Read remaining sections of the official Compose performance guide | Add intro-level unit tests for ViewModel logic |
| Wed | Mixed review | Revisit any shaky Compose concept | Clean up module boundaries — verify `:domain` has zero Android deps |
| Thu | Mixed review | Skim Kotlin 2.x release notes | Write a short README documenting the architecture so far |
| Fri | Timed: 2 problems | Buffer day | Demo the app end-to-end; list 3 bugs/improvements |
| **Sat** | **Month 1 Mock Interview (45 min):** 1 DSA problem + "walk me through your Compose state management" + 1 behavioral STAR question | | |
| **Sun** | Rest — reflect on Month 1 in your journal | | |

---

## MONTH 2 — Concurrency, Data & Architecture

### Week 5: Coroutines & Structured Concurrency

| Day | DSA Focus | Deep Dive | Capstone Task |
|---|---|---|---|
| Mon | Backtracking — subsets/permutations | `launch` vs `async`, `CoroutineScope` basics | Convert one network call to a suspend function (Retrofit) |
| Tue | Backtracking — combinations | Dispatchers (`Main`/`IO`/`Default`) — when to switch | Move DB/network calls to `Dispatchers.IO` |
| Wed | DP intro — climbing stairs, Fibonacci | Structured concurrency — job hierarchy & cancellation | Add cancellation-safe loading (cancel on screen leave) |
| Thu | DP — 1D array problems | `SupervisorJob` vs `Job` — isolating failures | Run parallel API calls (e.g. user + settings) under a supervisor scope |
| Fri | DP — 2D grid problems | Exception handling in coroutines (`CoroutineExceptionHandler`) | Add error handling/retry to the network layer |
| **Sat** | Timed: 1 medium problem | Explain structured concurrency to an imaginary junior dev (record it) | |
| **Sun** | Rest | | |

### Week 6: Flow, StateFlow, SharedFlow & Data Pipelines

| Day | DSA Focus | Deep Dive | Capstone Task |
|---|---|---|---|
| Mon | DP — knapsack-style | Cold vs hot streams, `Flow` builders | Convert Room DAO queries to return `Flow` |
| Tue | Greedy algorithms | `StateFlow` — state preservation, `stateIn` | Expose ViewModel UI state as `StateFlow` |
| Wed | Greedy — interval scheduling | `SharedFlow` — one-off events | Implement a one-time event channel (snackbars/navigation) |
| Thu | Heap/Priority Queue | `Channels` — unicast vs broadcast, buffering | Build a debounced search via channel |
| Fri | Heap — top-K problems | Flow operators: `map`, `combine`, `flatMapLatest`, `debounce` | Combine search query + filter state into one UI stream |
| **Sat** | Timed: 1 problem | Whiteboard: "StateFlow vs SharedFlow vs Channel — when would you use each?" | |
| **Sun** | Rest | | |

### Week 7: Layered Architecture & Dependency Injection

| Day | DSA Focus | Deep Dive | Capstone Task |
|---|---|---|---|
| Mon | Trie problems | Clean Architecture layers (official Android guide) | Extract Use Cases into `:domain` for one feature |
| Tue | Union-Find basics | Repository pattern — single source of truth | Build Repository interface + impl over Room/Retrofit |
| Wed | Matrix traversal | MVVM vs MVI trade-offs | Refactor one screen to strict intent/state/effect MVI |
| Thu | Palindrome problems | Hilt scopes (`@Singleton`, `@ViewModelScoped`), bindings | Audit and clean the Hilt graph |
| Fri | String matching (conceptual KMP/Rabin-Karp) | Offline-first caching strategy | Implement offline-first sync for one feature |
| **Sat** | Timed: 1 problem | **Mock:** "Design an offline-first news feed app" (30 min verbal/whiteboard) | |
| **Sun** | Rest | | |

### Week 8: KMP Integration & Month 2 Checkpoint

| Day | DSA Focus | Deep Dive | Capstone Task |
|---|---|---|---|
| Mon | Mixed review | KMP basics — `expect`/`actual`, shared module setup | Create a KMP shared module for core data models |
| Tue | Mixed review | KMP networking with Ktor Client | Move one repository's network layer into the shared module |
| Wed | Mixed review | Koin vs Hilt — why Koin for KMP | Wire Koin into the shared module |
| Thu | Mixed review | Read Google's layered-architecture guide end-to-end | Document a full data-flow diagram for the app |
| Fri | Timed: 2 problems | Buffer/catch-up day | End-to-end test run; fix integration bugs |
| **Sat** | **Month 2 Mock Interview (45 min):** medium-hard DSA + "explain your layered architecture and why KMP" + STAR on a technical disagreement | | |
| **Sun** | Rest — reflect on Month 2 | | |

---

## MONTH 3 — Testing, Diagnostics, System Design & Interview Readiness

### Week 9: Testing Strategy

| Day | DSA Focus | Deep Dive | Capstone Task |
|---|---|---|---|
| Mon | Mixed mediums | JUnit 5 fundamentals (Arrange-Act-Assert) | Write first unit tests for a Repository class |
| Tue | Mixed mediums | MockK — relaxed mocks, `verify` | Mock dependencies in ViewModel tests |
| Wed | Mixed mediums | Testing coroutines — `runTest`, `StandardTestDispatcher` | Test loading/success/error states in a ViewModel |
| Thu | Mixed mediums | `advanceTimeBy()` / `advanceUntilIdle()` | Test the debounced search flow from Week 6 |
| Fri | Mixed mediums | Compose UI testing — `createComposeRule`, semantics finders | Write 2–3 Compose UI tests for critical screens |
| **Sat** | Timed: 1 problem | Explain your testing pyramid as if asked "how do you ensure code quality?" | |
| **Sun** | Rest | | |

### Week 10: System Diagnostics & On-Device AI Module

| Day | DSA Focus | Deep Dive | Capstone Task |
|---|---|---|---|
| Mon | Mixed medium-hard | Common leak patterns (static Context refs, listener leaks) | Run LeakCanary on the capstone; fix any leaks found |
| Tue | Mixed medium-hard | Reading a heap dump — retained size, dominator tree | Write up the leak you fixed in your journal |
| Wed | Mixed medium-hard | ANR causes — main-thread blocking, StrictMode | Audit and offload any main-thread-blocking calls |
| Thu | Mixed medium-hard | CPU/memory profiler basics | Profile app startup; fix one bottleneck |
| Fri | Mixed medium-hard | On-device AI — Gemini Nano / Google AI Edge SDK overview | Add a small on-device text-classification/suggestion module |
| **Sat** | Timed: 1 problem | STAR-format answer for "tell me about a time you diagnosed a performance issue," pulled from your journal | |
| **Sun** | Rest | | |

### Week 11: System Design & Behavioral Depth

| Day | DSA Focus | Deep Dive | Capstone Task |
|---|---|---|---|
| Mon | Hard graphs/DP mix | System design: real-time messaging (WebSockets, queues, local cache) | Sketch a design doc extending capstone with a chat feature |
| Tue | Hard problems | System design: offline-first news feed (sync, conflict resolution) | Apply sync improvements to the capstone |
| Wed | Hard problems | System design: image-heavy feed (caching, pagination, prefetch) | Implement Paging 3 for a list screen |
| Thu | Hard problems | Trade-offs: REST vs GraphQL vs WebSockets on mobile | Write trade-off notes for your chosen networking approach |
| Fri | Hard problems | Compile 5–7 STAR stories from your journal (leaks, races, architecture calls) | Final UI polish — icon, splash screen |
| **Sat** | **Mock system design interview (45 min):** "Design an offline-first note-taking app with sync" | | |
| **Sun** | Rest | | |

### Week 12: Final Mock Interviews & Portfolio Polish

| Day | DSA Focus | Deep Dive | Capstone Task |
|---|---|---|---|
| Mon | Timed full simulation: 3 problems, 90 min | Review the weak areas flagged all quarter | Final bug bash |
| Tue | Timed full simulation | Polish resume technical bullet points | Write the capstone case-study (problem → architecture → challenges → results) |
| Wed | Timed full simulation | Mock behavioral round using your STAR stories | Record a 2–3 min demo video |
| Thu | Light review only | Mock full technical round: DSA + architecture + behavioral (60 min) | Final commit, clean history, finalize README |
| Fri | Light review only | Rest your brain — cheat sheets/one-pagers only | Final polish pass |
| **Sat** | **Final full mock interview:** DSA + Compose/architecture deep dive + system design + behavioral, end to end | | |
| **Sun** | Rest. You're ready. | | |

---

## Weekly Progress Tracker

Copy this into your journal and tick off each week:

| Week | Theme | Capstone Milestone | Mock Completed? |
|---|---|---|---|
| 1 | Kotlin Core | Project + module skeleton | ☐ |
| 2 | Compose State | First screen + ViewModel | ☐ |
| 3 | Compose Internals | Stable, animated UI | ☐ |
| 4 | **Month 1 Checkpoint** | Tested, documented MVP | ☐ |
| 5 | Coroutines | Async network layer | ☐ |
| 6 | Flow/StateFlow | Reactive UI state | ☐ |
| 7 | Architecture/DI | Clean layers + Hilt | ☐ |
| 8 | **Month 2 Checkpoint** | KMP shared module live | ☐ |
| 9 | Testing | Unit + Compose UI tests | ☐ |
| 10 | Diagnostics | Leak-free, profiled, AI module | ☐ |
| 11 | System Design | Design docs + STAR bank | ☐ |
| 12 | **Final Checkpoint** | Full mock passed, portfolio ready | ☐ |

## Quick-Reference Resource List

- **Kotlin:** official Kotlin language docs + Kotlin 2.x release notes
- **Compose:** "Thinking in Compose" + official Compose performance/phases docs
- **Coroutines/Flow:** Kotlinx.coroutines official guide
- **Architecture:** Android's official "Guide to app architecture"
- **KMP:** Kotlin Multiplatform official docs + Ktor Client docs
- **Testing:** MockK docs, Compose testing cheat sheet
- **DSA:** NeetCode 150 or Blind 75 list, solved in Kotlin

---

**Golden rule for all 12 weeks:** every time something breaks during capstone work, write it in the journal *immediately* — that's next month's interview answer already written for you.
