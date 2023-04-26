import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IUserData, IUserState } from './types'

const initialState: IUserState = {
   userData: null
}

const slice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      updateUserData: (state, { payload }: PayloadAction<IUserData>) => {
         state.userData = payload
      },
      toInitState: (state, { payload }: PayloadAction<[]>) => {
         state = initialState
      },
   },
})

export const { updateUserData, toInitState } = slice.actions
export const userReducer = slice.reducer
