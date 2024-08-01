import React, { useEffect, useState } from 'react';
import './index.css';
import config from './config'; // Import the config file

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = config.apiKey; // Use the API key from the config file


  const getData = async () => {
    try {
      const res = await fetch(apiKey);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const actualData = await res.json();
      console.log(actualData.MH.districts);

      // Convert the districts object into an array
      const districtArray = Object.entries(actualData.MH.districts).map(([district, districtData]) => ({
        district,
        ...districtData,
      }));

      setData(districtArray);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className=' w-full m-auto'>

      <div className=' w-full table-responsive'>
        <div className='text-center'>
          <h1 className=' text-xl font-semibold my-4'>India Covid 19 Cases Data</h1>
        </div>
        <table className='table-hover text-center w-full'>
          <thead className=' bg-sky-100'>
            <tr>
              <th className='p-2'>District</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Vaccinated 1</th>
              <th>Vaccinated 2</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {data.map((cur, index) => (
              <tr key={index}>
                <td className='district-data'>{cur.district}</td>
                <td className='confirmed-data'>{cur.total?.confirmed}</td>
                <td className='recovered-data'>{cur.total?.recovered}</td>
                <td className='vaccinated1-data'>{cur.total?.vaccinated1}</td>
                <td className='vaccinated2-data'>{cur.total?.vaccinated2}</td>
                <td className='updated-data'>{cur.meta?.tested?.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
