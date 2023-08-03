import { IconifyIcon } from "@iconify/react";

export type PlatformType = 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'tiktok' | 'linkedin' | 'pinterest' | 'google';


export interface Platform {
  icon: IconifyIcon;
  name: PlatformType;
  isConnected: boolean;
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
