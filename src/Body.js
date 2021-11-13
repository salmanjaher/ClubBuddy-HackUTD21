import React, { useState, useEffect } from 'react';
import Club from './Club.js';
import Login from './Login.js';
import SignUp from './SignUp.js';

const apiUrl = 'https://api.presence.io/utdallas/v1/organizations';

function Body() {
  const [clubData, setClubData] = useState([]);
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(apiUrl);
      const result = await data.json();
      setClubData(result);
    };
    fetchData();
  }, []);

  if (login) {
    return (
      <>
        <Login />
      </>
    );
  } else if (signUp) {
    return <SignUp />;
  } else {
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
}

export default Body;
