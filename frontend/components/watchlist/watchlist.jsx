import React from 'react';
import {fetchAllWatchlist} from '../../util/watchlist_api_util';
import {NavLink, Link} from 'react-router-dom';


class Watchlist extends React.Component {
  constructor(props){
    super(props);
    // this.props.fetchAllWatchlist();
    this.state = {
      watchedStocks: {}
    };
  }

  componentDidMount(){
    fetchAllWatchlist().then(
      res => this.setState({watchedStocks : res})
    )
  }

  render(){
    // console.log("watchlist") 4 times render

    // get user's watched stocks stock_id
    let watchedStockIDs = [];
    if ( Object.values(this.state.watchedStocks).length ){
      watchedStockIDs = Object.values(this.state.watchedStocks).map(item => {
        return item.stock_id;
      });
    }
    console.log("watchedStockIDs", watchedStockIDs);

    // get the list of stock id and tickers.
    // this.props.allSymbolID = {1:"MSFT", 2:"AMZN", etc}
    // check if it got passed down then began matching

    let watchedStockSym = [];
    if (watchedStockIDs.length && Object.keys(this.props.allSymbolID).length){
      // take watchedStockIDs and get the stock symbols, current price
      // then create each watchlistitem and then render the list on home page
      watchedStockSym = watchedStockIDs.map(item => {
        let stockSym = Object.values(this.props.allSymbolID)[item.stock_id];
        console.log("stockSym", stockSym);
        return(
          <div key={item.stock_id} className="watchlist_items">
            <NavLink to={`/stocks/${stockSym}`} ticker={stockSym} key={stockSym}>
              {stockSym}
            </NavLink>
          </div>          
        );
      });
    }
    console.log("watchedStockSym", watchedStockSym);



    return (
    
      <div className="right_col_watchlist_container">
        <h3>Watchlist</h3>
        {watchedStockSym}
      </div>
    )

  }
}

export default Watchlist