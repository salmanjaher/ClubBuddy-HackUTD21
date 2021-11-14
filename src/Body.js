import React, { useState, useEffect } from 'react';
import Club from './Club.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import data from './login.json';

const apiUrl = 'https://api.presence.io/utdallas/v1/organizations';

function Body() {
  const [loginData, setLoginData] = useState([]);
  const [loginPage, setLoginPage] = useState(true);
  const [clubData, setClubData] = useState([]);
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [nameDisplay, setNameDisplay] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const tempdata = await fetch(apiUrl);
      const result = await tempdata.json();
      setClubData(result);
      setLoginData(data);
    };
    fetchData();
  }, []);

  const continueFunction = (username, admin) => {
    setNameDisplay(username);
    setIsAdmin(admin);
    setLogin(false);
    setSignUp(false);
  };

  const updateLoginData = (account) => {
    setLoginData([...loginData, account]);
    console.log(loginData);
  };

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
        <Club clubData={clubData} />
      </>
    );
  } else if (login) {
    return (
      <>
        <Login
          loginData={loginData}
          continueFunction={continueFunction}
          handleBack={handleBack}
        />
        <Club clubData={clubData} />
      </>
    );
  } else if (signUp) {
    return (
      <>
        <SignUp
          updateLoginData={updateLoginData}
          continueFunction={continueFunction}
          handleBack={handleBack}
        />
        <Club clubData={clubData} />
      </>
    );
  } else {
    return (
      <>
        <div>
          <h1>Welcome, {nameDisplay}</h1>
          {isAdmin ? <button>My Club</button> : <button>My Favorites</button>}
          <button onClick={() => setLoginPage(true)}>Log Out</button>
          <Club clubData={clubData} />
        </div>
      </>
    );
  }
}

export default Body;
