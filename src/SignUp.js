import React, { useState } from 'react';

function SignUp({ handleBack, updateLoginData, continueFunction }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [club, setClub] = useState('');
  const [check, setCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const temp = [];
    var hasher = require('crypto').createHash('sha256');
    var passwordHash = hasher.update(password, 'utf-8').digest('hex');
    var newAccount = {
      username: username,
      password: passwordHash,
      isPresident: check,
      clubName: club,
      favorites: temp,
    };
    if (username !== '' && password !== '') {
      updateLoginData(newAccount);
      continueFunction(username, check, club, true);
    }
  };

  return (
    <>
      <h1 class = "font-bold text-2xl mb-1"> Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label class = "text-2xl">
          Username:
          <input class = "border-2 border-black ml-7"
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label class = "text-2xl">
          Password:
          <input class = "border-2 border-black ml-9 mt-2 mb-1"
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label class = "text-2xl">
          Are you a president of a club?
          <input class = "ml-2 size-xl"
            checked={check}
            onChange={() => setCheck(!check)}
            type='checkbox'
          />
        </label>
        <br />
        {check ? (
          <>
            <label class = "text-2xl mt-1">
              Which Club?{' '}
              <input class = "border-2 border-black mt-1 mb-1"
                value={club}
                onChange={(e) => setClub(e.target.value)}
                type='text'
              ></input>
            </label>
            <br />
          </>
        ) : (
          <br />
        )}
        <input class = "bg-green-500 hover:bg-green-600 text-black text-xl font-bold py-1 px-3 rounded border-2 border-black mt-1" type='submit' value='Submit' />
        <button class = "bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-bold py-1 px-3 rounded border-2 border-black ml-4 mt-1" onClick={handleBack}>Back</button>
      </form>
    </>
  );
}

export default SignUp;
