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
            <br/>
            <h4>Invest in stocks, ETFs, options, and cryptocurrencies,
               all commission-free, right from your phone or desktop.</h4>
          </div>
          <img src={window.images.splash_background}
           className="splash_page_image" />
        </div>

        <footer className="footer">          
          <h3>Portfolio Site</h3>
          <br/>
          <h3>Linked In</h3>
          <br/>
          <h3>GitHub</h3>               
        </footer>

      </div>
    )
  }
}

export default SplashPage;