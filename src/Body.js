import React, { useState, useEffect } from 'react';
import Club from './Club.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import data from './login.json';
import Announcement from './Announcement.js';
import Favorites from './Favorites.js';

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
  const [favClubs, setFavClubs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tempdata = await fetch(apiUrl);
      const result = await tempdata.json();
      setClubData(result);
      setLoginData(data);
    };
    fetchData();
  }, []);

  const removeFavClub = (club) => {
    setFavClubs(favClubs.filter((item) => item !== club));
  };

  const continueFunction = (username, admin, club) => {
    setNameDisplay(username);
    setIsAdmin(admin);
    setClubName(club);
    setLogin(false);
    setSignUp(false);
  };

  const updateLoginData = (account) => {
    if (!loginData.includes(account)) {
      setLoginData([...loginData, account]);
    }
  };

  const handleBack = () => {
    setLoginPage(true);
    setSignUp(false);
    setLogin(false);
  };

  const addFavClub = (club) => {
    if (!favClubs.includes(club)) {
      setFavClubs([...favClubs, club]);
    }
  };

  const handleBackAn = () => {
    setClubEditing(false);
    setFavList(false);
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
      </>
    );
  } else if (favList) {
    return (
      <>
        <Favorites
          handleBackAn={handleBackAn}
          clubData={clubData}
          favClubs={favClubs}
          removeFavClub={removeFavClub}
        />
      </>
    );
  } else if (loginPage) {
    return (
      <>
        <button class="bg-green-500 hover:bg-green-600 text-black font-bold py-1 px-3 rounded-l border-2 border-black mx-2"
          onClick={() => {
            setLoginPage(false);
            setSignUp(true);
          }}
        >
          Sign Up
        </button>
        
        <button class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-1 px-3 rounded-r border-2 border-black inset-10 mx-2"
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
    return (
      <>
        <Login
          loginData={loginData}
          continueFunction={continueFunction}
          handleBack={handleBack}
        />
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
      </>
    );
  } else {
    return (
      <>
        <div>
          <h1>Welcome, {nameDisplay}</h1>
          {isAdmin ? (
            <div>
              <button onClick={() => setClubEditing(true)}>My Club</button>
              <button onClick={() => setFavList(true)}>My Favorites</button>
            </div>
          ) : (
            <button onClick={() => setFavList(true)}>My Favorites</button>
          )}
          <button onClick={() => setLoginPage(true)}>Log Out</button>
          <Club addFavClub={addFavClub} clubData={clubData} />
        </div>
      </>
    );
  }
}

export default Body;
