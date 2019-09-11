import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from "../greeting/greeting_container";



class SplashPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    
  //   const {session} = this.props;
  //   debugger
  //   if (session){
  //     let img_title = "elon_tweet1";
  //     debugger
  //   } else {
  //     let img_title = "splash_background";
  //     debugger
  //   }

    return (
      <div className="splashPage">        
  
        <header className="splash_top_nav">
          <Link to='/'>mintgreen</Link>
          <GreetingContainer />
        </header>

        <br />

        <div>
          <div>
            Invest Commission-Free
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