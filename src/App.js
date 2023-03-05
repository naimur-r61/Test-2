import './App.css';
import { useEffect, useState } from 'react';
import TableRow from './components/TableRow';

function App() {
  const [data, setData] = useState([]);

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

  // #DADADA

  return (
    <div>
      <table className="my-table">
        <thead>
          <tr>
            <th>notebook_name</th>
            <th>updated_at</th>
            <th>updated_by</th>
            <th>created_at</th>
            <th>last_run</th>
            <th>created_by</th>
            <th>no_of_runs</th>
            <th>notebook_id</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => <TableRow key={i} d={d} />)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
