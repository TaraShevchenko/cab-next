import { FieldError } from 'react-hook-form'

import { IInputProps } from '../input/types'

export interface IInputWithLabel extends IInputProps {
   type?: 'password';
   error?: FieldError;
}
