import React from 'react'

import DatePicker from '@/core/components/datepicker/DatePicker'
import LoaderOnPage from '@/core/components/ui/loader-on-page/LoaderOnPage'

import { convertNumberForView } from '@/core/utils/convertNumberForView'

import * as S from './style'

const TransactionsHistoryTable = () => {
   return (
      <>
         <S.DateFilterWrapper>
            <DatePicker />
         </S.DateFilterWrapper>

         <S.TransactionWrapper>
            <S.Transaction>
               <S.TransactionCol>
                  <S.ColName>Operation</S.ColName>
                  <S.ColValue>Buy tokens (FST)</S.ColValue>
                  <S.ColSubValue>Buying with BTC</S.ColSubValue>
               </S.TransactionCol>
               <S.TransactionCol>
                  <S.ColName>Date</S.ColName>
                  <S.ColValue>17.03.2023</S.ColValue>
               </S.TransactionCol>
               <S.TransactionCol>
                  <S.ColName>Status</S.ColName>
                  <S.ColValue color="green">Done</S.ColValue>
               </S.TransactionCol>
               <S.TransactionCol>
                  <S.ColName>Amount</S.ColName>
                  <S.ColValue color="green">+ 10 FST</S.ColValue>
                  <S.ColSubValue>+ {convertNumberForView(2234.30123)} USDT</S.ColSubValue>
               </S.TransactionCol>
            </S.Transaction>
            <S.Transaction>
               <S.TransactionCol>
                  <S.ColName>Operation</S.ColName>
                  <S.ColValue>Withdrawals</S.ColValue>
                  <S.ColSubValue>Withdrawals with ETH</S.ColSubValue>
               </S.TransactionCol>
               <S.TransactionCol>
                  <S.ColName>Date</S.ColName>
                  <S.ColValue>26.02.2023</S.ColValue>
               </S.TransactionCol>
               <S.TransactionCol>
                  <S.ColName>Status</S.ColName>
                  <S.ColValue color="yellow">In progress</S.ColValue>
               </S.TransactionCol>
               <S.TransactionCol>
                  <S.ColName>Amount</S.ColName>
                  <S.ColValue color="red">- 5 FST</S.ColValue>
                  <S.ColSubValue>- {convertNumberForView(1117.15123)} USDT</S.ColSubValue>
               </S.TransactionCol>
            </S.Transaction>
         </S.TransactionWrapper>

         <LoaderOnPage />
      </>
   )
}

export default TransactionsHistoryTable
