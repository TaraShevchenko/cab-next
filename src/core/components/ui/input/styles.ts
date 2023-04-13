import styled, { css } from 'styled-components'

import { IInputProps } from './types'

export const Container = styled.div`
   position: relative;
`

export const WrapperIcon = styled.div`
   position: absolute;
   top: 50%;
   left: 20px;
   color: ${({ theme }) => theme.colorTheme.inputs.primary.iconColor};
   z-index: 3;
   transform: translate(0%, -50%);
`

const primary = css`
   color: ${({ theme }) => theme.colorTheme.inputs.primary.color};
   border: 2px solid ${({ theme }) => theme.colorTheme.inputs.primary.borderColor};
   border-radius: 15px;
   padding: 20px;

   transition: all 0.2s ease-in-out;

   &:hover {
      border: 2px solid ${({ theme }) => theme.colorTheme.inputs.primary.borderColorHover};
   }

   &:focus {
      border: 2px solid ${({ theme }) => theme.colorTheme.inputs.primary.borderColorFocus};
   }
`

const variants = {
   primary,
}

const error = css`
   border: 2px solid ${({ theme }) => theme.colorTheme.inputs.primary.borderColorError};

   &:hover,
   &:focus {
      border: 2px solid ${({ theme }) => theme.colorTheme.inputs.primary.borderColorError};
   }
`

export const StyledLabel = styled.div`
   display: block;
   height: 100%;
`

export const StyledInput = styled.input<IInputProps>(
   ({ theme: { fonts, colorTheme }, isError, icon, variant = 'primary' }) => css`
      font-family: ${fonts.secondary};
      font-weight: 600;
      font-size: 15px;
      line-height: 20px;

      width: 100%;

      &:-webkit-autofill {
         -webkit-box-shadow: inset 0 0 0 9999px ${colorTheme.colors.body};
         -webkit-text-fill-color: ${colorTheme.inputs.primary.color};
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
         display: none;
         appearance: none;
         -webkit-appearance: none;
         margin: 0;
      }

      -moz-appearance: textfield;

      &::placeholder {
         font-family: ${fonts.secondary};
         font-weight: 600;
         font-size: 15px;
         line-height: 20px;

         color: ${colorTheme.inputs.primary.placeholder};
      }


      ${variants[variant]};
      ${!!isError && error};

      padding-left: ${!!icon && '50px'};
   `,
)
