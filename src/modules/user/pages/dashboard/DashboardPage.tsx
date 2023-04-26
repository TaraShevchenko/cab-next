import { GetServerSideProps } from 'next'
import nextCookies from 'next-cookies'
import React from 'react'

import { RootState, wrapper } from '@/core/redux/store'
import { updateUserData } from '@/modules/user/redux/slice'
import { IUserData } from '@/modules/user/redux/types'

import Layout from '@/core/components/layout/Layout'

import { baseFetchToNext } from '@/core/utils/baseFetchToNext'

import Dashboard from '../../components/dashboard/Dashboard'
import { API_ROUTES } from '@/config'

const DashboardPage = () => {
   return (
      <Layout>
         <Dashboard/>
      </Layout>
   )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store: RootState) => async ({ req }) => {
   const cookies = nextCookies({ req })

   const user: IUserData = await baseFetchToNext(API_ROUTES.USER(cookies?.user_id || ''), req, {})
   store.dispatch(updateUserData(user))

   return {
      props: {},
   }
})

export default DashboardPage