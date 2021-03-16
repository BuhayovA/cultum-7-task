// libs
import { combineReducers } from 'redux';
// shapes
import { UIReducers } from './modules/ui';
import { InitialState as ProductsState } from './modules/products';

export type RootStore = {
  ui: UIReducers;
  products: ProductsState;
};

export const rootStore = combineReducers<RootStore>({
  ui: require('./modules/ui').uiReducers,
  products: require('./modules/products').reducer
});
