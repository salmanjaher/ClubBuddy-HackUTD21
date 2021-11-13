import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1> Login</h1>
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
}

export default Login;
