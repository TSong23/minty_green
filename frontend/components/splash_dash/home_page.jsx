import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from "../greeting/greeting_container";


class HomeMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="home_page">

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
          <img src={window.images.logged_in_background} className="home_page_main_img" />
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

export default HomeMain;