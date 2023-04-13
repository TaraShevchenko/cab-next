import HCaptcha from '@hcaptcha/react-hcaptcha'
import { yupResolver } from '@hookform/resolvers/yup'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import { selectTheme } from '@/core/redux/selectors'
import { useAppDispatch } from '@/core/redux/store'
import { useRegistrationMutation } from '@/modules/auth/redux/api'
import { setCredentials } from '@/modules/auth/redux/slice'

import Button from '@/core/components/ui/button/Button'
import Checkbox from '@/core/components/ui/checkbox/Checkbox'
import InputWithLabel from '@/core/components/ui/input-with-label/InputWithLabel'
import * as S from '@/modules/auth/components/sign-page-template/styles'
import Anchor from '@/modules/auth/components/ui/anchor/Anchor'

import useLoading from '@/core/hooks/useLoading'

import { notificationContainer } from '@/core/utils/notofication-container'

import LockClosed from '@/core/assets/icons/lock-closed.svg'
import Mail from '@/core/assets/icons/mail.svg'

import { signUpFormInitialValues, signUpFormNames, signUpFormValidationSchema } from './config'
import { ERoutesPaths } from '@/config'

const SignUpForm = () => {
   const router = useRouter()
   const dispatch = useAppDispatch()
   const theme = useSelector(selectTheme)

   const handleLoadingBefore = useLoading()
   const [ handleRegistration ] = useRegistrationMutation()

   const [ read, setRead ] = useState(false)
   const [ captchaIsVisible, setCaptchaIsVisible ] = useState(false)
   const [ captchaToken, setCaptchaToken ] = useState('')
   const [ buttonDisabled, setButtonDisabled ] = useState(true)

   const {
      reset,
      control,
      register,
      handleSubmit,
      getValues,
      formState: { errors }
   } = useForm({
      mode: 'onSubmit',
      defaultValues: signUpFormInitialValues,
      resolver: yupResolver(signUpFormValidationSchema)
   })

   const handleRead = () => {
      setRead(!read)
      setButtonDisabled(!buttonDisabled)
   }

   const handleRegistrationRequest = async () => {
      const values = getValues()
      try {
         const response = await handleRegistration({
            first_name: "first_name",
            last_name: "last_name",
            email: values?.email || '',
            password: values?.password || '',
            totp: captchaToken
         })

         if ('error' in response) {
            notificationContainer('Sign up failed !', 'error')
         } else {
            handleLoadingBefore(() => {
               Cookies.set('token', response.data.token)
               Cookies.set('user_id', response.data.id)
               dispatch(setCredentials(response.data))
               router.push(ERoutesPaths.DASHBOARD)
               notificationContainer('Sign up succeed !', 'success')
            })
            reset()
         }
      } catch (err) {
         notificationContainer('Sign up failed !', 'error')
      }
   }

   const handleSubmitForm = () => {
      if (captchaToken) {
         handleRegistrationRequest()
      } else {
         setCaptchaIsVisible(true)
         setButtonDisabled(true)
      }
   }

   const handleVerificationSuccess = async (totp: string) => {
      setCaptchaToken(totp)
      setButtonDisabled(false)
   }

   return (
      <S.FormWrapper>
         <S.Title>Create wallet</S.Title>
         <S.Description>Start your journey in the Fansee world</S.Description>


         <S.Form onSubmit={handleSubmit(handleSubmitForm)}>
            <Controller
               control={control}
               name={signUpFormNames.email}
               render={({ field }) => (<InputWithLabel
                  label="Email"
                  icon={() => <Mail/>}
                  error={errors[signUpFormNames.email]}
                  {...register(signUpFormNames.email)}
                  {...field}
               />)}
            />
            <Controller
               control={control}
               name={signUpFormNames.password}
               render={({ field }) => (<InputWithLabel
                  type="password"
                  label="Password"
                  icon={() => <LockClosed/>}
                  error={errors[signUpFormNames.password]}
                  {...register(signUpFormNames.password)}
                  {...field}
               />)}
            />
            <Controller
               control={control}
               name={signUpFormNames.confirmPassword}
               render={({ field }) => (<InputWithLabel
                  type="password"
                  label="Confirm Password"
                  icon={() => <LockClosed/>}
                  error={errors[signUpFormNames.confirmPassword]}
                  {...register(signUpFormNames.confirmPassword)}
                  {...field}
               />)}
            />

            <Checkbox checked={read} onChange={handleRead}>
               <S.Terms>
                  I agree of the <a href="#"><Anchor>Terms & conditions</Anchor></a>
               </S.Terms>
            </Checkbox>

            {captchaIsVisible && (
               <S.CaptchaWrapper>
                  <HCaptcha
                     theme={theme}
                     onVerify={handleVerificationSuccess}
                     sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || ''}
                  />
               </S.CaptchaWrapper>
            )}

            <S.ButtonWrapper>
               <Button type="submit" disabled={buttonDisabled} variant="outlined">
                  Create wallet
               </Button>
            </S.ButtonWrapper>
         </S.Form>
      </S.FormWrapper>
   )
}

export default SignUpForm
