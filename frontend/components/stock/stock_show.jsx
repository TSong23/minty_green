import React from 'react';
import SearchContainer from "../search_bar/search_bar_container";
import StockChart from '../stock/stock_chart_container';
import StockInfo from '../stock/stock_info_container';

class StockShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: this.props.match.params.ticker
    }
  }


  render() {
    console.log(this.state, this.state.ticker)
    return (
      <div className="stock_show">

        <div className="stock_show_nav_bar_container">
          <SearchContainer />
        </div>

        <div className="stock_show_main_container">

          <div className="stock_show_left_main_col">
            <div className="stock_show_main_chart">
              <StockChart ticker={this.state.ticker}/>
            </div>
            <div className="stock_show_second_chart">
              <StockInfo />
            </div>
          </div>

          <div className="stock_show_right_main_col">
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