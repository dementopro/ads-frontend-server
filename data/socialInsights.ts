import { DataMetric } from "@/types/socialInsights";

export const DataMetricMap: Record<DataMetric, string[]> = {
  page: ['Impressions', 'Engaged accounts', 'Profile views'],
  post: ['Comments', 'Likes', 'Shares ', 'Replies', 'Post Impressions', 'Post Reach', 'Post Clicks', 'Post Engagements'],
  video: ['Video Views', 'Average Watch Time', 'Video Shares', 'Comments'],
  ad: ['Ad Impressions', 'Ad Clicks', 'Ad Conversions', 'Ad Spend'],
}
