/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'
import { useTheme } from 'styled-components'

import { EColorTheme, getTheme } from '@/core/styles/theme'

import * as S from './style'
import { IChartProps, ICustomDot, ICustomTooltip, IPoint } from './types'

const CustomTooltip: React.FC<ICustomTooltip> = (props) => {
   const { active, payload, currency } = props
   if (!active || !payload || !payload[0]) {
      return null
   }

   const price = (payload[0].value as number).toFixed(2)

   return (
      <S.TooltipWrapper>
         <S.TooltipBackground />
         <S.TooltipPrice>{price}</S.TooltipPrice>
         <S.TooltipCurrency>{currency}</S.TooltipCurrency>
      </S.TooltipWrapper>
   )
}

const CustomDot: React.FC<ICustomDot> = (props) => {
   const { colorTheme } = useTheme() as any
   const theme = getTheme((colorTheme?.name as EColorTheme) || EColorTheme.dark)
   const { cx, cy, index, points, setActivePoint } = props

   useEffect(() => {
      const activePoint = points?.find((el, i: number) => i === index)
      !!activePoint && setActivePoint(activePoint)
   }, [index, points, setActivePoint])

   return (
      <g>
         {index !== 10 && (
            <circle
               cx={cx}
               cy={cy}
               r="5"
               fill={theme.colorTheme.header.dropdownBackground}
               stroke={theme.colors.accent}
               strokeWidth="3"
            />
         )}
         <defs>
            <linearGradient id="gradientLine" x1="0%" y1="100%" x2="0%" y2="0%">
               <stop offset="0%" stopColor={theme.colors.accent} stopOpacity={0} />
               <stop offset="80%" stopColor={theme.colors.accent} stopOpacity={1} />
            </linearGradient>
         </defs>
         <line
            y1={Number(cy) + (index !== 10 ? 6 : 0)}
            y2={160}
            x1={Number(cx) + (index !== 10 ? -0.1 : -1)}
            x2={cx}
            stroke="url(#gradientLine)"
            strokeWidth={2}
         />
      </g>
   )
}

const Chart: React.FC<IChartProps> = ({ height = 190, data }) => {
   const { colorTheme } = useTheme() as any
   const theme = getTheme((colorTheme?.name as EColorTheme) || EColorTheme.dark)
   const areaRef = useRef<any>(null)

   const [lastPointPosition, setLastPointPosition] = useState(0)

   const [lastPoint, setLastPoint] = useState<IPoint | null>(null)
   const [points, setPoints] = useState<IPoint[] | null>(null)
   const [activePoint, setActivePoint] = useState<IPoint | null>(null)

   const calculatePointYPercent = useCallback(
      (realHeight: number) => {
         const priceArray = data.map(({ price }) => price)
         const value = data[data.length - 1].price
         const maxValue = Math.max(...priceArray)
         const minValue = Math.min(...priceArray)

         const range = maxValue - minValue
         const verticalDistancePerValue = realHeight / range
         const pointY = realHeight - value * verticalDistancePerValue

         return height - realHeight + pointY - 10
      },
      [data, height]
   )

   useEffect(() => {
      setTimeout(() => {
         if (areaRef.current) {
            const points = areaRef.current?.props?.points
            setPoints(points)
            setLastPoint(points[points.length - 1])
            const realHeight = areaRef.current.props.height
            setLastPointPosition(calculatePointYPercent(realHeight))
         }
      }, 1)
   }, [calculatePointYPercent, areaRef])

   const beforeLastPrice = data[data.length - 2].price.toFixed(2)
   const lastPrice = data[data.length - 1].price.toFixed(2)

   return (
      <S.CartWrapper height={height}>
         <ResponsiveContainer width="100%" height={height}>
            <AreaChart
               data={data}
               margin={{
                  top: 20,
                  right: 20,
                  left: 20,
                  bottom: 20,
               }}
            >
               <Tooltip
                  position={{
                     x: activePoint?.x || 0,
                     y: activePoint?.y ? activePoint.y - 70 : 0,
                  }}
                  content={<CustomTooltip currency="USDT" />}
               />
               <circle cx={lastPoint?.x} cy={lastPoint?.y} fill={theme.colors.accent} r="5" opacity="0">
                  <animate attributeName="opacity" from="0" to="1" dur="0.6s" begin="1.6s" fill="freeze" />
               </circle>
               <CartesianGrid stroke="rgba(16, 234, 181, 0.18)" strokeDasharray="3" vertical={false} />
               <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="-10.37%" stopColor="rgba(16, 234, 181, 0.4)" stopOpacity={1} />
                     <stop offset="84.65%" stopColor="rgba(16, 234, 181, 0.03)" stopOpacity={1} />
                  </linearGradient>
               </defs>
               <Area
                  ref={areaRef}
                  dataKey="price"
                  stroke={theme.colors.accent}
                  strokeWidth={2}
                  fill="url(#gradient)"
                  activeDot={(props) => <CustomDot {...props} points={points} setActivePoint={setActivePoint} />}
               />
            </AreaChart>
         </ResponsiveContainer>
         <S.CharFinalPointText top={lastPointPosition} value={lastPrice} isDowntrend={beforeLastPrice > lastPrice} />
      </S.CartWrapper>
   )
}

export default Chart
