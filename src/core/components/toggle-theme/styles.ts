import styled, { css } from 'styled-components'

import { flex } from '@/core/styles/utils'

export const Label = styled.label`
   ${flex.alignItemsCenter}
   gap: 10px;

   cursor: pointer;
`

export const Switch = styled.div(
   ({ theme: { colorTheme, colors } }) => css`
      ${flex.justifyContentBetween}
      align-items: center;
      position: relative;
      width: 60px;
      height: 32px;

      padding: 7px;

      color: ${colorTheme.toggleTheme.active};
      background-color: ${colorTheme.toggleTheme.backgroundColor};
      border-radius: 40px;

      transition: 300ms all;

      &:before {
         content: '';
         position: absolute;
         top: 50%;
         left: 2px;
         transform: translate(0, -50%);

         width: 22px;
         height: 22px;

         border-radius: 50%;
         border: 2px solid ${colors.accent};
         background: transparent;

         transition: 300ms all;
      }
   `,
)

export const Input = styled.input(
   ({ theme: { colorTheme } }) => css`
      position: absolute;

      opacity: 0;

      &:checked + ${Switch} {
         background-color: ${colorTheme.toggleTheme.backgroundColor};

         &:before {
            transform: translate(29px, -50%);
         }

         svg {
            path {
               fill: ${colorTheme.toggleTheme.active};
            }
         }
      }
   `,
)
