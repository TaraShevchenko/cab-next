import HCaptcha from '@hcaptcha/react-hcaptcha'
import { yupResolver } from '@hookform/resolvers/yup'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import { selectTheme } from '@/core/redux/selectors'
import { useAppDispatch } from '@/core/redux/store'
import { useLoginMutation } from '@/modules/auth/redux/api'
import { setCredentials } from '@/modules/auth/redux/slice'

import Button from '@/core/components/ui/button/Button'
import InputWithLabel from '@/core/components/ui/input-with-label/InputWithLabel'
import {
   signInFormInitialValues,
   signInFormNames,
   signInFormValidationSchema
} from '@/modules/auth/components/sign-in-form/config'
import * as S from '@/modules/auth/components/sign-page-template/styles'

import useLoading from '@/core/hooks/useLoading'

import { notificationContainer } from '@/core/utils/notofication-container'

import LockClosed from '@/core/assets/icons/lock-closed.svg'
import Mail from '@/core/assets/icons/mail.svg'

import { ERoutesPaths } from '@/config'

const SignInForm = () => {
   const router = useRouter()
   const dispatch = useAppDispatch()
   const theme = useSelector(selectTheme)

   const handleLoadingBefore = useLoading()
   const [ handleLogin ] = useLoginMutation()

   const [ captchaIsVisible, setCaptchaIsVisible ] = useState(false)
   const [ captchaToken, setCaptchaToken ] = useState('')

   const {
      reset,
      control,
      register,
      handleSubmit,
      getValues,
      formState: { errors }
   } = useForm({
      mode: 'onSubmit',
      defaultValues: signInFormInitialValues,
      resolver: yupResolver(signInFormValidationSchema)
   })

   const handleSignIn = async () => {
      const values = getValues()

      try {
         const response = await handleLogin({
            email: values?.email || '',
            password: values?.password || '',
            totp: captchaToken
         })

         if ('error' in response) {
            notificationContainer('Sign in failed !', 'error')
         } else {
            handleLoadingBefore(() => {
               Cookies.set('token', response.data.token)
               Cookies.set('user_id', response.data.id)
               dispatch(setCredentials(response.data))
               router.push(ERoutesPaths.DASHBOARD)
               notificationContainer('Sign in succeed !', 'success')
            })
            reset()
            return;
         }
      } catch (err) {
         notificationContainer('Sign in failed !', 'error')
      }

      dispatch(setCredentials({
         id: 'qwe',
         token: 'qwe',
      }))
      router.push(ERoutesPaths.DASHBOARD)
   }

   const handleSubmitForm = () => {
      if (captchaIsVisible && captchaToken) {
         handleSignIn()
      }
      setCaptchaIsVisible(true)
   }

   const handleVerificationSuccess = (totp: string) => {
      setCaptchaToken(totp)
   }

   return (
      <S.FormWrapper>
         <S.Title>Sign In</S.Title>
         <S.Description>Welcome back! We are glad to see you!</S.Description>

         <S.Form onSubmit={handleSubmit(handleSubmitForm)}>
            <Controller
               control={control}
               name={signInFormNames.email}
               render={({ field }) => (<InputWithLabel
                  label="Email"
                  icon={() => <Mail/>}
                  error={errors[signInFormNames.email]}
                  {...register(signInFormNames.email)}
                  {...field}
               />)}
            />
            <Controller
               control={control}
               name={signInFormNames.password}
               render={({ field }) => (<InputWithLabel
                  type="password"
                  label="Password"
                  icon={() => <LockClosed/>}
                  error={errors[signInFormNames.password]}
                  {...register(signInFormNames.password)}
                  {...field}
               />)}
            />

            {captchaIsVisible && <S.CaptchaWrapper>
               <HCaptcha
                  theme={theme}
                  onVerify={handleVerificationSuccess}
                  sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || ''}
               />
            </S.CaptchaWrapper>}

            <S.ButtonWrapper>
               <Button type="submit" variant="outlined" disabled={captchaIsVisible && !captchaToken}>Sign In</Button>
            </S.ButtonWrapper>
         </S.Form>

      </S.FormWrapper>
   )
}

export default SignInForm
