import * as P from '@md-shared/types/planet';

export type Planet = Pick<P.Planet, 'id' | 'name'>;
export type Planets = Planet[];

export interface GetPlanetsResponse {
  allPlanets: {
    planets: Planets;
    totalCount: number;
  };
}

export interface GetPlanetsVariables {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}
