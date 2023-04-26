import { useEffect } from 'react';
import { Store } from 'redux';

import { RootState } from '@/core/redux/store';

export function useHydrateStore(store: Store, initialState: RootState): void {
   useEffect(() => {
      store.dispatch({ type: 'persist/PERSIST' });
      store.dispatch({ type: 'persist/REHYDRATE', payload: initialState });
   }, [store, initialState]);
}