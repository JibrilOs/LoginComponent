import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Signup from "./SignUp";
function Login({
  user,
  setUser,
  email,
  setEmail,
  emailError,
  password,
  setPassword,
  passwordError,
  handleLogin,
  handleSignup,
  handleLogout,
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
    return alert("user created");
  };
  const handleName = (e) => setName(e.target.value);
  return (
    <div>
      {hasAccount ? (
        <Router>
          <Switch>
            <Route
              exact
              render={() => (
                <section className="login">
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
                              to="/signup"
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
                            <span onClick={() => setHasAccount(!hasAccount)}>
                              Login
                            </span>
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </section>
              )}
            ></Route>
          </Switch>
        </Router>
      ) : (
        <Signup
          user={user}
          setUser={setUser}
          email={email}
          setEmail={setEmail}
          emailError={emailError}
          password={password}
          setPassword={setPassword}
          passwordError={passwordError}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          handleLogout={handleLogout}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          name={name}
          setName={setName}
        />
      )}
      {passwordError}
    </div>
  );
}

export default Login;
