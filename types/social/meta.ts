export interface Account {
  access_token: string;
  category: string;
  category_list: [{
    id: string;
    name: string;
  }];
  name: string;
  id: string;
  tasks: [string];
};

export interface PageInsightValue {
  value: number;
  end_time: string;
}

export interface PageInsight {
  id: string;
  name: string;
  period: string;
  title: string | null;
  description: string;
  values: [PageInsightValue]
};