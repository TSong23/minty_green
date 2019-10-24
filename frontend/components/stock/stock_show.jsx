import React from 'react';
import SearchContainer from "../search_bar/search_bar_container";
import StockChart from '../stock/stock_chart';
import StockInfo from '../stock/stock_info_container';
// import StockHeaderContainer from '../stock/stock_header_container';
import StockHeader from '../stock/stock_header';
import WatchItemButton from '../watchlistitem/watchlistitem_button_container';


class StockShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "1d",
    
    }
  }  

  componentDidMount(){
    //fetch all stock listings and stock info for the stock in question
    this.props.fetchStockIntraday(this.props.match.params.ticker);
    this.props.fetchCompanyInfo(this.props.match.params.ticker);
    this.props.fetchStockPastData(this.props.match.params.ticker);  
  } 

  componentDidUpdate(prevProps){
    // console.log("stock show update")
    if (prevProps.match.params.ticker !== this.props.match.params.ticker) {
      this.props.fetchStockIntraday(this.props.match.params.ticker);
      this.props.fetchCompanyInfo(this.props.match.params.ticker);
      this.props.fetchStockPastData(this.props.match.params.ticker);  
    }
  }

  render() {
    
    //constants for company info
    let companyName;
    let currentPrice = "0.00";
    let percChange = "0.0";

    //constants for stock data
    let passData;


    //check for companyName and current price and pass data
    if (this.props.stockAllInfo){
      companyName = this.props.stockAllInfo.companyName;     
      if (this.props.stockAllInfo.intraday ){
        let length = this.props.stockAllInfo.intraday.length;
        currentPrice = this.props.stockAllInfo.intraday[length - 1]['close'];
        // percChange = Math.round((currentPrice/this.props.stockAllInfo.intraday[0]['close'] - 1) * 100) / 100;        
        if (this.props.stockAllInfo.year && this.state.time !== '1d'){
          passData = this.props.stockAllInfo.year;
        } else {
          passData = this.props.stockAllInfo.intraday;
        }
      } 
    } 


    return (
      <div className="home_page">

        <div className="home_page_nav_bar_container">
          <SearchContainer />
        </div>

        <div className="home_page_main_container">

          <div className="home_page_left_main_col">

            <div className="main_chart_company_title">
              {companyName}
            </div>
            
            <div className="stock_current_price">
               ${currentPrice}              
            </div>       
           
            <div className="home_page_left_chart">
              <StockChart
                time={this.state.time}  
                stockData={passData}
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

            {/* <div className="home_page_left_col_bottom_chart">
              <StockInfo ticker={this.props.match.params.ticker}/>
            </div> */}
            
          </div>

          {/* <div className="stock_show_right_main_col">
            <WatchItemButton ticker={this.props.match.params.ticker}/>
          </div> */}

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