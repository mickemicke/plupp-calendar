import { GET_ITEMS } from '../queries/getItems';

export const mocks = [
  {
    request: {
      query: GET_ITEMS,
    },
    result: {
      data: {
        items: [{ id: '1', name: 'Buck' }],
      },
    },
  },
];
