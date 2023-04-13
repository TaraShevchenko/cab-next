import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'

import { useAppDispatch } from '@/core/redux/store'
import { logOut } from '@/modules/auth/redux/slice'

import NavbarList from '@/core/components/layout/navbar/navbar-list/NavbarList'
import ToggleTheme from '@/core/components/toggle-theme/ToggleTheme'
import Backdrop from '@/core/components/ui/backdrop/Backdrop'

import useClickOutside from '@/core/hooks/useClickOutside'
import useLoading from '@/core/hooks/useLoading'

import Arrow from '@/core/assets/icons/arrow.svg'
import AvatarBlank from '@/core/assets/icons/avatar-blank.svg'
import Burger from '@/core/assets/icons/burger.svg'
import Close from '@/core/assets/icons/close.svg'
import Logout from '@/core/assets/icons/logout.svg'

import { USER_DATA } from './config'
import NotificationDropdown from './notification-dropdown/NotificationDropdown'
import * as S from './style'
import { ERoutesPaths, routes } from '@/config'

const Header = () => {
   const dispatch = useAppDispatch()
   const handleLoadingBefore = useLoading()
   const { pathname, push } = useRouter()
   const pageInfo = routes.find(({ path }) => path === pathname)

   const [ isOpenDropdown, setIsOpenDropdown ] = useState(false)
   const handleToggleDropdown = () => {
      setIsOpenDropdown(!isOpenDropdown)
   }
   const handleCloseDropdown = () => {
      setIsOpenDropdown(false)
   }

   const dropdownRef = useRef(null)
   useClickOutside(dropdownRef, handleCloseDropdown)

   const [ isOpenMobileMenu, setIsOpenMobileMenu ] = useState(false)
   const handleToggleMobileMenu = () => {
      setIsOpenMobileMenu(!isOpenMobileMenu)
   }
   const handleCloseMobileMenu = () => {
      setIsOpenMobileMenu(false)
   }

   const handleLogOut = () => {
      handleLoadingBefore(() => {
         dispatch(logOut())
         push(ERoutesPaths.SIGN_IN)
      })
   }

   return (
      <S.HeaderWrapper>
         <S.Title>{pageInfo?.title}</S.Title>

         <S.ToggleThemeWrapper>
            <ToggleTheme/>
         </S.ToggleThemeWrapper>

         <NotificationDropdown/>

         <S.BurgerWrapper onClick={handleToggleMobileMenu}>
            <Burger/>
         </S.BurgerWrapper>

         <S.ProfileWrapper isActive={isOpenDropdown} ref={dropdownRef}>
            <S.ProfilePhotoWrapper>
               {
                  USER_DATA?.user_image
                     ? <S.ProfilePhoto
                        height={50} width={50}
                        src={USER_DATA.user_image}
                        alt={USER_DATA.first_name}
                     />
                     : <AvatarBlank/>
               }
            </S.ProfilePhotoWrapper>
            <S.ProfileName onClick={handleToggleDropdown}>
               {`${USER_DATA?.first_name} ${USER_DATA?.last_name}` || `id${USER_DATA?.id}` || ''}
               <Arrow/>
            </S.ProfileName>
            <S.ProfileDropdown>
               <S.ProfileDropdownTriangleBorder/>
               <S.ProfileItem>
                  Account settings
               </S.ProfileItem>
               <S.ProfileItem onClick={handleLogOut}>
                  Log Out
               </S.ProfileItem>
            </S.ProfileDropdown>
         </S.ProfileWrapper>

         <S.MobileMenuWrapper isActive={isOpenMobileMenu}>
            <S.MobileMenuHeader>

               <S.MobileMenuProfileWrapper>
                  <S.ProfilePhotoWrapper>
                     <AvatarBlank/>
                  </S.ProfilePhotoWrapper>
                  <S.ProfileName onClick={handleToggleDropdown}>
                     {`${USER_DATA?.first_name} ${USER_DATA?.last_name}` || `id${USER_DATA?.id || ''}` || ''}
                  </S.ProfileName>
               </S.MobileMenuProfileWrapper>

               <S.BurgerWrapper onClick={handleCloseMobileMenu}>
                  <Close/>
               </S.BurgerWrapper>

            </S.MobileMenuHeader>

            <S.MobileMenuNavbarWrapper>
               <NavbarList handleItemClick={handleCloseMobileMenu}/>
            </S.MobileMenuNavbarWrapper>

            <S.MobileMenuFooter>
               <S.MobileMenuLogOutButton onClick={handleLogOut}>
                  <Logout/>
                  Log Out
               </S.MobileMenuLogOutButton>
               <ToggleTheme/>
            </S.MobileMenuFooter>

         </S.MobileMenuWrapper>
         <Backdrop isActive={isOpenMobileMenu} onClick={handleCloseMobileMenu}/>
      </S.HeaderWrapper>
   )
}

export default Header