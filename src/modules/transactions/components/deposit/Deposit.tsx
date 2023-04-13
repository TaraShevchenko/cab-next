import React from 'react'
import { useSelector } from 'react-redux'

import { selectActiveDepositCurrency } from '@/modules/transactions/redux/selectors'

import CurrencySelector from './currency-selector/CurrencySelector'
import DepositForm from './deposit-form/DepositForm'
import * as S from './style'

const Deposit = () => {
   const activeCurrency = useSelector(selectActiveDepositCurrency)
   return (
      <S.DepositWrapper>
         <CurrencySelector/>

         {!!activeCurrency && <S.DepositFormWrapper>
            <S.DepositFormTitle>
               Deposit with {activeCurrency.asset_name} ({activeCurrency.chain_code})
            </S.DepositFormTitle>

            <DepositForm/>
         </S.DepositFormWrapper>}
      </S.DepositWrapper>
   )
}

export default Deposit

