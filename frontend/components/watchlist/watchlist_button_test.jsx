import React from 'react';

class WatchlistButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allStocks: {},
      watched: this.props.stockWatched,
      listID : this.props.watchlistID,
      stockID : this.props.currentStockId
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.innerText === "Remove from Watchlist") {
      this.setState({ watched: false })
      this.props.deleteWatchlist(watchlistID);
    } else {
      this.setState({ watched: true })
      this.props.createWatchlist({ stock_id: currentStockId });
    }
  }

  render() {
    
    return (
      <div className="watchlist_item_add_button"
        onClick={this.handleClick}>
        {this.state.watched ? "Remove from Watchlist" : "Add to Watchlist"}
      </div>
    )
  }
}

export default WatchlistButton