import { TooltipProps } from 'recharts'

import { IChartPoint } from '../../redux/types'

export interface IChartProps {
   height?: number;
   data: IChartPoint[];
}

export interface ICustomTooltip extends TooltipProps<number, string> {
   currency?: string;
}

export interface ICustomDot {
   cx: number;
   cy: number;
   index: number;
   points: IPoint[] | null;
   setActivePoint: (point: IPoint | null) => void;
}

export interface IPoint {
   x: number;
   y: number;
}