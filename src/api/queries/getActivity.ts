import { gql } from '@apollo/client/core';

export const GET_ACTIVITY = gql`
  query GetActivity {
    activity {
      id
      date
      name
    }
  }
`;
