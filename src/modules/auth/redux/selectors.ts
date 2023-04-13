import { TRootState } from '@/core/redux/store'

export const selectEmail = (state: TRootState) => state.auth.email
export const selectToken = (state: TRootState) => state.auth.token