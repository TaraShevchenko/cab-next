import { configureStore, Middleware } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { combineReducers, Store } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { coreApi } from '@/core/redux/api'
import { coreReducer } from '@/core/redux/slice'
import { authReducer } from '@/modules/auth/redux/slice'
import { transactionsReducer } from '@/modules/transactions/redux/slice'

const rootReducer = combineReducers({
   app: coreReducer,
   auth: authReducer,
   transactions: transactionsReducer,
   [coreApi.reducerPath]: coreApi.reducer,
})

const persistConfig = {
   key: 'root',
   storage,
   whitelist: [ 'auth' ],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store: Store = configureStore({
   reducer: persistedReducer,
   devTools: process.env.NODE_ENV !== 'production',
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [ 'persist/PERSIST', 'persist/REHYDRATE' ],
         },
      }).concat(coreApi.middleware as Middleware),
})

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const useAppDispatch: () => TAppDispatch = useDispatch

export const persistor = persistStore(store)

export default store
