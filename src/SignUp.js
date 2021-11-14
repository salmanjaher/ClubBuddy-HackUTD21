import React, { useState } from 'react';

function SignUp({ handleBack, updateLoginData, continueFunction }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [club, setClub] = useState('');
  const [check, setCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    var newAccount = {
      username: username,
      password: password,
      isPresident: check,
      clubName: club,
    };
    if (username !== '' && password !== '') {
      updateLoginData(newAccount);
      continueFunction(username, check);
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
