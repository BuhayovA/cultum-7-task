// libs
import { combineReducers } from 'redux';
// shapes
import { UIReducers } from './modules/ui';
import { InitialState as ProductsState } from './modules/products';
import { InitialState as PokemonsState } from './modules/pokemons';
import { InitialState as PokemonState } from './modules/pokemon';
import { InitialState as DescriptionState } from './modules/description';

export type RootStore = {
  ui: UIReducers;
  products: ProductsState;
  pokemons: PokemonsState;
  pokemon: PokemonState;
  description: DescriptionState;
};

export const rootStore = combineReducers<RootStore>({
  ui: require('./modules/ui').uiReducers,
  products: require('./modules/products').reducer,
  pokemons: require('./modules/pokemons').reducer,
  pokemon: require('./modules/pokemon').reducer,
  description: require('./modules/description').reducer
});
