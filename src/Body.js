import React, { useState, useEffect } from 'react';
import Club from './Club.js';

const apiUrl = 'https://api.presence.io/utdallas/v1/organizations';

function Body() {
  const [clubData, setClubData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(apiUrl);
      const result = await data.json();
      setClubData(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div className='flex-auto'>
          <Club clubData={clubData} />
        </div>
      </div>
    </>
  );
}

export default Body;
