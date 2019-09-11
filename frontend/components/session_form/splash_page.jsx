import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from "../greeting/greeting_container";

let icon_path = '/';

const splashPage = () => {
    return (
      <div className="splashPage">
        
        <header className="splash_top_nav">
          <Link to={`${icon_path}`}>mintgreen</Link>
          <GreetingContainer />

        </header>
        <br />


        <img src={window.images.splash_background} />
      </div>
    )
}

export default splashPage;