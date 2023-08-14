import { IconifyIcon } from "@iconify/react";
import { Serie } from "@nivo/line";

export type PlatformType = 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'tiktok' | 'linkedin' | 'pinterest' | 'google';


export interface Platform {
  icon: IconifyIcon;
  name: PlatformType;
}

export type DateRange = 'last_day' | 'last_week' | 'last_month'
export type DataMetric = 'page' | 'post' | 'video' | 'ad'
export type ClicksMetricLabel = 'Profile link clicks' | 'Email link clicks' | 'Website clicks' | 'Phone call clicks' | 'Text message clicks'

export interface LineData {
  date: Date;
  value: number;
}

export type AreaData = {
  date: string
  name: string
  value: number
}

export interface BarData {
  label: string;
  value: number;
}

export interface IDashboardResp extends IResponse {
  data: {
    date: string;
    value: number;
  }[];
  metrics_mode: DataMetric;
  time_mode: DateRange;
}

export interface IAdsFbManagementResp extends IResponse {
  data: {
    [key in keyof FbChartsDataSet]: number | string
  } & IAdsFbManagementData
  mode: 'all' | 'facebook' | 'ins'
}

export interface IAdsFbManagementData {
  accound_id: string;
  account_name: string;
  date_start: string;
  date_stop: string;
}

export interface IFbChartResp extends IResponse {
  data: IFbOriginChartData
  mode: string
}

export interface IFbOriginChartData {
  start_dates: string[];
  date_start: string[];
  clicks: number[];
  impressions: number[];
  reach: number[];
  cpc: number[];
  cpp: number[];
  cpm: number[];
  ctr: number[];
  spend: number[];
  website_ctr: number[];
  video_avg_time_watched_actions: number[];
  cost_per_conversion: number[];
  cost_per_unique_click: number[];
  conversions: number[];
  purchase_roas: number[];
}

export interface IFbFollowersResp extends IResponse {
  data: IFbFollowersData
}

export interface IFbFollowersData {
  age: [string, number][]
  gender: [string, number][]
  country: [string, number][]
}

export interface ICampaignsResp extends IResponse {
  data: ICampaignsData[]
}

export interface ICampaignsData {
  id: string;
  name: string;
}

export interface FbChartsDataSet {
  spend: Serie[] | {
    Date: string
    Spend: number
  }[]; // 花费
  impressions: Serie[]; // 曝光次数
  clicks: Serie[]; // 点击次数
  ctr: Serie[]; // 点击率
  reach: Serie[]; // 预估覆盖人数
  cpc: Serie[]; // 平均点击成本
  cpm: Serie[]; // 1,000 次展示的平均费用
  cpp: Serie[];
  purchase_roas: Serie[];
  website_ctr: Serie[];
  video_avg_time_watched_actions: Serie[];
  cost_per_conversion: Serie[];
  cost_per_unique_click: Serie[];
  conversions: Serie[];
}
