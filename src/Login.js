import React from "react";
import {  Link } from "react-router-dom";

function Login({

loading,
 
  email,
  setEmail,
  emailError,
  password,
  setPassword,
  passwordError,
  handleLogin,
  handleSignup,

  hasAccount,
  setHasAccount,

}) {
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    handleSignup();
    return alert("user created");
  };
  
  return (
    <div className={loading ? "go" : "di"}>
      <section className="login ">
        <div className="loginContainer">
          {/*email Start*/}
          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={handleChangeEmail}
          />
          <p className="errorMsg">{emailError}</p>
          {/*email End*/}

          {/*Password Start*/}
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={handleChangePassword}
          />
          <p className="errorMsg">{passwordError}</p>

          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button onClick={handleLogin}>Login</button>
                <p>
                  Don't have an account ?
                  <Link
                    to="/Signin"
                    className="link"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign up
                  </Link>
                </p>
              </>
            ) : (
              <>
                <button onClick={handleSubmit}>Sign Up</button>
                <p>
                  Have an account
                  <span onClick={() => setHasAccount(!hasAccount)}>Login</span>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
