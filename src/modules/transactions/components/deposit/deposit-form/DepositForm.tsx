import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import React, { ChangeEvent, useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import * as yup from 'yup'

import { selectTheme } from '@/core/redux/selectors'
import { selectActiveDepositCurrency } from '@/modules/transactions/redux/selectors'

import Button from '@/core/components/ui/button/Button'
import Input from '@/core/components/ui/input/Input'

import { notificationContainer } from '@/core/utils/notofication-container'

import CopyIcon from '@/core/assets/icons/copy.svg'
import inputLuminousLogo from '@/core/assets/icons/input-luminous-logo.svg?url'
import LuminousLogo from '@/core/assets/icons/luminous-logo.svg'
import OkIcon from '@/core/assets/icons/ok.svg'
import DepositIcon from '@/core/assets/icons/withdrawal.svg'

import { DEPOSIT_DATA, depositFormInitialValues, depositFormNames, EXCHANGE_RATE } from './config'
import * as S from '../style'

const DepositForm = () => {
   const theme = useSelector(selectTheme)
   const activeCurrency = useSelector(selectActiveDepositCurrency)
   const activeCurrencyId = activeCurrency?.id

   const depositFormValidationSchema = yup.object().shape({
      [depositFormNames.amount]: yup
         .string()
         .required('Amount is required')
         .test('min', `The minimum amount of the warehouse order is ${EXCHANGE_RATE.exchange_rate} ${activeCurrency?.asset_code}`,
            (value) => !!EXCHANGE_RATE.exchange_rate && (Number(value) >= EXCHANGE_RATE.exchange_rate)),
      [depositFormNames.converted]: yup
         .string()
         .required('Converted is required')
         .test('min', `The minimum amount of the warehouse order is 0.1 FST`,
            (value) => Number(value) >= 0.1)
   })

   const {
      reset,
      control,
      register,
      setValue,
      handleSubmit,
      formState: { errors }
   } = useForm({
      mode: 'onSubmit',
      defaultValues: depositFormInitialValues,
      resolver: yupResolver(depositFormValidationSchema)
   })

   useEffect(() => {
      reset()
   }, [ reset, activeCurrencyId ])

   useEffect(() => {
      if (DEPOSIT_DATA && EXCHANGE_RATE.exchange_rate && DEPOSIT_DATA?.asset?.id === activeCurrencyId) {
         setValue(depositFormNames.amount, DEPOSIT_DATA?.amount.toString())
         setValue(depositFormNames.converted, (DEPOSIT_DATA?.amount * EXCHANGE_RATE.exchange_rate).toString())
      }
   }, [ setValue, activeCurrencyId ])

   const handleChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event?.target?.value
      setValue(depositFormNames.amount, Number(value) >= 0 && value !== '' ? value : '')
      if (Number(value) >= 0 && value !== '' && EXCHANGE_RATE.exchange_rate) {
         setValue(depositFormNames.converted, (Number(value) / EXCHANGE_RATE.exchange_rate).toFixed(2))
      } else {
         setValue(depositFormNames.converted, '')
      }
   }
   const handleChangeConverted = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event?.target?.value
      setValue(depositFormNames.converted, Number(value) >= 0 && value !== '' ? value : '')
      if (Number(value) >= 0 && value !== '' && EXCHANGE_RATE.exchange_rate) {
         setValue(depositFormNames.amount, (Number(value) * EXCHANGE_RATE.exchange_rate).toFixed(2))
      } else {
         setValue(depositFormNames.amount, '')
      }
   }

   const onDepositSubmit = async ({ amount }: FieldValues) => {
      if (activeCurrencyId) {
         // await createDeposit({
         //    amount,
         //    asset_id: activeCurrencyId
         // })
      }
   }
   const onCancelDeposit = async () => {
      if (DEPOSIT_DATA && activeCurrencyId) {
         // await deleteDeposit({ asset_id: activeCurrencyId })
         // reset()
      }
   }

   const [ timer, setTimer ] = useState('00:00:00')

   useEffect(() => {
      if (DEPOSIT_DATA) {
         const finishTime = new Date(DEPOSIT_DATA?.finish_time).getTime()
         const interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = finishTime - now
            if (distance <= 0) {
               clearInterval(interval)
               setTimer('00:00:00')
            } else {
               const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0')
               const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0')
               const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0')
               setTimer(`${hours}:${minutes}:${seconds}`)
            }
         }, 1000)

         return () => clearInterval(interval)
      }
   }, [])

   const handleCopied = () => notificationContainer('Copied !', 'success')

   return (
      <S.DepositForm>
         <S.DepositFormItem>
            <S.DepositPriceWrapper>
               <S.DepositPriceCurrencyWrapper>
                  <S.DepositPriceMainCurrency>
                     FST
                  </S.DepositPriceMainCurrency>
                  <S.DepositPriceChosenCurrency>
                     /{activeCurrency?.asset_code}
                  </S.DepositPriceChosenCurrency>
               </S.DepositPriceCurrencyWrapper>

               <S.DepositPriceRateWrapper>
                  <LuminousLogo width="20" height="28"/>
                  1
                  ≈
                  <Image
                     width="50"
                     height="50"
                     src={activeCurrency?.asset_image}
                     alt={activeCurrency?.asset_name}
                     style={{ filter: `brightness(${activeCurrency?.asset_name === 'USDT' && theme === 'light' ? 0 : 1})` }}
                  />
                  {EXCHANGE_RATE.exchange_rate}
               </S.DepositPriceRateWrapper>
            </S.DepositPriceWrapper>


            <form onSubmit={handleSubmit(onDepositSubmit)}>

               <S.DepositInput>
                  <S.DepositInputTitle>I want to deposit</S.DepositInputTitle>
                  <Controller
                     control={control}
                     name={depositFormNames.amount}
                     render={({ field }) => (
                        <Input
                           label="Deposit Value"
                           icon={() => <S.DepositInputIcon>
                              <Image
                                 width="50"
                                 height="50"
                                 src={activeCurrency?.chain_image}
                                 alt={activeCurrency?.asset_name}
                                 style={{ filter: `brightness(${activeCurrency?.chain_code === 'TRC20' && theme === 'light' ? 0 : 1})` }}
                              />
                           </S.DepositInputIcon>}
                           placeholder={`${EXCHANGE_RATE.exchange_rate} >`}
                           {...field}
                           {...register(depositFormNames.amount)}
                           onChange={handleChangeAmount}
                           isError={!!errors.amount?.message}
                           disabled={!!DEPOSIT_DATA && DEPOSIT_DATA?.asset?.id === activeCurrencyId}
                        />
                     )}
                  />
                  <S.DepositInputHint isError={!!errors.amount?.message}>
                     {errors.amount?.message || `The minimum amount of the warehouse order is 
                     ${EXCHANGE_RATE.exchange_rate} ${activeCurrency?.asset_code}`}
                  </S.DepositInputHint>
               </S.DepositInput>
               <S.DepositInput>
                  <S.DepositInputTitle>I will get</S.DepositInputTitle>
                  <Controller
                     control={control}
                     name={depositFormNames.converted}
                     render={({ field }) => (
                        <Input
                           label="Get Value"
                           icon={() => <S.DepositInputIcon>
                              <Image width="20" height="20" src={inputLuminousLogo} alt={'FST'}/>
                           </S.DepositInputIcon>}
                           placeholder="0.1 >"
                           {...field}
                           {...register(depositFormNames.converted)}
                           onChange={handleChangeConverted}
                           isError={!!errors.converted?.message}
                           disabled={!!DEPOSIT_DATA && DEPOSIT_DATA?.asset?.id === activeCurrencyId}
                        />
                     )}
                  />
                  {errors.converted?.message &&
                     <S.DepositInputHint isError>{errors.converted.message}</S.DepositInputHint>}
               </S.DepositInput>


               {DEPOSIT_DATA?.asset?.id !== activeCurrencyId && <S.ButtonWrapper>
                  <Button type="submit" variant="outlined">
                     <OkIcon/>
                     Confirm
                  </Button>
               </S.ButtonWrapper>}

            </form>

         </S.DepositFormItem>

         {DEPOSIT_DATA?.asset_id === activeCurrencyId && <S.DepositFormItem>
            <S.DepositDataTitle>
               Send
               <S.DepositDataTitleHighlighted>
                  {DEPOSIT_DATA?.amount} {DEPOSIT_DATA?.asset.asset_code}
               </S.DepositDataTitleHighlighted>
               using QR code or copy wallet address
            </S.DepositDataTitle>
            <S.DepositDataText>
               You have created a money transfer order. Send the specified amount to the wallet below
               <S.DepositDataTextHighlighted> before the payment time limit expires. </S.DepositDataTextHighlighted>
               You can cancel the order to create a new one by clicking cancel
            </S.DepositDataText>

            <S.DepositDataWrapper>
               <S.DepositDataQr>
                  <Image
                     width="150"
                     height="150"
                     src={DEPOSIT_DATA?.qr}
                     alt="qr code"
                  />
               </S.DepositDataQr>

               <S.DepositDataTimeContainer>
                  <S.DepositDataTimeTitle>
                     Payment time limit
                  </S.DepositDataTimeTitle>
                  <S.DepositDataTimeWrapper>
                     <S.DepositDataTime>{timer}</S.DepositDataTime>
                     <Button variant="outlined" onClick={onCancelDeposit}>
                        <DepositIcon/>
                        Cancel
                     </Button>
                  </S.DepositDataTimeWrapper>
                  <S.DepositDataHint>
                     Send only {DEPOSIT_DATA?.asset.asset_name} to this address. Sending any other coins may results in
                     permanent loss
                  </S.DepositDataHint>
               </S.DepositDataTimeContainer>
            </S.DepositDataWrapper>

            <S.DepositDataAddress>
               <S.DepositDataAddressText>
                  {DEPOSIT_DATA?.address}
               </S.DepositDataAddressText>
               <CopyToClipboard onCopy={handleCopied} text={'0xb794f5ea0ba39494ce839613fffba74279579268'}>
                  <S.DepositDataCopyAddress>
                     <CopyIcon/>
                  </S.DepositDataCopyAddress>
               </CopyToClipboard>
            </S.DepositDataAddress>

         </S.DepositFormItem>}
      </S.DepositForm>
   )
}

export default DepositForm