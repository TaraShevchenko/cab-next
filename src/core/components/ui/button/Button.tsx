import { FC } from 'react'

import NavLink from '@/core/components/ui/nav-link/NavLink'

import * as S from './styles'
import { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({ disabled = false, children, href, ...props }) => (
   <>
      {href
         ? <NavLink to={href}><S.Span {...props}>{children}</S.Span></NavLink>
         : <S.Button disabled={disabled} {...props}>{children}</S.Button>}
   </>
)

export default Button
