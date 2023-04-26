import { RootState } from '@/core/redux/store'

export const selectTheme = (state: RootState) => state.app.theme
export const selectLoading = (state: RootState) => state.app.loading
