import React from 'react';
import { ActivityType } from '../api/queries/getActivity';

type Dispatch = (action: Action) => void;

type State = {
  activities: ActivityType[];
};

const initialState: State = {
  activities: [],
};

type Action = {
  type: 'SET_ACTIVITIES';
  payload: ActivityType[];
};

function activitiesReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case 'SET_ACTIVITIES':
      return { ...state, activities: action.payload };
    default:
      throw new Error();
  }
}

const ActivitiesContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

export const ActivitiesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(activitiesReducer, initialState);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };

  return <ActivitiesContext.Provider value={value}>{children}</ActivitiesContext.Provider>;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useActivities = () => {
  const context = React.useContext(ActivitiesContext);
  if (context === undefined) {
    throw new Error('useActivities must be used within a ActivitiesProvider');
  }
  return context;
};
