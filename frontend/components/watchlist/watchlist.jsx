import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import ListItemGraph from '../watchlistitem/listitem_graph';


// Serves to fetch user's watchlists and the all stock stock listings
// Then sends down info to each listitem graph

class Watchlist extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      watchedStocks: {}
    };
  }

  componentDidMount(){
    this.props.fetchAllWatchlist().then(
      res => this.setState({watchedStocks : res.watchlists})
    );
    this.props.fetchStockAllListing();
  }

  render(){

    // get user's watched stocks stock_id
    let watchedStockIDs = [];
    if ( Object.values(this.state.watchedStocks).length ){
      watchedStockIDs = Object.values(this.state.watchedStocks).map(item => {
        return item.stock_id;
      });
    }
    console.log("watchlist container state", this.state)
    
    // get the list of stock id and tickers.
    // this.props.allSymbolID = {1:"MSFT", 2:"AMZN", etc}
    // check if it got passed down then began matching

    let allTickers = [];
    let allSymbolID = {};
    if (Object.keys(this.props.stocks).length) {
      allTickers = Object.keys(this.props.stocks);
      allTickers.map(sym => {
        let stockID = this.props.stocks[sym]["id"];
        allSymbolID[stockID] = sym;
      })
    } 

    console.log("allSymbolID", allSymbolID);



    let watchedStockSym = [];
    if (watchedStockIDs.length && Object.keys(allSymbolID).length){
      // take watchedStockIDs and get the stock symbols, current price
      // then create each watchlistitem and then render the list on home page
      watchedStockSym = watchedStockIDs.map(ID => {
        let stockSym = allSymbolID[ID];
        return(
            <NavLink to={`/stocks/${stockSym}`} 
              ticker={stockSym} key={stockSym} className="watchlist_items">
              {stockSym} 
              <div>
                <ListItemGraph ticker={stockSym}></ListItemGraph>
              </div>
              <div>
                Price filler
              </div>
              
            </NavLink>
        );
      });
    }



    return (
    
      <div className="right_col_watchlist_container">
        <h3>Watchlist</h3>
          {/* watchlist rendered */}
        {watchedStockSym}
      </div>
    )

  }
}

export default Watchlist