import axios from 'axios';
// import { getSpecies } from '@md-shared/services/api/controllers/species';
import { Kind } from '@md-shared/types/kind';

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
  const getAllSpecies = () => api.get<{ results: Kind[] }>('/species');

  return {
    getRoot,
    getAllSpecies,
  };
};

export type CreateApi = (config?: APIVariables) => ReturnType<typeof createAPI>;
