// libs
import thunk from 'redux-thunk';
import { RootStore } from 'store';
import { AnyAction, applyMiddleware, compose, createStore as createReduxStore, Reducer, StoreEnhancer } from 'redux';
// local
import { createAPI } from '@md-shared/services/api';

interface IWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
}

export const initialState: RootStore = {} as RootStore;

export const createStore = (makeRootReducer: Reducer<RootStore, AnyAction>, enhancers: StoreEnhancer[] = []) => (
  preloadedState: RootStore = initialState
) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk.withExtraArgument(createAPI)];

  // ======================================================
  // Store Enhancers
  // ======================================================
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    const extendedWindow = window as IWindow;

    if (typeof extendedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = extendedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  return createReduxStore(
    makeRootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  );
};

export default createStore;
