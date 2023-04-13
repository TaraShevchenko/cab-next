import styled, { css } from 'styled-components'

export const LoaderWrapper = styled.div<{ isActive: boolean }>(
   ({ theme: { colorTheme, breakpoints, down }, isActive }) => css`
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 101;
      background: ${colorTheme.loader.background};
      opacity: ${isActive ? 1 : 0};
      pointer-events: ${isActive ? 'unset' : 'none'};
      transition: opacity 0.2s ease-in-out, background-color 0.6s ease-in-out;


      .loader-wrapper {
         position: fixed;
         z-index: 9000;
      }

      .loader-wrapper .loader {
         position: relative;
         margin: 0 auto;
         width: 200px;
         height: 200px;

         ${down(breakpoints.xsm)} {
            width: 100px;
            height: 100px;
         }
      }

      .loader-wrapper .loader:before {
         content: '';
         display: block;
         padding-top: 100%;
      }

      .circular-loader {
         animation: rotate 2s linear infinite;
         height: 100%;
         transform-origin: center center;
         width: 100%;
         position: absolute;
         top: 0;
         left: 0;
         margin: auto;
      }

      .loader-path {
         stroke-dasharray: 150, 200;
         stroke-dashoffset: -10;
         animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
         stroke-linecap: round;
      }

      @-webkit-keyframes rotate {
         100% {
            transform: rotate(360deg);
         }
      }

      @keyframes rotate {
         100% {
            transform: rotate(360deg);
         }
      }

      @keyframes dash {
         0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
         }
         50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
         }
         100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
         }
      }

      @keyframes color {
         0% {
            stroke: ${colorTheme.loader.iconColor};
         }
         40% {
            stroke: ${colorTheme.loader.iconColor};
         }
         66% {
            stroke: ${colorTheme.loader.iconColor};
         }
         80%, 90% {
            stroke: ${colorTheme.loader.iconColor};
         }
      }
   `,
)

export const LoaderBackground = styled.span(
   ({ theme: { colorTheme, colors, breakpoints, down } }) => css`
      width: 160px;
      height: 160px;
      display: inline-block;
      vertical-align: middle;
      filter: drop-shadow(0px 0px 20px ${colors.accentHalfTransparent}) drop-shadow(0px 0px 20px ${colors.accentHalfTransparent});
      background: ${colorTheme.loader.background};
      border-radius: 100%;
      transition: all 0.6s ease-in-out;

      ${down(breakpoints.xsm)} {
         width: 80px;
         height: 80px;
      }
   `,
)

export const LoaderLogo = styled.span(
   ({ theme: { breakpoints, down } }) => css`
      position: absolute;
      top: calc(50% + 4px);
      left: calc(50% + 4px);
      transform: translate(-50%, -50%);

      ${down(breakpoints.xsm)} {
         top: calc(50% + 2px);
         left: calc(50% + 2px);

         img {
            width: auto;
            height: 32px;
         }
      }
   `,
)
