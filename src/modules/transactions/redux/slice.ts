import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICurrency } from '@/modules/currencies/redux/types';

import { ITransactionsState } from './types';

const initialState: ITransactionsState = {
   activeDepositCurrency: null
};

const slice = createSlice({
   name: 'transactions',
   initialState,
   reducers: {
      setActiveDepositCurrency: (state, { payload }: PayloadAction<ICurrency>) => {
         state.activeDepositCurrency = payload;
      },
      toInitState: (state) => {
         state = initialState
      },
   },
})

export const { toInitState, setActiveDepositCurrency } = slice.actions
export const transactionsReducer = slice.reducer;
