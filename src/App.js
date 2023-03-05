import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();

  useEffect(() => {

    const url = 'https://demo.4pointx.com/_notebooks/notebooks/_all';
    const authHeader = 'Basic YWRtaW46OGtRM1VuVlVtU2dUWTBSWQ==';

    // Send a GET request to the API using the fetch method, including the authorization header
    fetch(url, {
      headers: {
        'Authorization': authHeader
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        // Otherwise, throw an error
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('There was a problem fetching data from the API:', error);
      });


  }, [])


  return (
    <div className="App">
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
      </header>
    </div>
  );
}

export default App;
