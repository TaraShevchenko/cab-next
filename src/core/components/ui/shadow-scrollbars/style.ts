import styled, { css } from 'styled-components'

export const TopScrollShadow = styled.div(
   ({ theme: { down, breakpoints, colorTheme } }) => css`
      position: absolute;
      height: 50px;
      width: 100%;
      top: 89px;
      background: linear-gradient(180deg,
      ${colorTheme.shadowScroll.shadowStart} 33.26%,
      ${colorTheme.shadowScroll.shadowMiddle} 65.86%,
      ${colorTheme.shadowScroll.shadowFinish} 100%);
      z-index: 79;

      ${down(breakpoints.xlg)} {
         top: 69px;
      }
   `
)

export const BottomScrollShadow = styled.div(
   ({ theme: { colorTheme } }) => css`
      position: absolute;
      height: 50px;
      width: 100%;
      bottom: 0;
      background: linear-gradient(0,
      ${colorTheme.shadowScroll.shadowStart} 33.26%,
      ${colorTheme.shadowScroll.shadowMiddle} 65.86%,
      ${colorTheme.shadowScroll.shadowFinish} 100%);
      z-index: 79;
   `
)

export const ScrollWrapper = styled.div(
   ({ theme: { colorTheme } }) => css`
      position: relative;
      height: 100%;
      width: 100%;

      .simplebar-track {
         z-index: 80;
      }

      .simplebar-mask {
         z-index: unset;
      }

      .simplebar-track .simplebar-vertical {
         background: ${colorTheme.shadowScroll.track};
         width: 6px;
         right: 0;
         bottom: 0;
         top: 0;
      }

      .simplebar-scrollbar {
         background: ${colorTheme.shadowScroll.thumb};
         border-radius: 2px;
         width: 6px;

         &:before {
            opacity: 0;
         }
      }
   `
)