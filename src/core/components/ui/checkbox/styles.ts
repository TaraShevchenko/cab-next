import { HTMLInputTypeAttribute } from 'react'
import styled, { css } from 'styled-components'

import { flex } from '@/core/styles/utils'

export const Container = styled.div`
   ${flex.alignItemsCenter}
`

export const Label = styled.label`
   cursor: pointer;
`

export const Icon = styled.svg(
   ({ theme: { colorTheme } }) => css`
      fill: none;
      stroke: ${colorTheme.checkboxs.primary.sign};
      stroke-width: 2px;
   `
)

export const HiddenCheckbox = styled.input.attrs({
   type: 'checkbox' as HTMLInputTypeAttribute,
})`
   height: 1px;
   width: 1px;

   clip: rect(0 0 0 0);
   clippath: inset(50%);

   margin: -1px;
   padding: 0;
   border: 0;

   overflow: hidden;
   position: absolute;
   white-space: nowrap;
`

export const StyledCheckbox = styled.div<{ checked: boolean }>(
   ({ checked, theme: { colorTheme } }) => css`
      display: inline-block;
      width: 18px;
      height: 18px;

      border: 1px solid ${checked ? colorTheme.checkboxs.primary.borderColor : 'transparent'};
      background-color: ${colorTheme.checkboxs.primary.backgroundColor};
      border-radius: 4px;

      transition: all 0.15s ease-in-out;

      ${Label}:hover {
         border: 1px solid ${colorTheme.checkboxs.primary.borderColor};
      }

      svg {
         visibility: ${checked ? 'visible' : 'hidden'};
      }
   `
)
