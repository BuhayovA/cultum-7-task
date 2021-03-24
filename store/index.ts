// libs
import { combineReducers } from 'redux';
// shapes
import { UIReducers } from './modules/ui';
import { InitialState as ProductsState } from './modules/products';
import { InitialState as PokemonsState } from './modules/pokemons';
import { InitialState as PokemonState } from './modules/pokemon';

export type RootStore = {
  ui: UIReducers;
  products: ProductsState;
  pokemons: PokemonsState;
  pokemon: PokemonState;
};

export const rootStore = combineReducers<RootStore>({
  ui: require('./modules/ui').uiReducers,
  products: require('./modules/products').reducer,
  pokemons: require('./modules/pokemons').reducer,
  pokemon: require('./modules/pokemon').reducer
});
