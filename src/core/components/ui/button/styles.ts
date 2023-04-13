import styled, { css } from 'styled-components'

import { flex } from '@/core/styles/utils'

import { ButtonProps } from './types'

const outlined = css`
   font-family: ${({ theme }) => theme.fonts.primary};
   color: ${({ theme }) => theme.colorTheme.buttons.primary.color};
   background-color: ${({ theme }) =>
   theme.colorTheme.buttons.primary.backgroundColor};
   border: 2px solid ${({ theme }) => theme.colorTheme.buttons.primary.borderColor};

   transition: all 0.2s ease-in-out;

   &:hover {
      color: ${({ theme }) => theme.colors.firefly};
      background-color: ${({ theme }) => theme.colors.accent};
   }
`
const primary = css`
   font-family: ${({ theme }) => theme.fonts.primary};
   color: ${({ theme }) => theme.colorTheme.buttons.primary.color};
   background-color: ${({ theme }) =>
   theme.colorTheme.buttons.primary.backgroundColor};
   border: 2px solid ${({ theme }) => theme.colorTheme.buttons.primary.backgroundColor};

   transition: all 0.2s ease-in-out;

   &:hover {
      color: ${({ theme }) => theme.colors.firefly};
      background-color: ${({ theme }) => theme.colors.accent};
      border-color: ${({ theme }) => theme.colors.accent};
   }
`

const variants = {
   primary,
   outlined,
}

export const withIconStyles = css`
   ${flex.alignItemsCenter};
   gap: 10px;
   height: 50px;

   &:hover {
      svg {
         color: ${({ theme }) => theme.colors.firefly};
         transition: all 0.2s ease-in-out;
      }
   }

   svg {
      color: ${({ theme }) => theme.colors.accent};
      transition: all 0.2s ease-in-out;
   }
`

export const styledButton = css<ButtonProps>`
   font-weight: 500;
   font-size: 14px;
   line-height: 18px;

   width: ${({ fullWidth }) => fullWidth && '100%'};
   padding: 13px 25px;
   border-radius: 20px;
   white-space: nowrap;

   opacity: ${({ disabled }) => disabled ? 0.5 : 1};

   &:disabled {
      pointer-events: none;
   }

   ${({ variant = 'primary' }) => variants[variant]};
   ${withIconStyles};
`

export const Button = styled.button<ButtonProps>(
   ({
      fullWidth = false,
      disabled,
      variant = 'primary',
   }) => css`
      ${styledButton}
   `,
)
export const Span = styled.span<ButtonProps>(
   ({
      fullWidth = false,
      disabled,
      variant = 'primary',
   }) => css`
      ${styledButton}
   `,
)
