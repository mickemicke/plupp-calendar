import { gql } from 'apollo-server';

export const typedefs = gql`
  type Activity {
    _id: String!
    type: String!
    date: String!
  }

  type Query {
    GetActivities: [Activity]!
  }
`;
