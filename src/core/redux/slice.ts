import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { EColorTheme } from '@/core/styles/theme'

export interface IAppState {
   theme: EColorTheme
   loading: boolean
   disabledLoading: boolean
}

const initialState: IAppState = {
   theme: EColorTheme.dark,
   loading: false,
   disabledLoading: false,
}

export const slice = createSlice({
   name: 'core',
   initialState,
   reducers: {
      setTheme: (state, { payload }: PayloadAction<EColorTheme>) => {
         state.theme = payload
         Cookies.set('theme', payload)
      },
      setLoading: (state, { payload }: PayloadAction<boolean>) => {
         state.loading = payload
      },
      setDisabledLoading: (state, { payload }: PayloadAction<boolean>) => {
         state.disabledLoading = payload
      },
   },
})

export const coreReducer = slice.reducer
export const { setTheme, setLoading, setDisabledLoading } = slice.actions
