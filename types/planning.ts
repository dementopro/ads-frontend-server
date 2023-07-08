export interface IPlanning {
  email: string;
  planning_obj: IPlanningObj;
}

export interface IPlanningObj {
  plan: IPlan;
  prompt: string;
}

export type IPlan = Record<string, string[]>
