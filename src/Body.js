import React, { useState, useEffect } from 'react';
import Club from './Club.js';

const apiUrl = 'https://api.presence.io/utdallas/v1/organizations';

function Body() {
  const [clubData, setClubData] = useState([]);
  const [signUp, setSignUp] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(apiUrl);
      const result = await data.json();
      setClubData(result);
    };
    fetchData();
  }, []);

  if (signUp) {
    return (
      <>
        <form
          onSubmit={(e) => {
            return console.log(username, password), e.preventDefault();
          }}
        >
          <label>
            Username:
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type='text'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <input type='submit' value='Submit' />
        </form>
      </>
    );
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
