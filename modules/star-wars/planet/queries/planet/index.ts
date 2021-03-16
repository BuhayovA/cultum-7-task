import { gql } from '@apollo/client';

export const GET_PLANET_QUERY = gql`
  query GetPlanet($id: ID, $planetID: ID) {
    planet(id: $id, planetID: $planetID) {
      id
      name
      population
      orbitalPeriod
      gravity
      diameter
    }
  }
`;
