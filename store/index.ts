// libs
import { combineReducers } from 'redux';
// shapes
import { UIReducers } from './modules/ui';
import { InitialState as ProductsState } from './modules/products';
import { InitialState as SpeciesState } from './modules/species';

export type RootStore = {
  ui: UIReducers;
  products: ProductsState;
  species: SpeciesState;
};

export const rootStore = combineReducers<RootStore>({
  ui: require('./modules/ui').uiReducers,
  products: require('./modules/products').reducer,
  species: require('./modules/species').reducer
});
