import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { useLogoutMutation } from '@/modules/auth/redux/api'
import { selectUserData } from '@/modules/user/redux/selectors'

import NavbarList from '@/core/components/layout/navbar/navbar-list/NavbarList'
import ToggleTheme from '@/core/components/toggle-theme/ToggleTheme'
import Backdrop from '@/core/components/ui/backdrop/Backdrop'

import useClickOutside from '@/core/hooks/useClickOutside'
import useLoading from '@/core/hooks/useLoading'

import { notificationContainer } from '@/core/utils/notofication-container'

import Arrow from '@/core/assets/icons/arrow.svg'
import AvatarBlank from '@/core/assets/icons/avatar-blank.svg'
import Burger from '@/core/assets/icons/burger.svg'
import Close from '@/core/assets/icons/close.svg'
import Logout from '@/core/assets/icons/logout.svg'

import NotificationDropdown from './notification-dropdown/NotificationDropdown'
import * as S from './style'
import { ERoutesPaths, routes } from '@/config'

const Header = () => {
   const userData = useSelector(selectUserData)

   const handleLoadingBefore = useLoading()
   const { pathname, push } = useRouter()

   const pageInfo = routes.find(({ path }) => path === pathname)

   const [isOpenDropdown, setIsOpenDropdown] = useState(false)
   const handleToggleDropdown = () => {
      setIsOpenDropdown(!isOpenDropdown)
   }
   const handleCloseDropdown = () => {
      setIsOpenDropdown(false)
   }

   const dropdownRef = useRef(null)
   useClickOutside(dropdownRef, handleCloseDropdown)

   const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
   const handleToggleMobileMenu = () => {
      setIsOpenMobileMenu(!isOpenMobileMenu)
   }
   const handleCloseMobileMenu = () => {
      setIsOpenMobileMenu(false)
   }

   const [handleLogout] = useLogoutMutation()

   const handleLogOut = async () => {
      try {
         const response = await handleLogout()

         if ('error' in response) {
            notificationContainer('Logout failed !', 'error')
         } else {
            handleLoadingBefore(() => {
               push(ERoutesPaths.SIGN_IN)
               Cookies.set('token', '')
               Cookies.set('user_id', '')
               notificationContainer('Logout success !', 'success')
               return undefined
            })
         }
      } catch (err) {
         notificationContainer('Logout failed !', 'error')
      }

      // TODO: - remove this after deploy backend
      handleLoadingBefore(() => {
         push(ERoutesPaths.SIGN_IN)
         Cookies.set('token', '')
         Cookies.set('user_id', '')
      })
   }

   return (
      <S.HeaderWrapper>
         <S.Title>{pageInfo?.title}</S.Title>

         <S.ToggleThemeWrapper>
            <ToggleTheme />
         </S.ToggleThemeWrapper>

         <NotificationDropdown />

         <S.BurgerWrapper onClick={handleToggleMobileMenu}>
            <Burger />
         </S.BurgerWrapper>

         <S.ProfileWrapper isActive={isOpenDropdown} ref={dropdownRef}>
            <S.ProfilePhotoWrapper>
               {userData?.user_image ? (
                  <S.ProfilePhoto height={50} width={50} src={userData.user_image} alt={userData.first_name} />
               ) : (
                  <AvatarBlank />
               )}
            </S.ProfilePhotoWrapper>
            <S.ProfileName onClick={handleToggleDropdown}>
               <S.ProfileNameText>
                  {`${userData?.first_name} ${userData?.last_name}` || `id${userData?.id}` || ''}
               </S.ProfileNameText>
               <Arrow />
            </S.ProfileName>
            <S.ProfileDropdown>
               <S.ProfileDropdownTriangleBorder />
               <S.ProfileItem>Account settings</S.ProfileItem>
               <S.ProfileItem onClick={handleLogOut}>Log Out</S.ProfileItem>
            </S.ProfileDropdown>
         </S.ProfileWrapper>

         <S.MobileMenuWrapper isActive={isOpenMobileMenu}>
            <S.MobileMenuHeader>
               <S.MobileMenuProfileWrapper>
                  <S.ProfilePhotoWrapper>
                     <AvatarBlank />
                  </S.ProfilePhotoWrapper>
                  <S.ProfileName onClick={handleToggleDropdown}>
                     {`${userData?.first_name} ${userData?.last_name}` || `id${userData?.id || ''}` || ''}
                  </S.ProfileName>
               </S.MobileMenuProfileWrapper>

               <S.BurgerWrapper onClick={handleCloseMobileMenu}>
                  <Close />
               </S.BurgerWrapper>
            </S.MobileMenuHeader>

            <S.MobileMenuNavbarWrapper>
               <NavbarList handleItemClick={handleCloseMobileMenu} />
            </S.MobileMenuNavbarWrapper>

            <S.MobileMenuFooter>
               <S.MobileMenuLogOutButton onClick={handleLogOut}>
                  <Logout />
                  Log Out
               </S.MobileMenuLogOutButton>
               <ToggleTheme />
            </S.MobileMenuFooter>
         </S.MobileMenuWrapper>
         <Backdrop isActive={isOpenMobileMenu} onClick={handleCloseMobileMenu} />
      </S.HeaderWrapper>
   )
}

export default Header
