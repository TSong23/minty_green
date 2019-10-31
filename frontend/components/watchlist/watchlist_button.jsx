import React from 'react';
import {fetchStockAllListing} from '../../util/stock_api_util';

class WatchlistButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allStocks: {},
      watched : false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllWatchlist();
    fetchStockAllListing().then(
      res => this.setState({allStocks : res})
    )
  }
  
  handleClick(stockWatched, watchlistID, currentStockId){
    if (stockWatched) {
      // this.setState({ watched: false })
      this.props.deleteWatchlist(watchlistID);
    } else {
      // this.setState({ watched: true })
      this.props.createWatchlist({ stock_id: currentStockId });
    }
  }

  render(){
    // this component fetches all stocks and saves to component state
    // it receives the ticker of current stock page and all watchlist
    // find the stock id of current stock and see if it exits in watchlist
    let stockWatched = false;
    let watchlistID;
    let currentStockId;
    if (Object.keys(this.props.watchlists).length &&
        Object.keys(this.state.allStocks).length){
      currentStockId = this.state.allStocks[this.props.ticker]["id"];
      Object.values(this.props.watchlists).map(listItem => {
        if (listItem.stock_id === currentStockId){
          stockWatched = true;
          watchlistID = listItem.id;
        }
      })      
    }

    

    return(
      <div className="watchlist_item_add_button" 
           onClick={() => this.handleClick(stockWatched, watchlistID, currentStockId)}>
        {stockWatched ? "Remove from Watchlist" : "Add to Watchlist"}
      </div>
    )    
  }
}

export default WatchlistButton