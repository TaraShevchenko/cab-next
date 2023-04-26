/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, AnyAction, combineReducers, configureStore, Middleware, ThunkAction, } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { useDispatch } from 'react-redux'

import { coreApi } from '@/core/redux/api'
import { coreReducer } from '@/core/redux/slice'
import { transactionsReducer } from '@/modules/transactions/redux/slice'
import { userReducer } from '@/modules/user/redux/slice'

const combinedReducer = combineReducers({
   app: coreReducer,
   user: userReducer,
   transactions: transactionsReducer,
   [coreApi.reducerPath]: coreApi.reducer,
})

const reducer: any = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
   if (action.type === HYDRATE) {
      return {
         ...state,
         ...action.payload,
      }
   } else {
      return combinedReducer(state, action)
   }
}

export const makeStore: any = () =>
   configureStore({
      reducer,
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware().concat(coreApi.middleware as Middleware),
   })

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
   RootState,
   unknown,
   Action<string>>;

export const wrapper = createWrapper(makeStore, { debug: true })

export const useAppDispatch: () => AppDispatch = useDispatch