export interface ICurrency {
   id: number;
   asset_name: string;
   asset_code: string;
   asset_image: string;
   chain_code: string;
   chain_image: string;
}

export interface IChartPoint {
   price: number;
}

export enum EChartTimestampValue {
   HOUR = 'hour',
   DAY = 'day',
   WEEK = 'week',
   MONTH = 'month',
   YEAR = 'year',
   ALL = 'all',
}

export interface IChartTimestamp {
   name: string;
   value: EChartTimestampValue;
}

export interface IExchangeRateResponse {
   exchange_rate: number;
}