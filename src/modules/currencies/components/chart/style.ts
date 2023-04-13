import styled, { css, keyframes } from 'styled-components'

export const CartWrapper = styled.div<{ height: number }>(
   ({ height }) => css`
      position: relative;
      width: 100%;
      height: ${height}px;

      .recharts-tooltip-cursor {
         display: none !important;
      }
   `
)

const fadeIn = keyframes`
   from {
      opacity: 0;
   }

   to {
      opacity: 1;
   }
`

export const CharFinalPointText = styled.div<{ top: number; value: string; isDowntrend: boolean }>(
   ({ theme: { colorTheme, fonts, down, breakpoints }, top, value, isDowntrend }) => css`
      position: absolute;
      top: ${top - 10}px;
      right: 20px;
      opacity: 0;
      animation: ${fadeIn} 0.6s ease-out 1.6s forwards;

      &:after {
         content: '${value}';
         font-family: ${fonts.secondary};
         font-weight: 700;
         font-size: 12px;
         line-height: 120%;
         color: ${colorTheme.chart.value};
         position: absolute;
         left: 10px;
         bottom: 13px;
         white-space: nowrap;

         ${down(breakpoints.lg)} {
            left: -15px;
            bottom: ${isDowntrend ? '-25px' : '20px'};
         }

         ${down(breakpoints.sm)} {
            left: -30px;
         }
      }
   `
)

export const TooltipWrapper = styled.div(
   ({ theme: { colorTheme, down, breakpoints } }) => css`
      display: flex;
      background: ${colorTheme.header.dropdownBorder};
      box-shadow: 0 14px 22px -8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      padding: 11px 15px 13px;
      transform: translateX(-50%);
      gap: 7px;
      align-items: flex-end;
      position: relative;
      
      &:after {
         content: '';
         width: 7px;
         height: 7px;
         position: absolute;
         background: ${colorTheme.header.dropdownBackground};
         right: 50%;
         bottom: -3px;
         border-top-left-radius: 2px;
         transform: translateX(50%) rotate(45deg);
         z-index: 2;

         ${down(breakpoints.md)} {
            right: 69px;
            transform: rotate(45deg);
         }
      }

      &:before {
         content: '';
         width: 9px;
         height: 9px;
         position: absolute;
         background: ${colorTheme.header.dropdownBorder};
         right: 50%;
         bottom: -4px;
         border-top-left-radius: 2px;
         transform: translateX(50%) rotate(45deg);

         z-index: -1;

         ${down(breakpoints.md)} {
            right: 68px;
            transform: rotate(45deg);
         }
      }
   `
)

export const TooltipBackground = styled.div(
   ({ theme: { colorTheme} }) => css`
      position: absolute;
      top: 1px;
      left: 1px;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      background: ${colorTheme.header.dropdownBackground};
      border-radius: 8px;
   `
)

export const TooltipPrice = styled.div(
   ({ theme: { colors, fonts } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 16px;
      color: ${colors.accent};
      position: relative;
      z-index: 2;
   `
)

export const TooltipCurrency = styled.div(
   ({ theme: { colorTheme, fonts } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 11px;
      color: ${colorTheme.colors.primaryText};
      position: relative;
      z-index: 2;
   `
)