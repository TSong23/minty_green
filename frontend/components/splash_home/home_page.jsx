import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from "../search_bar/search_bar_container";
import Watchlist from '../watchlist/watchlist_container';
// import StockChart from '../stock/stock_chart_container';
// import StockInfo from '../stock/stock_info_container';


class HomeMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {}
    }
  }

  componentDidMount(){
    this.props.fetchStockAllListing();
    this.setState({
      news: this.props.fetchBusinessNews().then
    })
  }

  
  render() {
    // console.log(this.props.userId) gets the current user id
    let allStocks = Object.values(this.props.allStocks)
    console.log("news",this.state.news)
    
    // let showNews = this.state.news
    
    return (
      <div className="home_page"> 

        <div className="home_page_nav_bar_container">
          <SearchContainer />
        </div>

        <div className="home_page_main_container">

          <div className="home_page_left_main_col">
            <div className="home_page_main_chart">
              Balance
            </div>
            
            news

          </div>

          <div className="home_page_right_main_col">
            <Watchlist 
              userId={this.props.userId}
              allStocks={allStocks}
            />            
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