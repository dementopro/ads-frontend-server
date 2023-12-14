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

export interface CompanyDetailForm {
  name: string;
  website: string;
  description: string;
  product_description: string;
  target_audice: string;
  content_type: string;
  customer_profile: string;
  competitors: string;
  business_objectives: string[];
  email: string;
  social_media_type?: string;
  url: string;
  marketing_template: string;
  schedule: any;
  assets: File[];
}

export interface CompanyForm {
  companyName: string;
  websiteURL: string;
  description: string;
  sellingDescription: string;
  idealCustomerProfile: string;
  targetAudience: string;
  competitors: string;
  email: string;
  marketing_template: string;
  schedule: any;
  socialMediaType?: string;
  url: string;
}