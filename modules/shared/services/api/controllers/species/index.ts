import { AxiosInstance } from 'axios';
import { Kind } from '@md-shared/types/kind';

export const getSpecies = (api: AxiosInstance) => ({
  getAllSpecies: () => api.get<{ results: Kind[] }>('/species')
});
