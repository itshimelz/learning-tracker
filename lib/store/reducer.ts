import { AppState, DSAProblem, Resource } from "../types";

export type Action =
  | { type: "TOGGLE_TASK"; payload: { weekId: string; dayId: string; taskId: string } }
  | { type: "TOGGLE_MOCK"; payload: { weekId: string } }
  | { type: "UPDATE_DSA_PROBLEM"; payload: DSAProblem }
  | { type: "ADD_DSA_PROBLEM"; payload: Omit<DSAProblem, "id"> }
  | { type: "DELETE_DSA_PROBLEM"; payload: { id: string } }
  | { type: "TOGGLE_RESOURCE"; payload: { resourceId: string } }
  | { type: "ADD_RESOURCE"; payload: Omit<Resource, "id"> }
  | { type: "UPDATE_SETTINGS"; payload: { theme?: "light" | "dark" | "system"; dailyHours?: number; startDate?: string } }
  | { type: "IMPORT_STATE"; payload: AppState }
  | { type: "RESET_STATE" };

export function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "TOGGLE_TASK": {
      const { weekId, dayId, taskId } = action.payload;
      const updatedMonths = state.plan.months.map((month) => {
        const hasWeek = month.weeks.some((w) => w.id === weekId);
        if (!hasWeek) return month;

        return {
          ...month,
          weeks: month.weeks.map((week) => {
            if (week.id !== weekId) return week;

            return {
              ...week,
              days: week.days.map((day) => {
                if (day.id !== dayId) return day;

                return {
                  ...day,
                  tasks: day.tasks.map((task) => {
                    if (task.id !== taskId) return task;

                    const completed = !task.completed;
                    const completedAt = completed ? new Date().toISOString() : undefined;

                    // Side effect handling in reducer is usually avoided, but we can update
                    // or toggle the corresponding DSA problem if this is a DSA task.
                    return {
                      ...task,
                      completed,
                      completedAt,
                    };
                  }),
                };
              }),
            };
          }),
        };
      });

      // Also auto-toggle the corresponding DSA problem if a DSA task is toggled
      let updatedDsaProblems = [...state.dsaProblems];
      const targetTask = state.plan.months
        .flatMap((m) => m.weeks)
        .find((w) => w.id === weekId)
        ?.days.find((d) => d.id === dayId)
        ?.tasks.find((t) => t.id === taskId);

      if (targetTask && targetTask.category === "dsa") {
        const completed = !targetTask.completed;
        // Try to find a DSA problem that matches this task's title or week
        const problemIdx = updatedDsaProblems.findIndex(
          (p) => p.weekId === weekId && targetTask.title.toLowerCase().includes(p.name.toLowerCase())
        );

        if (problemIdx !== -1) {
          updatedDsaProblems[problemIdx] = {
            ...updatedDsaProblems[problemIdx],
            solved: completed,
            solvedAt: completed ? new Date().toISOString() : undefined,
          };
        }
      }

      return {
        ...state,
        plan: { ...state.plan, months: updatedMonths },
        dsaProblems: updatedDsaProblems,
      };
    }

    case "TOGGLE_MOCK": {
      const { weekId } = action.payload;
      const updatedMonths = state.plan.months.map((month) => {
        return {
          ...month,
          weeks: month.weeks.map((week) => {
            if (week.id !== weekId) return week;
            return {
              ...week,
              mockCompleted: !week.mockCompleted,
            };
          }),
        };
      });

      return {
        ...state,
        plan: { ...state.plan, months: updatedMonths },
      };
    }

    case "UPDATE_DSA_PROBLEM": {
      const updatedProblem = action.payload;
      const updatedDsaProblems = state.dsaProblems.map((prob) => {
        if (prob.id === updatedProblem.id) {
          return {
            ...prob,
            ...updatedProblem,
            solvedAt: updatedProblem.solved && !prob.solved ? new Date().toISOString() : updatedProblem.solvedAt,
          };
        }
        return prob;
      });

      // Sync back to plan task if possible
      let updatedMonths = state.plan.months;
      if (updatedProblem.solved !== undefined) {
        updatedMonths = state.plan.months.map((month) => {
          const hasWeek = month.weeks.some((w) => w.id === updatedProblem.weekId);
          if (!hasWeek) return month;

          return {
            ...month,
            weeks: month.weeks.map((week) => {
              if (week.id !== updatedProblem.weekId) return week;
              return {
                ...week,
                days: week.days.map((day) => {
                  return {
                    ...day,
                    tasks: day.tasks.map((task) => {
                      if (task.category === "dsa" && task.title.toLowerCase().includes(updatedProblem.name.toLowerCase())) {
                        return {
                          ...task,
                          completed: updatedProblem.solved,
                          completedAt: updatedProblem.solved ? new Date().toISOString() : undefined,
                        };
                      }
                      return task;
                    }),
                  };
                }),
              };
            }),
          };
        });
      }

      return {
        ...state,
        dsaProblems: updatedDsaProblems,
        plan: { ...state.plan, months: updatedMonths },
      };
    }

    case "ADD_DSA_PROBLEM": {
      const newProb: DSAProblem = {
        ...action.payload,
        id: `dsa-custom-${Date.now()}`,
        solvedAt: action.payload.solved ? new Date().toISOString() : undefined,
      };

      return {
        ...state,
        dsaProblems: [...state.dsaProblems, newProb],
      };
    }

    case "DELETE_DSA_PROBLEM": {
      const { id } = action.payload;
      return {
        ...state,
        dsaProblems: state.dsaProblems.filter((p) => p.id !== id),
      };
    }

    case "TOGGLE_RESOURCE": {
      const { resourceId } = action.payload;
      const updatedResources = state.resources.map((res) => {
        if (res.id !== resourceId) return res;
        return {
          ...res,
          completed: !res.completed,
        };
      });

      return {
        ...state,
        resources: updatedResources,
      };
    }

    case "ADD_RESOURCE": {
      const newRes: Resource = {
        ...action.payload,
        id: `res-custom-${Date.now()}`,
      };

      return {
        ...state,
        resources: [...state.resources, newRes],
      };
    }

    case "UPDATE_SETTINGS": {
      return {
        ...state,
        settings: {
          ...state.settings,
          ...action.payload,
        },
      };
    }

    case "IMPORT_STATE": {
      return action.payload;
    }

    case "RESET_STATE": {
      // Handled in context directly by clearing local storage
      return state;
    }

    default:
      return state;
  }
}
