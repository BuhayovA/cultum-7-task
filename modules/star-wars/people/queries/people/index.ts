import { gql } from '@apollo/client';

export const GET_PEOPLE_QUERY = gql`
  query AllPeople($after: String, $first: Int, $before: String, $last: Int) {
    allPeople(after: $after, first: $first, before: $before, last: $last) {
      totalCount
      people {
        id
        name
        birthYear
        eyeColor
        hairColor
        skinColor
        gender
      }
    }
  }
`;
