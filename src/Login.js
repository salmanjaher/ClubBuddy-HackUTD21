import React from 'react';

function Login({ handleBack, continueFunction, loginData }) {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  var hasher = require('crypto').createHash('sha256');

  const Field = React.forwardRef(({ label, type }, ref) => {
    return (
      <div>
        <label>{label}</label>
        <input ref={ref} type={type} />
      </div>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    var passwordHash = hasher.update(passwordRef.current.value, 'utf-8').digest('hex');

    if (
      loginData.find(
        (logins) => logins['username'] === usernameRef.current.value
      ) &&
      loginData.find(
        (logins) => logins['password'] === passwordHash
      )
    ) {
      let admin = loginData.find(
        (logins) => logins['password'] === passwordHash
      );
      continueFunction(
        usernameRef.current.value,
        admin.isPresident,
        admin.clubName
      );
    } else {
      // Show a modal
    }
  };

  return (
    <>
      <h1> Login</h1>
      <form onSubmit={handleSubmit}>
        <Field ref={usernameRef} label='Username:' type='text' />
        <Field ref={passwordRef} label='Password:' type='password' />
        <br />
        <input type='submit' value='Submit' />
        <button onClick={handleBack}>Back</button>
      </form>
    </>
  );
}

export default Login;
