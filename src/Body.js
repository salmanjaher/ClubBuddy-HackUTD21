import React, { useState, useEffect } from 'react';
import Club from './Club.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import data from './login.json';
import Announcement from './Announcement.js';
import Favorites from './Favorites.js';
import SearchBar from './SearchBar.js';

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

  const continueFunction = (username, admin, club, isNew = false) => {
    setNameDisplay(username);
    setIsAdmin(admin);
    setClubName(club);
    setLogin(false);
    setSignUp(false);
    if (!isNew) {
      var temp = loginData.find((person) => person['username'] === username);
      setFavClubs(temp.favorites);
    } else {
      setFavClubs([]);
    }
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

  const logOutHandle = () => {
    var temp = loginData.find((person) => person['username'] === nameDisplay);
    temp.favorites = favClubs;
    setLoginPage(true);
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
        <div class = "text-center">
        <button class="bg-green-500 hover:bg-green-600 text-black text-2xl font-bold py-5 px-14 rounded border-2 border-black"
          onClick={() => {
            setLoginPage(false);
            setSignUp(true);
          }}
        >
          Sign Up
        </button>
        <button class="bg-yellow-500 hover:bg-yellow-600 text-black text-2xl font-bold py-5 px-14 rounded border-2 border-black ml-20"
          onClick={() => {
            setLoginPage(false);
            setLogin(true);
          }}
        >
          Sign In
        </button>
        </div>
      </>
    );
  } else if (login) {
    return (
      <>
        <div class = "ml-64">
        <Login
          loginData={loginData}
          continueFunction={continueFunction}
          handleBack={handleBack}
        />
        </div>
      </>
    );
  } else if (signUp) {
    return (
      <>
        <div class = "ml-64">
        <SignUp
          updateLoginData={updateLoginData}
          continueFunction={continueFunction}
          handleBack={handleBack}
        />
        </div>
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
          <button onClick={logOutHandle}>Log Out</button>
          <SearchBar clubData={clubData} addFavClub={addFavClub} />
        </div>
      </>
    );
  }
}

export default Body;
