import React, { useRef, useState } from 'react'

import NavLink from '@/core/components/ui/nav-link/NavLink'

import useClickOutside from '@/core/hooks/useClickOutside'

import Notifications from '@/core/assets/icons/notifications.svg'

import * as S from './style'

const NotificationDropdown = () => {
   const [isOpenDropdown, setIsOpenDropdown] = useState(false)
   const handleToggleDropdown = () => {
      setIsOpenDropdown(!isOpenDropdown)
   }
   const handleCloseDropdown = () => {
      setIsOpenDropdown(false)
   }

   const dropdownRef = useRef(null)
   useClickOutside(dropdownRef, handleCloseDropdown)
   return (
      <S.NotificationsWrapper ref={dropdownRef}>
         <S.NotificationsButton onClick={handleToggleDropdown}>
            <Notifications />
         </S.NotificationsButton>

         <S.NotificationDropdown isOpen={isOpenDropdown}>
            <S.NotificationDropdownTriangleBorder />
            <S.NotificationItem>
               <S.NotificationItemDate>Today, 10:25</S.NotificationItemDate>
               <S.NotificationItemText>
                  Bought
                  <S.NotificationItemHighlightedText>1 FST</S.NotificationItemHighlightedText>
                  with
                  <S.NotificationItemHighlightedText>0.14 ETH</S.NotificationItemHighlightedText>
               </S.NotificationItemText>
            </S.NotificationItem>
            <S.NotificationItem>
               <S.NotificationItemDate>Today, 10:25</S.NotificationItemDate>
               <S.NotificationItemText>
                  Bought
                  <S.NotificationItemHighlightedText>2 FST</S.NotificationItemHighlightedText>
                  with
                  <S.NotificationItemHighlightedText>0.28 ETH</S.NotificationItemHighlightedText>
               </S.NotificationItemText>
            </S.NotificationItem>
            <S.NotificationItem>
               <S.NotificationItemDate>Today, 10:25</S.NotificationItemDate>
               <S.NotificationItemText>
                  You have new referral
                  <S.NotificationItemHighlightedText>Jakob Weiss</S.NotificationItemHighlightedText>
               </S.NotificationItemText>
            </S.NotificationItem>
            <NavLink to="/notifications">
               <S.NotificationViewAll>View All</S.NotificationViewAll>
            </NavLink>
         </S.NotificationDropdown>
      </S.NotificationsWrapper>
   )
}

export default NotificationDropdown
