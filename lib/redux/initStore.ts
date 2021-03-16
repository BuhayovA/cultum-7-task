import { AnyAction, Store } from 'redux';
import { RootStore, rootStore } from 'store/index';
import createStore from './createStore';

let store: (Store<RootStore, AnyAction> & { dispatch: unknown }) | undefined;

export const initializeStore = (preloadedState?: RootStore) => {
  let _store = store ?? createStore(rootStore)(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = createStore(rootStore)({
      ...store.getState(),
      ...preloadedState
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};
