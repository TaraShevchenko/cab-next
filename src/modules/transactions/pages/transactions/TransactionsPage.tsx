import React from 'react'

import Layout from '@/core/components/layout/Layout'

import TransactionsHistoryTable from '../../components/transactions-history-table/TransactionsHistoryTable'

const TransactionsPage = () => {
   return (
      <Layout>
         <TransactionsHistoryTable/>
      </Layout>
   )
}

export default TransactionsPage