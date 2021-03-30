// libs
import { combineReducers } from 'redux';
// shapes
import { UIReducers } from './modules/ui';
import { PokemonsReducers } from './modules/pokemons';
import { InitialState as ProductsState } from './modules/products';
import { InitialState as PokemonState } from './modules/pokemon';

export type RootStore = {
  ui: UIReducers;
  pokemons: PokemonsReducers;
  products: ProductsState;
  pokemon: PokemonState;
};

export const rootStore = combineReducers<RootStore>({
  ui: require('./modules/ui').uiReducers,
  pokemons: require('./modules/pokemons').pokemonsReducers,
  products: require('./modules/products').reducer,
  pokemon: require('./modules/pokemon').reducer
});
