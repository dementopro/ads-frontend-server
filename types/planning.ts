export interface IPlanning {
  email: string;
  planning_obj: IPlanningObj;
}

export interface IPlanningObj {
  email: string;
  plan: IPlan;
  prompt: string;
  id?: number;
  date?: string;
}

export interface IPlanningHistory extends IResponse {
  planning_list?: IPlanningObj[];
  planning?: IPlanningObj;
}

export type IPlan = Record<string, string[]>
