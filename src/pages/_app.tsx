import type { AppProps } from 'next/app'
import { Manrope } from 'next/font/google'
import localFont from 'next/font/local'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from '@/core/redux/store'

import AppProvider from '@/core/components/app-provider/AppProvider'

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

export default function App({ Component, pageProps }: AppProps) {
   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <main className={`${akzidenz.variable} ${manrope.variable}`}>
               <AppProvider>
                  <Component {...pageProps} />
               </AppProvider>
            </main>
         </PersistGate>
      </Provider>
   )
}
