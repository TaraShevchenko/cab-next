import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import * as S from './style'

const ToastCustomContainer = () => {
   return (
      <S.ToastContainer>
         <ToastContainer />
      </S.ToastContainer>
   )
}

export default ToastCustomContainer
