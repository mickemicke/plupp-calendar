import { useQuery } from '@apollo/client';
import { GET_ACTIVITY, GET_ACTIVITY_TYPE } from './api/queries/getActivity';
import { createDaysList } from './helpers/createDaysList';
import DateList from './pages/dateList/DateList';
import { useActivities } from './state/reducer';
import { useEffect } from 'react';
// import { LinearProgress } from '@mui/material';

function App(): JSX.Element {
  const { data, loading } = useQuery<GET_ACTIVITY_TYPE>(GET_ACTIVITY);

  const {
    state: { activities },
    dispatch,
  } = useActivities();

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_ACTIVITIES', payload: data?.activity });
    }
  }, [data]);

  console.log(`activities`, activities);
  const firstDayOfCurrentYear = new Date(new Date().getFullYear(), 0, 1);
  const lastDayOfCurrentYear = new Date(new Date().getFullYear(), 11, 31);
  const daysList = createDaysList(firstDayOfCurrentYear, lastDayOfCurrentYear);

  return (
    <div className="App">
      {loading && <>Loading...</>}

      {!loading && activities && <DateList dates={daysList} activities={activities} />}
    </div>
  );
}

export default App;
