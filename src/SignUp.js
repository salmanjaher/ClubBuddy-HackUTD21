import React, { useState } from 'react';

function SignUp({ handleBack }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1> Sign Up</h1>
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
        <button onClick={handleBack}>Back</button>
      </form>
    </>
  );
}

export default SignUp;
