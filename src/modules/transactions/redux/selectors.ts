import { RootState } from '@/core/redux/store'

export const selectActiveDepositCurrency = (state: RootState) => state.transactions.activeDepositCurrency
