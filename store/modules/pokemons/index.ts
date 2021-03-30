import { combineReducers } from 'redux';
// local
import * as pokemons from './pokemons';
import * as descriptions from './description';

export type PokemonsReducers = {
  pokemons: pokemons.InitialState;
  descriptions: descriptions.InitialState;
};

export const pokemonsReducers = combineReducers<PokemonsReducers>({
  pokemons: pokemons.reducer,
  descriptions: descriptions.reducer
});

export { pokemons, descriptions };
