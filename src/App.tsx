import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/client';
import { GET_ACTIVITY } from './api/queries/getActivity';
import { createDaysList } from './helpers/createDaysList';
import DateList from './pages/dateList/DateList';

function App(): JSX.Element {
  const { data } = useQuery(GET_ACTIVITY);
  console.log(`data`, data);
  const firstDayOfCurrentYear = new Date(new Date().getFullYear(), 0, 1);
  const lastDayOfCurrentYear = new Date(new Date().getFullYear(), 11, 31);
  const daysList = createDaysList(firstDayOfCurrentYear, lastDayOfCurrentYear);
  console.log(`daysList`, daysList);
  return (
    <div className="App">
      <DateList dates={daysList} />
    </div>
  );
}

export default App;
