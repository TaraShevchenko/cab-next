import React, { FC } from 'react'

import * as S from './style'

export interface IBackdrop {
   isActive: boolean;
   onClick?: () => void;
}

const Backdrop: FC<IBackdrop> = ({ isActive, ...rest }) => {
   return (
      <S.Backdrop isActive={isActive} {...rest} />
   )
}

export default Backdrop