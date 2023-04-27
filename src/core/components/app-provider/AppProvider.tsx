import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { selectTheme } from '@/core/redux/selectors'
import { setTheme } from '@/core/redux/slice'
import { useAppDispatch } from '@/core/redux/store'

import ToastCustomContainer from '@/core/components/ui/toast-container/ToastCustomContainer'

import { GlobalStyles } from '@/core/styles/global'
import { EColorTheme, getTheme } from '@/core/styles/theme'

import { routes } from '@/config'

interface IAppProvider {
   children: JSX.Element
}

const Loader = dynamic(() => import('@/core/components/ui/loader/Loader'), {
   ssr: false,
})

const AppProvider: FC<IAppProvider> = ({ children }) => {
   const dispatch = useAppDispatch()
   const router = useRouter()
   const cookiesTheme = Cookies.get('theme') as EColorTheme
   const theme = useSelector(selectTheme)

   useEffect(() => {
      if (cookiesTheme) {
         dispatch(setTheme(cookiesTheme))
      }
   }, [cookiesTheme, dispatch])

   const pageInfo = routes.find(({ path }) => path === router.pathname)

   return (
      <>
         <Head>
            <title>{pageInfo?.title ? `${pageInfo.title} | Fansee Wallet` : 'Fansee Wallet'}</title>
            <meta name="description" content={pageInfo?.description}></meta>
         </Head>
         <ThemeProvider theme={getTheme(theme)}>
            <GlobalStyles />
            <ToastCustomContainer />
            <Loader />
            {children}
         </ThemeProvider>
      </>
   )
}

export default AppProvider
