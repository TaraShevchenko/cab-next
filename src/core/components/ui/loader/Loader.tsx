import { useEffect, useLayoutEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { selectLoading } from '@/core/redux/selectors'

import Logo from '@/core/assets/icons/luminous-logo.svg'

import * as S from './styles'

let timeout: NodeJS.Timeout
const Loader = () => {
   const loading = useSelector(selectLoading)
   const [isActive, setIsActive] = useState(false)

   useEffect(() => {
      if (loading) {
         setIsActive(true)
      } else {
         clearTimeout(timeout)
         timeout = setTimeout(() => {
            setIsActive(false)
         }, 400)
      }
   }, [loading])

   const [enableLoader, setEnableLoader] = useState(false)
   useLayoutEffect(() => {
      setEnableLoader(true)
   }, [])

   return (
      <>
         {enableLoader && (
            <S.LoaderWrapper isActive={isActive}>
               <S.LoaderBackground />
               <div className="loader-wrapper">
                  <div className="loader">
                     <svg className="circular-loader" viewBox="25 25 50 50">
                        <circle
                           className="loader-path"
                           cx="50"
                           cy="50"
                           r="20"
                           fill="none"
                           stroke="#10EAB5"
                           strokeWidth="1"
                        />
                     </svg>
                  </div>
               </div>
               <S.LoaderLogo>
                  <Logo />
               </S.LoaderLogo>
            </S.LoaderWrapper>
         )}
      </>
   )
}

export default Loader
