import axios from 'axios';

import { getPokemons } from '@md-shared/services/api/controllers/pokemons';

export type CustomHeaders = { [key: string]: string };
export type APIVariables = {
  token?: string | null;
  baseURL?: string;
  customHeaders?: CustomHeaders;
};

const API_URL = '/api/rest';
export const createAPI = ({ baseURL = API_URL, customHeaders = {}, token }: APIVariables = {}) => {
  /* ------------- API instance ------------- */

  const api = axios.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      ...customHeaders,
      ...(token && { Authorization: `Bearer ${token}` })
    },
    timeout: 10000
  });

  /* ------------- Controllers ------------- */

  const getRoot = () => api.get<{ result: string[] }>('/');

  return {
    getRoot,
    ...getPokemons(api)
  };
};

export type CreateApi = (config?: APIVariables) => ReturnType<typeof createAPI>;
