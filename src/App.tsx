import './App.css';
import { useQuery } from '@apollo/client';
import { GET_ACTIVITY, GET_ACTIVITY_TYPE } from './api/queries/getActivity';
import { createDaysList } from './helpers/createDaysList';
import DateList from './pages/dateList/DateList';

function App(): JSX.Element {
  const { data } = useQuery<GET_ACTIVITY_TYPE>(GET_ACTIVITY);

  const firstDayOfCurrentYear = new Date(new Date().getFullYear(), 0, 1);
  const lastDayOfCurrentYear = new Date(new Date().getFullYear(), 11, 31);
  const daysList = createDaysList(firstDayOfCurrentYear, lastDayOfCurrentYear);

  const activities = data ? data.activity : undefined;

  return (
    <div className="App">
      <DateList dates={daysList} activities={activities} />
    </div>
  );
}

export default App;
