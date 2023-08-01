export interface Account {
  planId: number;
  credits: number;
  trialDays: number;
}

export interface QueryAccountResp extends IResponse {
  data: SubscriptionInfo | null
}

export interface SubscriptionInfo {
  email: string;
  subscribe_start_time: number;
  subscribe_end_time: number;
  subscription_id: string;
  subscription_plan_id: number;
  subscription_status: 'active' | 'cancel';
  credit_num: number;
  old_credit_num: number;
  downgrade_subscription: string;
  sub_expired: 0 | 1
}

export interface SubscriptionResp {
  end_time: number
  error: string
  message: string
  plan_id: number
  start_time: number
  status: 'active' | 'canceled' | 1 | 0
  subscription_id: string
}