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

export type IPlan = Record<string, string[]>;

export interface CompnayDetailForm {
  name: string;
  website: string;
  description: string;
  product_description: string;
  target_audice: string;
  content_type: string;
  customer_profile: string;
  competitors: string;
  business_objectives: string[];
}

export interface CompanyForm {
  companyName: string;
  websiteURL: string;
  description: string;
  sellingDescription: string;
  idealCustomerProfile: string;
  targetAudience: string;
  competitors: string;
}
