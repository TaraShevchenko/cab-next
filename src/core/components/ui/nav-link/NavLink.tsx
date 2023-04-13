/* eslint-disable @typescript-eslint/no-misused-promises */
import { useRouter } from 'next/router'
import React, { FC, ReactNode, MouseEvent } from 'react'

import useLoading from '@/core/hooks/useLoading'

export interface ILink {
   to: string;
   children: ReactNode;
   onClick?: () => void;
}

const NavLink:FC<ILink> = ({ to, children, onClick, ...props }) => {
   const { push } = useRouter()
   const handleLoadingBefore = useLoading()
   const convertedTo = `/${to[0] === '/' ? to.slice(1) : to}`

   const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      handleLoadingBefore(() => push(`/${to[0] === '/' ? to.slice(1) : to}`))
      !!onClick && onClick()
   }

   return (
      <a href={convertedTo} onClick={handleClick} {...props}>
         {children}
      </a>
   )
}

export default NavLink