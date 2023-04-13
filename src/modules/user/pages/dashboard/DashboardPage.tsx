import { GetServerSideProps } from 'next'
import nextCookies from 'next-cookies';
import React from 'react'

import Layout from '@/core/components/layout/Layout'

import Dashboard from '../../components/dashboard/Dashboard'

const DashboardPage = () => {
   return (
      <Layout>
         <Dashboard/>
      </Layout>
   )
}

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
   const cookies = nextCookies({ req });
   const res = await fetch(`/users/${cookies.user_id}`, {
      headers: {
         Authorization: `Bearer ${cookies.token}`,
      },
   });
   const user = await res.json();
   return {
      props: {
         user,
      },
   };
}

export default DashboardPage