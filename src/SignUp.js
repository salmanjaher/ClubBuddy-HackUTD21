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
      <h1> Sign Up</h1>
      <form onSubmit={handleSubmit}>
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
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Are you a president of a club?
          <input
            checked={check}
            onChange={() => setCheck(!check)}
            type='checkbox'
          />
        </label>
        <br />
        {check ? (
          <>
            <label>
              Which Club?{' '}
              <input
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
        <input type='submit' value='Submit' />
        <button onClick={handleBack}>Back</button>
      </form>
    </>
  );
}

export default SignUp;
