import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from "../search_bar/search_bar_container";
import { fetchBusinessNews } from '../../util/news_api_util';
import StockChart from '../stock/stock_chart_container';

import Watchlist from '../watchlist/watchlist';


class HomeMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {}
    }
  }

  componentDidMount(){
    this.props.fetchStockAllListing();
    this.props.fetchAllWatchlist();
    fetchBusinessNews().then(news => this.setState({news: news.articles}))
  }

  
  render() {

    // console.log("home page") three tines render
    // pass the stock symbol and id to watchlist to populate watchlist
    // Object.keys(this.props.stocks) gives back all the tickers
    let allTickers = [];
    let allSymbolID = {};
    if (Object.keys(this.props.stocks).length) {
      allTickers = Object.keys(this.props.stocks);
      allTickers.map(sym => {
        let stockID = this.props.stocks[sym]["id"];
        allSymbolID[stockID] = sym;
      })
    } 

    // news loging
    let showNews = [];
    if (this.state.news.length > 0){
      showNews = this.state.news.map(article =>{
        return(
          <a href={article.url} > 
            <div className="news_item">
              
              <div className="news_item_text">
                <h2>{article.source.name}</h2>
                <h3>{article.title}</h3>
              </div>  
              <div className="news_item_img">                
                <img src={`${article.urlToImage}`}
                  style={{width:"225px", height:"150px"}}/>                    
              </div>
              
            </div>
          </a>
        )
      })      
    }
    
    // let showNews = this.state.news
    
    return (
      <div className="home_page"> 

        <div className="home_page_nav_bar_container">
          <SearchContainer />
        </div>

        <div className="home_page_main_container">

          <div className="home_page_left_main_col">
            <div className="home_page_balance_display">
              <div>Balance</div>

              <div className="current_portfolio_value">
                $54,379.28
              </div>

              <div className="home_page_deposit_money">
                <button> Add Funds</button>
              </div>
            </div>

            <div className="home_page_portfolio_chart">
            
            </div>
            
            <div className="home_page_news_container">
              News
              <br/>
              <br/>
              {showNews}
            </div>
          </div>

          <div className="home_page_right_main_col">            
            <Watchlist allSymbolID={allSymbolID}/>            
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