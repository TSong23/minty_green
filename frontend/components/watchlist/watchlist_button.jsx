import React from 'react';
import {fetchStockAllListing} from '../../util/stock_api_util';

class WatchlistButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: this.props.stockWatched,
      // listID: this.props.watchlistID,
      // stockID: this.props.currentStockId
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prev){
    if (prev.stockWatched !== this.props.stockWatched){
      this.setState({watched : this.props.stockWatched});
    }
  }

  handleClick(e) {
    if (e.target.innerText === "Remove from Watchlist") {
      this.setState({ watched: false })
      this.props.deleteWatchlist( this.props.watchlistID);
    } else {
      this.setState({ watched: true })
      this.props.createWatchlist({ stock_id: this.props.currentStockId });
    }
  }
  

  render(){

    return (
      <div className="watchlist_item_add_button"
        onClick={this.handleClick}>
        
          {this.state.watched ? "Remove from Watchlist" : "Add to Watchlist"}
     
      </div>
    )
  }
}

export default WatchlistButton