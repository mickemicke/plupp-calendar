import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/client';
import { GET_ACTIVITY } from './api/queries/getActivity';
import { createDaysList } from './helpers/createDaysList';

function App(): JSX.Element {
  const { data } = useQuery(GET_ACTIVITY);
  console.log(`data`, data);
  const firstDayOfCurrentYear = new Date(new Date().getFullYear(), 0, 1);
  const lastDayOfCurrentYear = new Date(new Date().getFullYear(), 11, 31);
  const daysList = createDaysList(firstDayOfCurrentYear, lastDayOfCurrentYear);
  console.log(`daysList`, daysList);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reloadd.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
