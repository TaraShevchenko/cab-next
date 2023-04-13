import { createSlice } from '@reduxjs/toolkit'

import { EColorTheme } from '@/core/styles/theme'

export interface IAppState {
   theme: EColorTheme;
   loading: boolean;
   disabledLoading: boolean;
}

const initialState: IAppState = {
   theme: EColorTheme.dark,
   loading: false,
   disabledLoading: false
}

export const slice = createSlice({
   name: 'core',
   initialState,
   reducers: {
      setTheme: (state, { payload }) => {
         state.theme = payload
      },
      setLoading: (state, { payload }) => {
         state.loading = payload
      },
      setDisabledLoading: (state, { payload }) => {
         state.loading = payload
      },
   },
})

export const coreReducer = slice.reducer
export const { setTheme, setLoading, setDisabledLoading } = slice.actions
