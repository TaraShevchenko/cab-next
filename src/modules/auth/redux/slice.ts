import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IAuthSlice, IAuthResponse } from './types'

const initialState: IAuthSlice = {
   id: null,
   token: null
}

const slice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setCredentials: (state, { payload }: PayloadAction<IAuthResponse>) => {
         const { token, id } = payload
         state.id = id
         state.token = token
      },
      logOut: (state) => {
         state.id = null
         state.token = null
      }
   },
})

export const { setCredentials, logOut } = slice.actions
export const authReducer = slice.reducer
