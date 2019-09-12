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

        <div className="home_page_main_container">
          
            <div className="home_page_left_main_col">
              <div className="home_page_main_chart">Portfolio Chart</div>
              <div className="home_page_second_chart">Collections</div>
            </div>

            <div className="home_page_right_main_col">
              <h3>Watchlist</h3>
              
            </div>           
          
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