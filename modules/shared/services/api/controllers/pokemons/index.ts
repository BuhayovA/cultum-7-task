import { AxiosInstance } from 'axios';
import { Pokemon } from '@md-shared/types/kind';

export const getPokemons = (api: AxiosInstance) => ({
  getAllPokemons: () => api.get<{ results: Pokemon[] }>('/pokemon')
});
