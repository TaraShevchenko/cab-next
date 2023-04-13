import React, { forwardRef, Ref, useImperativeHandle, useRef } from 'react'

import { Container, StyledInput, WrapperIcon } from './styles'
import { IInputProps } from './types'

const Input = ({ icon: Component, label, ...props }: IInputProps, ref: Ref<{ focus: () => void }>) => {
   const inputRef = useRef<HTMLInputElement>(null)

   useImperativeHandle(ref, () => ({
      focus: () => {
         inputRef?.current?.focus()
      }
   }))

   return (
      <Container>
         {Component && (
            <WrapperIcon>
               <Component/>
            </WrapperIcon>
         )}
         <label htmlFor={label}>
            <StyledInput id={label} icon={Component} {...props} ref={inputRef}/>
         </label>
      </Container>
   )
}

export default forwardRef(Input)
