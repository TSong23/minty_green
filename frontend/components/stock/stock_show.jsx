import React from 'react';
import SearchContainer from "../search_bar/search_bar_container";
import StockChart from '../stock/stock_chart_container';
import StockInfo from '../stock/stock_info_container';
import StockHeaderContainer from '../stock/stock_header_container';
import WatchItemButton from '../watchlistitem/watchlistitem_button_container';

class StockShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "1d"
    }
  }  

  render() {
    return (
      <div className="home_page">

        <div className="home_page_nav_bar_container">
          <SearchContainer ticker={this.props.match.params.ticker}/>
        </div>

        <div className="home_page_main_container">

          <div className="home_page_left_main_col">
            <StockHeaderContainer 
              ticker={this.props.match.params.ticker}
            />     

            {/* <div className="stock_current_price">
              current price holder  
            </div>        */}
           
            <div className="home_page_left_chart">
              <StockChart
                ticker={this.props.match.params.ticker}
                time={this.state.time}  
              />
            </div>
            
            {/* <div className="home_page_left_chart">
              placeholder
            </div> */}

            <div className="left_chart_time_options">
              <button onClick={() => this.setState({time: "1d"})}>1D</button>
              <button onClick={() => this.setState({time: "5d"})}>1W</button>
              <button onClick={() => this.setState({time: "1m"})}>1M</button>
              <button onClick={() => this.setState({time: "6m"})}>6M</button>
              <button onClick={() => this.setState({time: "1y"})}>1Y</button>              
            </div>            
            <br/>
            <div className="home_page_left_col_bottom_chart">
              <StockInfo ticker={this.props.match.params.ticker}/>
            </div>
          </div>

          <div className="stock_show_right_main_col">
            <WatchItemButton ticker={this.props.match.params.ticker}/>


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