import { TRootState } from '@/core/redux/store'

export const selectTheme = (state: TRootState) => state.app.theme
export const selectLoading = (state: TRootState) => state.app.loading