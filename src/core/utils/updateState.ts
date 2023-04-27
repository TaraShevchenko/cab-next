import { RootState } from '@/core/redux/store'

const updateState = (state: RootState, newState: Partial<RootState>): RootState => {
   return {
      ...state,
      ...newState,
   }
}

export default updateState
