import React from 'react';
import SearchContainer from "../search_bar/search_bar_container";
import StockChart from '../stock/stock_chart_container';
import StockInfo from '../stock/stock_info_container';
import StockHeaderContainer from '../stock/stock_header_container';

class StockShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   time: ""
    // }
  }

  // changeTime(e){

  // }
  

  render() {
    return (
      <div className="home_page">

        <div className="home_page_nav_bar_container">
          <SearchContainer ticker={this.props.match.params.ticker}/>
        </div>

        <div className="home_page_main_container">

          <div className="home_page_left_main_col">
            <header className="left_main_col_header" >
              <StockHeaderContainer 
                ticker={this.props.match.params.ticker}
              />
            </header>
           
            {/* <div className="home_page_main_chart">
              <StockChart ticker={this.props.match.params.ticker}/>
            </div> */}
            <div className="home_page_main_chart">
              placeholder
            </div>
            <div className="main_chart_time_options">
              <button value="5dm"onClick>1W</button>
              <button value="1m" onClick>1M</button>
              <button value="6m" onClick>6M</button>
            </div>
            

            <div className="home_page_second_chart">
              <StockInfo ticker={this.props.match.params.ticker}/>
            </div>
          </div>

          <div className="home_page_right_main_col">
            <h3>Buy/Sell/add to watchlist</h3>

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

export default StockShow;