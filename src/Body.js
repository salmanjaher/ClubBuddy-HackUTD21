import React, { useState, useEffect } from 'react';
import Club from './Club.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import data from './login.json';
import Announcement from './Announcement.js';

const apiUrl = 'https://api.presence.io/utdallas/v1/organizations';

function Body() {
  const [loginData, setLoginData] = useState([]);
  const [loginPage, setLoginPage] = useState(true);
  const [clubData, setClubData] = useState([]);
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [nameDisplay, setNameDisplay] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [clubEditing, setClubEditing] = useState(false);
  const [favList, setFavList] = useState(false);
  const [clubName, setClubName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const tempdata = await fetch(apiUrl);
      const result = await tempdata.json();
      setClubData(result);
      setLoginData(data);
    };
    fetchData();
  }, []);

  const continueFunction = (username, admin, club) => {
    setNameDisplay(username);
    setIsAdmin(admin);
    setClubName(club);
    setLogin(false);
    setSignUp(false);
  };

  const updateLoginData = (account) => {
    setLoginData([...loginData, account]);
  };

  const handleBack = () => {
    setLoginPage(true);
    setSignUp(false);
    setLogin(false);
  };

  const handleBackAn = () => {
    setClubEditing(false);
  };

  if (clubEditing) {
    return (
      <>
        <Announcement
          setClubData={setClubData}
          clubData={clubData}
          clubName={clubName}
          handleBackAn={handleBackAn}
        />
        <Club clubData={clubData} />
      </>
    );
  } else if (favList) {
    return (
      <>
        <h1>Fav list</h1>
      </>
    );
  } else if (loginPage) {
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
          {isAdmin ? (
            <button onClick={() => setClubEditing(true)}>My Club</button>
          ) : (
            <button onClick={() => setFavList(true)}>My Favorites</button>
          )}
          <button onClick={() => setLoginPage(true)}>Log Out</button>
          <Club clubData={clubData} />
        </div>
      </>
    );
  }
}

export default Body;
