export interface TikTokReportsResp extends IResponse {
  data: TikTokChartData
}

export interface TikTokReportsBasicResp extends IResponse {
  data: TikTokReportsBasic
}

export interface TikTokChartData {
  clicks?: string[]
  impressions?: string[]
  ctr?: string[]
  cpc?: string[]
  conversion?: string[]
  spend?: string[]
  start_date?: string
  end_date?: string
  age?: string[]
}

export interface TikTokReportsBasic {
  spend?: string[]
  impressions?: string[]
  clicks?: string[]
  ctr?: string[]
  conversion?: string[]
  reach?: string[]
  cpc?: string[]
  start_date?: string
  end_date?: string
  advertiser_id?: string[]
}

export interface TTChartsDataSet {
  spend: {
    Age: string
    Spend: number
  }[]; // 花费
  impressions: {
    Age: string
    Impressions: number
  }[]; // 曝光次数
  clicks: {
    Age: string
    Clicks: number
  }[]; // 点击次数
  ctr: {
    Age: string
    CTR: number
  }[]; // 点击率
  conversion: {
    Age: string
    Conversion: number
  }[]; // 转化次数
  cpc: {
    Age: string
    CPC: number
  }[]; // 点击单价
}
