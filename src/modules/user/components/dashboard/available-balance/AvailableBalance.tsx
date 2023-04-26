import React from 'react'
import { useSelector } from 'react-redux'

import { selectUserData } from '@/modules/user/redux/selectors'

import Button from '@/core/components/ui/button/Button'

import WalletIcon from '@/core/assets/icons/filled-wallet.svg'
import LuminousLogo from '@/core/assets/icons/luminous-logo.svg'
import WithdrawalIcon from '@/core/assets/icons/withdrawal.svg'

import * as S from '../style'

const AvailableBalance = () => {
   const userData = useSelector(selectUserData)

   return (
      <S.Card withLogo>
         <S.CardTitle>Available Balance</S.CardTitle>
         <S.CardBalanceWrapper>
            <S.CardBalance>
               <LuminousLogo/>
               <S.Balance>
                  {userData?.balance}
               </S.Balance>
               <S.BalanceCurrency>
                  fst
               </S.BalanceCurrency>
            </S.CardBalance>
            <S.ConvertedBalance>
               {/* Todo: Ask backend to add the usdt balance field to user response */}
               ≈ {userData?.balance} USDT
            </S.ConvertedBalance>
         </S.CardBalanceWrapper>
         <S.ButtonGroup>
            <Button href="" variant="outlined">
               <S.ButtonIconWrapper>
                  <WalletIcon/>
               </S.ButtonIconWrapper>
               Buy tokens
            </Button>
            <Button variant="primary">
               <S.ButtonIconWrapper>
                  <WithdrawalIcon/>
               </S.ButtonIconWrapper>
               Withdrawal
            </Button>
         </S.ButtonGroup>
      </S.Card>
   )
}

export default AvailableBalance