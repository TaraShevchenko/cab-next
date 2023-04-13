import { useRouter } from 'next/router'
import React, { FC } from 'react'

import NavLink from '@/core/components/ui/nav-link/NavLink'

import { NAVBAR_MENU } from '../config'
import * as S from '../style'

const NavbarList: FC<{ handleItemClick: () => void }> = ({ handleItemClick }) => {
   const { pathname } = useRouter()
   const onLinkClick = (url: string) => {
      pathname !== url && handleItemClick()
   }
   return (
      <>
         {NAVBAR_MENU.map(({ name, icon: Icon, url }) => (
            <S.ListItem key={name} isActive={pathname === url}>
               <NavLink to={url} onClick={() => onLinkClick(url)}>
                  <S.ListItemIcon>
                     <Icon/>
                  </S.ListItemIcon>
                  <S.ListItemText>{name}</S.ListItemText>
               </NavLink>
            </S.ListItem>
         ))}
      </>
   )
}

export default NavbarList