/* eslint-disable @typescript-eslint/no-unused-vars */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ITemplateState } from './types'

const initialState: ITemplateState = {
   value: '',
}

const slice = createSlice({
   name: 'template',

   initialState,

   reducers: {
      toInitState: (state, { payload }: PayloadAction<[]>) => {
         state = initialState
      },
   },
})

export const { toInitState } = slice.actions

export const templateReducer = slice.reducer
