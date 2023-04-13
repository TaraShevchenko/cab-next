import { forwardRef, Ref, useEffect, useState } from 'react'

import Input from '@/core/components/ui/input/Input'
import InputPassword from '@/core/components/ui/input-password/InputPassword'

import DangerCircle from '@/core/assets/icons/danger-circle.svg'

import * as S from './styles'
import { IInputWithLabel } from './types'

const InputWithLabel = (props: IInputWithLabel, ref: Ref<HTMLDivElement>) => {
   const { type, label, error, value } = props
   const [ isOnTop, setIsOnTop ] = useState(false)

   const handleFocus = () => {
      setIsOnTop(true)
   }
   const handleBlur = () => {
      if (!value) {
         setIsOnTop(false)
      }
   }

   useEffect(() => {
      value ? setIsOnTop(true) : setIsOnTop(false)
   }, [ value ])

   return (
      <S.Wrapper isOnTop={isOnTop}>
         <S.Label>
            {label}
         </S.Label>
         {type === 'password'
            ? <InputPassword {...props} ref={ref} onFocus={handleFocus} onBlur={handleBlur}/>
            : <Input {...props} ref={ref} onFocus={handleFocus} onBlur={handleBlur}/>}
         {error && (
            <S.Error>
               <DangerCircle/>
               {error?.message}
            </S.Error>
         )}
      </S.Wrapper>
   )
}

export default forwardRef(InputWithLabel)