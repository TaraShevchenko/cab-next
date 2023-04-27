import { ComponentPropsWithoutRef } from 'react'

export type TInputVariant = 'primary'

export interface IInputProps extends ComponentPropsWithoutRef<'input'> {
   label?: string
   icon?: () => JSX.Element
   variant?: TInputVariant
   isError?: boolean
}
