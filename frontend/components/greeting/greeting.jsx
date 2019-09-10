import React from 'react';
import {Link} from 'react-router-dom';


// this is a functional component. no need to make a class
// this component will not need to access store, hold a slice of state,
// or be part of redux cycle. 
// all info is passed in from its container
// just write the logic


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav>
      <Link to="/login" className="splash_top_nav__button">Log In</Link>
   
      <Link to="/signup" className="splash_top_nav__button">Sign Up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup>
      <h2 className="top_nav__text">Hi, {currentUser.username}!</h2>
      <button className="top_nav__button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;