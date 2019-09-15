import React from 'react';
import {Link} from 'react-router-dom';


// this is a functional component. no need to make a class
// this component will not need to access store, hold a slice of state,
// or be part of redux cycle. 
// all info is passed in from its container
// just write the logic


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="splash_top_nav_bar">
      <Link to="/login" className="splash_top_nav__button">Log In</Link>
   
      <Link to="/signup" className="splash_top_nav__button">Sign Up</Link>
    </div>
  );

  const home_page_nav = () => (
    <div className = "home_page_nav_bar">
      <Link to='/'>mintgreen</Link>
      
      <button className="splash_top_nav_logout" onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? home_page_nav() : sessionLinks();
};


export default Greeting;