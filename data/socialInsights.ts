import { DataMetric } from "@/types/socialInsights";

export const DataMetricMap: Record<DataMetric, string[]> = {
  page: ['Impressions', 'Engaged accounts', 'Profile views'],
  post: ['Comments', 'Likes', 'Shares ', 'Replies', 'Post Impressions', 'Post Reach', 'Post Clicks', 'Post Engagements'],
  video: ['Video Views', 'Average Watch Time', 'Video Shares', 'Comments'],
  ad: ['Ad Impressions', 'Ad Clicks', 'Ad Conversions', 'Ad Spend'],
}


const data = [
  {
    date: '2023-01-01',
    name: 'Profile link clicks',
  },
  {
    date: '2023-01-02',
    name: 'Profile link clicks',
  },
  {
    date: '2023-01-03',
    name: 'Profile link clicks',
  },
  {
    date: '2023-01-04',
    name: 'Profile link clicks',
  },
  {
    date: '2023-01-05',
    name: 'Profile link clicks',
  },
  {
    date: '2023-01-06',
    name: 'Profile link clicks',
  },
  {
    date: '2023-01-07',
    name: 'Profile link clicks',
  },
  {
    date: '2023-01-01',
    name: 'Email link clicks',
  },
  {
    date: '2023-01-02',
    name: 'Email link clicks',
  },
  {
    date: '2023-01-03',
    name: 'Email link clicks',
  },
  {
    date: '2023-01-04',
    name: 'Email link clicks',
  },
  {
    date: '2023-01-05',
    name: 'Email link clicks',
  },
  {
    date: '2023-01-06',
    name: 'Email link clicks',
  },
  {
    date: '2023-01-07',
    name: 'Email link clicks',
  },
  {
    date: '2023-01-01',
    name: 'Website clicks',
  },
  {
    date: '2023-01-02',
    name: 'Website clicks',
  },
  {
    date: '2023-01-03',
    name: 'Website clicks',
  },
  {
    date: '2023-01-04',
    name: 'Website clicks',
  },
  {
    date: '2023-01-05',
    name: 'Website clicks',
  },
  {
    date: '2023-01-06',
    name: 'Website clicks',
  },
  {
    date: '2023-01-07',
    name: 'Website clicks',
  },
  {
    date: '2023-01-01',
    name: 'Phone call clicks',
  },
  {
    date: '2023-01-02',
    name: 'Phone call clicks',
  },
  {
    date: '2023-01-03',
    name: 'Phone call clicks',
  },
  {
    date: '2023-01-04',
    name: 'Phone call clicks',
  },
  {
    date: '2023-01-05',
    name: 'Phone call clicks',
  },
  {
    date: '2023-01-06',
    name: 'Phone call clicks',
  },
  {
    date: '2023-01-07',
    name: 'Phone call clicks',
  },
  {
    date: '2023-01-01',
    name: 'Text message clicks',
  },
  {
    date: '2023-01-02',
    name: 'Text message clicks',
  },
  {
    date: '2023-01-03',
    name: 'Text message clicks',
  },
  {
    date: '2023-01-04',
    name: 'Text message clicks',
  },
  {
    date: '2023-01-05',
    name: 'Text message clicks',
  },
  {
    date: '2023-01-06',
    name: 'Text message clicks',
  },
  {
    date: '2023-01-07',
    name: 'Text message clicks',
  }
]

export const areaData = () => {
  return data.map(item => ({
    ...item,
    value: ~~(Math.random() * 1000) + 200
  }));
}
