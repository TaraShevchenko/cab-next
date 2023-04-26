import type { AppContext, AppProps } from 'next/app'
import App from 'next/app'
import { Manrope } from 'next/font/google'
import localFont from 'next/font/local'
import nextCookies from 'next-cookies'

import { wrapper } from '@/core/redux/store'

import AppProvider from '@/core/components/app-provider/AppProvider'

import { ERoutesAccess, ERoutesPaths, routes } from '@/config'

const akzidenz = localFont({
   weight: '500',
   variable: '--font-akzidenz-grotesk-pro',
   src: '../../public/fonts/Akzidenz-Grotesk-Pro/AkzidenzGroteskPro-MdEx.woff2',
})

const manrope = Manrope({
   weight: '400',
   subsets: [ 'latin' ],
   variable: '--font-manrope',
})

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <main className={`${akzidenz.variable} ${manrope.variable}`}>
         <AppProvider>
            <Component {...pageProps} />
         </AppProvider>
      </main>
   )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
   const appProps = await App.getInitialProps(appContext)
   const { req, pathname } = appContext.ctx
   const cookies = nextCookies({ req })
   const token = cookies?.token
   const route = routes.find((el) => el.path === pathname)

   const isAccessed =
      route &&
      ((route.access === ERoutesAccess.GUEST && !token) ||
         (route.access === ERoutesAccess.AUTHENTICATED_USER && token) ||
         route.access === ERoutesAccess.FULL_ACCESS)

   if (!isAccessed) {
      appContext?.ctx?.res?.writeHead(302, {
         Location: token ? ERoutesPaths.DASHBOARD : ERoutesPaths.SIGN_IN,
      })
      appContext?.ctx?.res?.end()
   } else {
      appProps.pageProps = { ...appProps.pageProps, token }
   }

   return appProps
}

export default wrapper.withRedux(MyApp)
