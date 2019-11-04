import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import ListItemGraph from '../watchlistitem/listitem_graph_container';


// Serves to fetch user's watchlists and the all stock stock listings
// Then sends down info to each listitem graph
// should not listen to any slice of state because each list itme will cause
// entire watchlist to rerender
// while componentDidMount will set global state, save the data to local state
// so that it minimizes rerendering

class Watchlist extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      watchedStocks: {},
      stocks : {}
    };
  }

  componentDidMount(){
    this.props.fetchAllWatchlist().then(
      res => this.setState({watchedStocks : res.watchlists})
    );
    this.props.fetchStockAllListing().then(
      res => this.setState({stocks: res.payload})
    );
  }

  render(){
    console.log("watchlist render");

    // get user's watched stocks stock_id
    let watchedStockIDs = [];
    if ( Object.values(this.state.watchedStocks).length ){
      watchedStockIDs = Object.values(this.state.watchedStocks).map(item => {
        return item.stock_id;
      });
    }
    // console.log("watchlist container state", this.state)
    
    // get the list of stock id and tickers.
    // this.props.allSymbolID = {1:"MSFT", 2:"AMZN", etc}
    // check if it got passed down then began matching

    let allTickers = [];
    let allSymbolID = {};
    if (Object.keys(this.state.stocks).length) {
      allTickers = Object.keys(this.state.stocks);
      allTickers.map(sym => {
        let stockID = this.state.stocks[sym]["id"];
        allSymbolID[stockID] = sym;
      })
    } 

    // console.log("allSymbolID", allSymbolID);



    let watchedStockSym = [];
    if (watchedStockIDs.length && Object.keys(allSymbolID).length){
      // take watchedStockIDs and get the stock symbols, current price
      // then create each watchlistitem and then render the list on home page
      watchedStockSym = watchedStockIDs.map(ID => {
        let stockSym = allSymbolID[ID];
        return(
            <NavLink to={`/stocks/${stockSym}`} 
              ticker={stockSym} key={stockSym} className="watchlist_items">
              <div>
                {stockSym}
              </div>
              <div className="mini_chart">
                <ListItemGraph ticker={stockSym}></ListItemGraph>
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