import dynamic from 'next/dynamic'
import React, { FC, ReactNode } from 'react'

import Header from './header/Header'
import Navbar from './navbar/Navbar'
import * as S from './style'

const ClientShadowScrollbars = dynamic(
   () => import('@/core/components/ui/shadow-scrollbars/ShadowScrollbars'),
   {
      ssr: false,
   }
)

const Layout: FC<{ children?: ReactNode }> = ({ children }) => (
   <S.LayoutWrapper>
      <S.NavbarWrapper>
         <Navbar/>
      </S.NavbarWrapper>
      <S.ContentWrapper>
         <ClientShadowScrollbars>
            <Header/>
            <S.ContentOffset>
               {children || ''}
            </S.ContentOffset>
         </ClientShadowScrollbars>
      </S.ContentWrapper>
   </S.LayoutWrapper>
)

export default Layout