/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import {fire, db} from "./Firebase";

import Login from "./Login";
import Signup from "./SignUp";
import Hero from "./Hero";
import "./App.css";

function App() {
  //Hooks
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(true);
  const [loading,setLoading]=useState(false)
  const clearInputs = () => {
    // setUser("");
    setEmail("");
    setPassword("");
    setName("");
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
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            console.log(err.message);
            break;
        }
         
      });
  };
  /// creates a user with password and email
  const handleSignup = () => {
  
clearInputs();
    fire

      .auth()
      .createUserWithEmailAndPassword(email, password).then(cred=>{
       db.collection("users").doc(cred.user.uid).set({name})
      })
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
    clearInputs();
  };
  //function checkouts if user exists in firebase database
  const authListener = () => {
   
    //load something while the data of user is been fetched
  setLoading(true);
    fire.auth().onAuthStateChanged((user) => {
      
      if (user) {
        clearInputs();
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => setName(doc.data().name));
        setUser(user);
               setLoading(false); 

   
   
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
      {user ? (
        <Hero
          handleLogout={handleLogout}
          user={user}
          email={email}
          name={name}
        />
      ) : (
        <Login
        loading={loading}
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
    </div>
  );
}
export default App;
