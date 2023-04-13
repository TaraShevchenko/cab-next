import React, { FC, ReactNode } from 'react'
import SimpleBarReact from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

import * as S from './style'

export interface IShadowScrollbars {
   children: ReactNode;
}

const ShadowScrollbars: FC<IShadowScrollbars> = ({ children }) => {
   return (
      <S.ScrollWrapper>
         <S.TopScrollShadow/>
         <SimpleBarReact style={{ maxHeight: '100%' }}>
            {children}
         </SimpleBarReact>
         <S.BottomScrollShadow/>
      </S.ScrollWrapper>
   )
}

export default ShadowScrollbars