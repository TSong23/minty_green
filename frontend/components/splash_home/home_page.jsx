import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from "../search_bar/search_bar_container";
import StockChart from '../stock/stock_chart_container';
import StockInfo from '../stock/stock_info_container';


class HomeMain extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   allStocks: {}
    // }

  }

  // componentDidMount(){
  //   this.props.fetchStockAllListing().then(
  //     res => this.setState({allStocks: res.payload})
  //   )
  // }

  render() {

    return (
      <div className="home_page"> 

        <div className="home_page_nav_bar_container">
          <SearchContainer />
        </div>

        <div className="home_page_main_container">

          <div className="home_page_left_main_col">
            <div className="home_page_main_chart">
              <StockChart />
            </div>
            <div className="home_page_second_chart">
              <StockInfo />
              </div>
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