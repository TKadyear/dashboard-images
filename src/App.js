import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import SearchAppBar from './components/searchBar';
function App() {
  return (
    <div className="App">
      <SearchAppBar></SearchAppBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained">Contained</Button>
      </header>
    </div>
  );
}

export default App;
