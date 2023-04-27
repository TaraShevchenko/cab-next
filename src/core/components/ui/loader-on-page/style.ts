import styled, { css } from 'styled-components'

export const LoaderWrapper = styled.div(
   ({ theme: { colorTheme } }) => css`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 85px;
      margin: 45px 0;

      .loader {
         position: relative;
         margin: 0 auto;
         width: 85px;
         height: 85px;
      }

      .loader:before {
         content: '';
         display: block;
         padding-top: 100%;
      }

      .loader:after {
         content: '';
         position: absolute;
         left: 50%;
         top: 50%;
         transform: translate(-50%, -50%);
         height: calc(100% - 17px);
         width: calc(100% - 17px);
         border: 1px solid ${colorTheme.colors.background};
         border-radius: 100%;
         z-index: -1;
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
         80%,
         90% {
            stroke: ${colorTheme.loader.iconColor};
         }
      }
   `
)
