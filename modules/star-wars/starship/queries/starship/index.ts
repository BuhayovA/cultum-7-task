import { gql } from '@apollo/client';

export const GET_STARSHIP_QUERY = gql`
  query GetStarship($id: ID, $starshipID: ID) {
    starship(id: $id, starshipID: $starshipID) {
      id
      name
      costInCredits
      hyperdriveRating
      passengers
      model
    }
  }
`;
