import { forwardRef, Ref, useImperativeHandle, useRef, useState } from 'react'

import Input from '@/core/components/ui/input/Input'
import { IInputProps } from '@/core/components/ui/input/types'

import EyeOff from '@/core/assets/icons/eye-off.svg'
import Eye from '@/core/assets/icons/eye.svg'

import { Container, Switch } from './styles'

const InputPassword = (props: IInputProps, ref: Ref<{ focus: () => void }>) => {
   const inputRef = useRef<HTMLInputElement>(null)
   const [isVisible, setIsVisible] = useState(false)

   useImperativeHandle(ref, () => ({
      focus: () => {
         inputRef?.current?.focus()
      },
   }))

   const handleIsVisible = () => setIsVisible((prevIsVisible) => !prevIsVisible)

   return (
      <Container>
         <Input {...props} type={isVisible ? 'text' : 'password'} ref={inputRef} />
         <Switch onClick={handleIsVisible}>
            {isVisible && <EyeOff />}
            {!isVisible && <Eye />}
         </Switch>
      </Container>
   )
}

export default forwardRef(InputPassword)
