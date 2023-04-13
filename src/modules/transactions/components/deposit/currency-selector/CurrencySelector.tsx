import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

import { selectTheme } from '@/core/redux/selectors'
import { useAppDispatch } from '@/core/redux/store'
import { ICurrency } from '@/modules/currencies/redux/types'
import { selectActiveDepositCurrency } from '@/modules/transactions/redux/selectors'
import { setActiveDepositCurrency } from '@/modules/transactions/redux/slice'

import useLoading from '@/core/hooks/useLoading'

import { CURRENCY } from './config'
import * as S from '../style'

const CurrencySelector = () => {
   const dispatch = useAppDispatch()
   const theme = useSelector(selectTheme)
   const handleLoadingBefore = useLoading()
   const activeCurrency = useSelector(selectActiveDepositCurrency)
   const handleCurrencyChoose = (payload: ICurrency) => {
      handleLoadingBefore(() => dispatch(setActiveDepositCurrency(payload)))
   }

   return (
      <S.CurrencyWrapper>
         {(CURRENCY?.length) && CURRENCY?.map((currency) => (
            <S.Currency
               key={currency.id}
               isActive={activeCurrency?.id === currency.id}
               onClick={() => handleCurrencyChoose(currency)}>
               <S.CurrencyIcon>
                  <Image
                     width="50"
                     height="50"
                     src={currency.chain_image} alt={currency.chain_code}
                     style={{ filter: `brightness(${currency.chain_code === 'TRC20' && theme === 'light' ? 0 : 1})` }}
                  />
               </S.CurrencyIcon>
               <S.CurrencyRadio/>
               <S.CurrencyLogo type={currency.id}>
                  <Image
                     width="50"
                     height="50"
                     src={currency.asset_image} alt={currency.asset_name}
                     style={{ filter: `brightness(${currency.asset_name === 'USDT' && theme === 'light' ? 0 : 1})` }}
                  />
               </S.CurrencyLogo>
               <S.CurrencyTextWrapper>
                  <S.CurrencyTitle>
                     {currency.asset_name}
                  </S.CurrencyTitle>
                  <S.CurrencySubtitle>
                     {currency.chain_code}
                  </S.CurrencySubtitle>
               </S.CurrencyTextWrapper>
            </S.Currency>
         ))}
      </S.CurrencyWrapper>
   )
}

export default CurrencySelector