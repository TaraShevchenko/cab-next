import { TRootState } from '@/core/redux/store';

export const selectActiveDepositCurrency = (state: TRootState) => state.transactions.activeDepositCurrency