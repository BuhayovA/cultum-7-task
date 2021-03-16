import * as React from 'react';
// libs
import { initializeStore } from 'lib/redux/initStore';
// types
import { RootStore } from 'store';

export function useStore(initialState?: RootStore) {
  return React.useMemo(() => initializeStore(initialState), [initialState]);
}
