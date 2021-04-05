import React from "react";
import {  Link } from "react-router-dom";

function Signup({


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
  name,
  setName,
}) {
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    handleSignup();
    alert("user created");
    return setName("");
  };
  const handleName = (e) => setName(e.target.value);
  return (
   
            <section className="login">
              <div className="loginContainer">
                {/* Name start */}
                <label> Name</label>
                <input
                  type="text"
                  required
                  autoFocus
                  value={name}
                  placeholder="firstname & surname"
                  onChange={handleName}
                />

                {/* name End */}

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
                <div className="errorMsg">{passwordError}</div>

                <div className="btnContainer">
                  {hasAccount ? (
                    <>
                      <button onClick={handleLogin}>Login</button>
                      <p>
                        Don't have an account ?
                        <span onClick={() => setHasAccount(!hasAccount)}>
                          Sign up
                        </span>
                      </p>
                    </>
                  ) : (
                    <>
                      <button onClick={handleSubmit}>Sign Up</button>
                      <p>
                        Have an account
                        <Link
                          to="/"
                         
                         
                         
                          className="link"
                          onClick={() => setHasAccount(!hasAccount)}
                        >
                          Login
                        </Link>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </section>
      
  );
}

export default Signup;
