import React from 'react'

import Button from '@/core/components/ui/button/Button'

import WalletIcon from '@/core/assets/icons/filled-wallet.svg'
import LuminousLogo from '@/core/assets/icons/luminous-logo.svg'
import WithdrawalIcon from '@/core/assets/icons/withdrawal.svg'

import { AVAILABLE_BALANCE } from './config'
import * as S from '../style'

const AvailableBalance = () => {
   return (
      <S.Card withLogo>
         <S.CardTitle>Available Balance</S.CardTitle>
         <S.CardBalanceWrapper>
            <S.CardBalance>
               <LuminousLogo/>
               <S.Balance>
                  {AVAILABLE_BALANCE?.balance_fst}
               </S.Balance>
               <S.BalanceCurrency>
                  fst
               </S.BalanceCurrency>
            </S.CardBalance>
            <S.ConvertedBalance>
               ≈ {AVAILABLE_BALANCE?.balance_usdt} USDT
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