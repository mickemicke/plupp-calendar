import { GET_ACTIVITY } from '../queries/getActivity';
import { GET_STUFF } from '../queries/getStuff';

export const mocks = [
  {
    request: {
      query: GET_ACTIVITY,
    },
    result: {
      data: {
        activity: [
          { id: '1', name: 'Yoga', date: new Date('2021-10-22').toISOString() },
          { id: '2', name: 'Running', date: new Date('2021-10-23').toISOString() },
        ],
      },
    },
  },
  {
    request: {
      query: GET_STUFF,
    },
    result: {
      data: {
        stuff: [{ id: '1', name: 'Buck' }],
      },
    },
  },
];
