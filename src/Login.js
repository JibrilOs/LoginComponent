import React from "react";

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
    <section className="login">
      <div className="loginContainer">
        {/*email Start*/}
        <label>Username</label>
        <input
          type="email"
          required
          value={email}
          onChange={handleChangeEmail}
          autoFocus
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
        {/*Password End*/}

        {/* Button start */}
        {/* <div className="btn">
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </div> */}

        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={()   => handleLogin}>Sign In</button>
              <p>
                Don't have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSubmit}>Sign Up</button>{" "}
              <p>
                Have an account{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Login;
