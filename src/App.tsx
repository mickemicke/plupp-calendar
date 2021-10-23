import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/client';
import { GET_ITEMS } from './api/queries/getItems';

function App(): JSX.Element {
  const { data } = useQuery(GET_ITEMS);
  console.log(`data`, data);
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
