import React, { useState } from 'react'

import Backdrop from '@/core/components/ui/backdrop/Backdrop'

import Burger from '@/core/assets/icons/burger.svg'
import Close from '@/core/assets/icons/close.svg'
import LogoIcon from '@/core/assets/icons/logo.svg'
import NavbarLogo from '@/core/assets/icons/navbar-logo.svg'

import NavbarList from './navbar-list/NavbarList'
import * as S from './style'

const Navbar = () => {
   const [navbarFull, setNavbarFull] = useState(false)
   const handleToggleNavbarSize = () => {
      setNavbarFull(!navbarFull)
   }
   const handleDisableNavbarFullSize = () => {
      setNavbarFull(false)
   }
   return (
      <>
         <S.NavbarWrapper isFull={navbarFull}>
            <S.Logo>
               <NavbarLogo />
            </S.Logo>
            <S.MobileLogo>{navbarFull ? <NavbarLogo /> : <LogoIcon />}</S.MobileLogo>
            <S.List>
               <S.BurgerIconWrapper>
                  <S.BurgerIcon onClick={handleToggleNavbarSize}>{navbarFull ? <Close /> : <Burger />}</S.BurgerIcon>
               </S.BurgerIconWrapper>
               <NavbarList handleItemClick={handleDisableNavbarFullSize} />
            </S.List>
         </S.NavbarWrapper>
         <Backdrop isActive={navbarFull} onClick={handleDisableNavbarFullSize} />
      </>
   )
}

export default Navbar
