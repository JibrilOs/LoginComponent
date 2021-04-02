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
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
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
  );
}

export default Login;
