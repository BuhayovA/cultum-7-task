import { AxiosInstance } from 'axios';
// types
import { Pokemon } from '@md-shared/types/pokemon';
import { PokemonsRespons } from 'store/modules/pokemons';

export const getPokemons = (api: AxiosInstance) => ({
  getAllPokemons: () => api.get<{ results: PokemonsRespons[] }>('/pokemon'),
  getPokemon: (query: string | string[] | undefined) => api.get<Pokemon>(`/pokemon/${query}`)
});
