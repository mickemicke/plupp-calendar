import { Activity } from '../models/Activity/activity';

export const ActivityResolver = {
  Query: {
    GetActivities: async () => {
      try {
        const activities = await Activity.find({});
        return activities;
      } catch (error) {
        throw new Error((error as Error)?.message);
      }
    },
  },
};
