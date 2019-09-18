import React from 'react';
import WatchlistItemContainer from './watchlistitem_container';

class Watchlist extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllWatchlist();
    // console.log("watchlist mounted") working
  }

  render(){
    // console.log("watchlist", Object.values(this.props.watchlists)) working
    let allListID = Object.keys(this.props.watchlists).map(id => parseInt(id));
    let allLists = allListID.map(id => {
      // list is an object.
      // need to return the stocks associated to this watchlist
      // create container for watchlist_items and then return the stocks associated
      // currently fetching all the watchlists, not just the ones owned by user
      
      return <WatchlistItemContainer listId={id}/>      
    })

    return (
      <div>
        watchlists
      </div>
    )

  }
}

export default Watchlist