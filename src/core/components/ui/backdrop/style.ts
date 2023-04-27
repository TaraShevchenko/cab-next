import styled, { css } from 'styled-components'

export const BackdropActive = css`
   opacity: 1;
   pointer-events: unset;
   transition: opacity 0.2s ease-in-out;
`

export const Backdrop = styled.div<{ isActive: boolean }>(
   ({ theme: { colorTheme }, isActive }) => css`
      opacity: 0;
      pointer-events: none;
      background: ${colorTheme.backdrop.background};
      transition: all 0.2s ease-in-out;
      position: fixed;
      height: 100vh;
      width: 100vw;
      z-index: 99;
      top: 0;
      left: 0;

      ${isActive && BackdropActive};
   `
)
