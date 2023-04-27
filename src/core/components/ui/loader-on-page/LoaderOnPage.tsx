import React from 'react'

import * as S from './style'

const LoaderOnPage = () => {
   return (
      <S.LoaderWrapper>
         <div className="loader">
            <svg className="circular-loader" viewBox="25 25 50 50">
               <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#10EAB5" strokeWidth="1" />
            </svg>
         </div>
      </S.LoaderWrapper>
   )
}

export default LoaderOnPage
