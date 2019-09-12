import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from "../greeting/greeting_container";



class SplashPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
  
    return (
      <div>        
  
        <header className="splash_top_nav">
          <Link to='/'>mintgreen</Link>
          <GreetingContainer />
        </header>

        <br />

        <div className="splash_page_body">
          <div className="splash_page_body_text">
            <h3>Invest Commission-Free</h3> 
            <h4>Random Text</h4>
          </div>
          <img src={window.images.splash_background} className="robin_phones_img" />
        </div>

        <footer>
          <h3>
            <ul>
              <li>Portfolio Site</li>
              <li>Linked In</li>
              <li>GitHub</li>
            </ul>
          </h3>
        </footer>

      </div>
    )
  }
}

export default SplashPage;