import { gql } from '@apollo/client/core';

export type ActivityType = {
  id: number;
  date: Date;
  name: string;
};

export type GET_ACTIVITY_TYPE = {
  activity: ActivityType[];
};

export const GET_ACTIVITY = gql`
  query GetActivity {
    activity {
      id
      date
      name
    }
  }
`;
