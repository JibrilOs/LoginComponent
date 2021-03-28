/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import fire from "./Firebase";
import "firebase/auth";
import Login from "./Login";
import "./App.css";

function App() {
  //Hooks
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const clearInputs = () => {
    // setUser("");
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  //Hooks

  //handles the password and email that are sent to firebase
  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .SignInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPassword(err.message);
            break;
        }
      });
  };
  /// creates a user with password and email
  const handleSignup = () => {
  
  clearInputs();
    fire

      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPassword(err.message);
            break;
        }
      });
  };
  //Logout function
  const handleLogout = () => {
    fire.auth().signOut();
  };
  //function checkouts if user exists in firebase database
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    return authListener();
  }, []);

  return (
    <div className="App">
      <Login
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
      />
    </div>
  );
}
export default App;
