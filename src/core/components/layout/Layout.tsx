import React, { FC, ReactNode } from 'react'

import ShadowScrollbars from '@/core/components/ui/shadow-scrollbars/ShadowScrollbars'

import Header from './header/Header'
import Navbar from './navbar/Navbar'
import * as S from './style'

const Layout: FC<{ children?: ReactNode }> = ({ children }) => (
   <S.LayoutWrapper>
      <S.NavbarWrapper>
         <Navbar />
      </S.NavbarWrapper>
      <S.ContentWrapper>
         <ShadowScrollbars>
            <Header />
            <S.ContentOffset>{children || ''}</S.ContentOffset>
         </ShadowScrollbars>
      </S.ContentWrapper>
   </S.LayoutWrapper>
)

export default Layout
