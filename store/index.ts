// libs
import { combineReducers } from 'redux';
// shapes
import { UIReducers } from './modules/ui';
import { InitialState as ProductsState } from './modules/products';
import { InitialState as PokemonsState } from './modules/pokemons';

export type RootStore = {
  ui: UIReducers;
  products: ProductsState;
  pokemons: PokemonsState;
};

export const rootStore = combineReducers<RootStore>({
  ui: require('./modules/ui').uiReducers,
  products: require('./modules/products').reducer,
  pokemons: require('./modules/pokemons').reducer
});
