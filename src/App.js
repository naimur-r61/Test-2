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

  // #DADADA

  return (
    <div>
      <table className="my-table">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
            <th>Column 6</th>
            <th>Column 7</th>
            <th>Column 8</th>
            <th>Column 9</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
            <td>Row 1, Column 3</td>
            <td>Row 1, Column 4</td>
            <td>Row 1, Column 5</td>
            <td>Row 1, Column 6</td>
            <td>Row 1, Column 7</td>
            <td>Row 1, Column 8</td>
            <td>Row 1, Column 9</td>
          </tr>
          <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
            <td>Row 2, Column 3</td>
            <td>Row 2, Column 4</td>
            <td>Row 2, Column 5</td>
            <td>Row 2, Column 6</td>
            <td>Row 2, Column 7</td>
            <td>Row 2, Column 8</td>
            <td>Row 2, Column 9</td>
          </tr>
          {/* add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default App;
