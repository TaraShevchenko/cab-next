import styled, { css } from 'styled-components'

import { flex } from '@/core/styles/utils'

export const Wrapper = styled.div<{ isOnTop: boolean }>(
   ({ isOnTop, theme: { colorTheme } }) => css`
      position: relative;

      ${Label} {
         ${isOnTop && filledLabel}
      }

      &:before {
         content: '';
         opacity: ${isOnTop ? 0 : 1};
         background: ${colorTheme.colors.body};
         border-radius: 15px;
         height: calc(100% - 6px);
         width: calc(100% - 6px);
         position: absolute;
         top: 3px;
         left: 3px;
         z-index: 2;
         transition: opacity 0.2s ease-in-out;
         pointer-events: none;
      }
   `
)

const filledLabel = css`
   font-weight: 600;
   font-size: 10px;
   line-height: 14px;
   top: 0;
   transform: translate(0, -50%);
   background-color: ${({ theme }) => theme.colorTheme.colors.body};
`

export const Label = styled.div(
   ({ theme: { colorTheme, fonts } }) => css`
      font-family: ${fonts.secondary};
      font-weight: 600;
      font-size: 15px;
      line-height: 20px;
      color: ${colorTheme.inputs.primary.placeholderColor};

      position: absolute;
      top: 50%;
      left: 50px;
      transform: translate(0%, -50%);
      z-index: 3;
      pointer-events: none;

      transition: all 0.2s ease-in-out;
   `
)

export const Error = styled.span(
   ({ theme: { colorTheme, fonts } }) => css`
      ${flex.alignItemsCenter}
      gap: 3.5px;
      padding: 0 3px;

      text-align: right;
      font-weight: 600;
      font-size: 11px;
      line-height: 15px;
      font-family: ${fonts.secondary};
      color: ${colorTheme.inputs.primary.errorColor};

      position: absolute;
      bottom: 0;
      right: 40px;
      transform: translate(0%, 40%);
      z-index: 3;
      background-color: ${({ theme }) => theme.colorTheme.colors.body};
   `
)
