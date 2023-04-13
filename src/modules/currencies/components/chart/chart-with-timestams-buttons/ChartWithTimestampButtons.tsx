import React, { useState } from 'react'

import { EChartTimestampValue, IChartTimestamp } from '@/modules/currencies/redux/types'

import Button from '@/core/components/ui/button/Button'

import { CHART_DATA } from './config'
import * as S from './style'
import Chart from '../Chart'

const TIMESTAMPS: IChartTimestamp[] = [
   { name: '1H', value: EChartTimestampValue.HOUR, },
   { name: '1D', value: EChartTimestampValue.DAY, },
   { name: '1W', value: EChartTimestampValue.WEEK, },
   { name: '1M', value: EChartTimestampValue.MONTH, },
   { name: '1Y', value: EChartTimestampValue.YEAR, },
   { name: 'All', value: EChartTimestampValue.ALL, },
]


const ChartWithTimestampButtons = () => {
   const [ activeStamp, setActiveStamp ] = useState(EChartTimestampValue.ALL)

   const handleGetChart = (timestamp: EChartTimestampValue) => {
      setActiveStamp(timestamp)
   }

   return (
      <>
         {CHART_DATA && <Chart data={CHART_DATA}/>}
         <S.ChartButtonGroup>
            {TIMESTAMPS.map(({ name, value }) =>
               (<Button
                  key={name}
                  onClick={() => handleGetChart(value)}
                  variant={activeStamp === value ? 'outlined' : 'primary'}
               >
                  {name}
               </Button>))
            }
         </S.ChartButtonGroup>
      </>
   )
}

export default ChartWithTimestampButtons