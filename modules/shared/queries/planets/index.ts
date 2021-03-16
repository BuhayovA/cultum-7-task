import { gql } from '@apollo/client';

export const GET_PLANETS_QUERY = gql`
  query AllPlanets($after: String, $first: Int, $before: String, $last: Int) {
    allPlanets(after: $after, first: $first, before: $before, last: $last) {
      totalCount
      planets {
        id
        name
      }
    }
  }
`;
