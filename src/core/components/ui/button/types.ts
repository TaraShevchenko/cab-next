import { ComponentPropsWithoutRef } from 'react'

export type TButtonVariant = 'primary' | 'outlined'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
   disabled?: boolean
   variant?: TButtonVariant
   fullWidth?: boolean
   href?: string
}
