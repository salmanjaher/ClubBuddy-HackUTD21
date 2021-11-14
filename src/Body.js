import React, { useState, useEffect } from 'react';
import Club from './Club.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import SearchBar from './SearchBar.js'
const apiUrl = 'https://api.presence.io/utdallas/v1/organizations';

function Body() {
  const [loginPage, setLoginPage] = useState(true);
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

  const handleBack = () => {
    setLoginPage(true);
    setSignUp(false);
    setLogin(false);
  };

  if (loginPage) {
    return (
      <>
        <button
          onClick={() => {
            setLoginPage(false);
            setSignUp(true);
          }}
        >
          Sign Up
        </button>
        <button
          onClick={() => {
            setLoginPage(false);
            setLogin(true);
          }}
        >
          Sign In
        </button>
      </>
    );
  } else if (login) {
    return <Login handleBack={handleBack} />;
  } else if (signUp) {
    return <SignUp handleBack={handleBack} />;
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
