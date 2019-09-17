import React from 'react';
import SearchContainer from "../search_bar/search_bar_container";
import StockChart from '../stock/stock_chart_container';
import StockInfo from '../stock/stock_info_container';
import { fetchCompanyInfo } from '../../actions/stock_actions';


class StockShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: this.props.match.params.ticker,
      info: this.props.info,
      intraday: this.props.intraday,
      historical: this.props.historical
    }
  }

  // componentDidMount(){
  //   this.setState({ 
  //     info: this.props.fetchCompanyInfo(this.state.ticker),
  //     intraday: this.props.fetchStockIntraday(this.state.ticker),
  //     // historical: fetchStockPastData(ticker, time)
  //   })
  // }



  render() {
    console.log("this state", this.state);
    console.log("this props", this.props);

    let show_info = this.state.info;
    let show_intraday = this.state.intraday;

    console.log(show_info, show_intraday);

    return (
      <div className="home_page">

        <div className="home_page_nav_bar_container">
          <SearchContainer />
        </div>

        <div className="home_page_main_container">

          <div className="home_page_left_main_col">

            <div>

            </div>
            <div className="home_page_main_chart">
              <StockChart ticker={this.state.ticker}/>
            </div>
            <div className="home_page_second_chart">
              <StockInfo ticker={this.state.ticker}/>
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