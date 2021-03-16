import { Starship } from '@md-shared/types/starship';

export type GetStarship = Pick<Starship, 'id' | 'costInCredits' | 'hyperdriveRating' | 'passengers' | 'name' | 'model'>;

export interface GetStarshipResponse {
  starship: GetStarship;
}

export interface GetStarshipVariables {
  id?: string;
  starshipId?: string;
}
