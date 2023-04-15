import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { selectTheme } from '@/core/redux/selectors'
import { selectToken } from '@/modules/auth/redux/selectors'

import ToastCustomContainer from '@/core/components/ui/toast-container/ToastCustomContainer'

import { GlobalStyles } from '@/core/styles/global'
import { getTheme } from '@/core/styles/theme'

import { ERoutesAccess, ERoutesPaths, routes } from '@/config'

interface IAppProvider {
   children: React.ReactNode;
}

const Loader = dynamic(
   () => import('@/core/components/ui/loader/Loader'),
   {
      ssr: false,
   }
)

const AppProvider: FC<IAppProvider> = ({ children }) => {
   const router = useRouter()
   const theme = useSelector(selectTheme)
   const token = useSelector(selectToken)

   const [ allowedToView, setAllowedToView ] = useState(false)

   useEffect(() => {
      const route = routes.find(el => el.path === router.pathname)

      const isAccessed = route ? (route.access === ERoutesAccess.GUEST && !token)
         || (route.access === ERoutesAccess.AUTHENTICATED_USER && token)
         || route.access === ERoutesAccess.FULL_ACCESS : false
      setAllowedToView(isAccessed)

      if (!isAccessed) {
         router.push(token ? ERoutesPaths.DASHBOARD : ERoutesPaths.SIGN_IN)
      }
   }, [ router, token ])

   const pageInfo = routes.find(({ path }) => path === router.pathname)
   return (
      <>
         <Head>
            <title>{pageInfo?.title} | Fansee Wallet</title>
            <meta name="description" content={pageInfo?.description}></meta>
         </Head>
         <ThemeProvider theme={getTheme(theme)}>
            <GlobalStyles/>
            <ToastCustomContainer/>
            <Loader/>

            {allowedToView && children}
         </ThemeProvider>
      </>
   )
}

export default AppProvider