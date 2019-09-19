import React from 'react';
import WatchlistItemContainer from './watchlistitem_container';

class Watchlist extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllWatchlist(this.props.userId);
    console.log("watchlist mounted", this.props.userId)
  }

  render(){
    let allListID = Object.keys(this.props.watchlists).map(id => parseInt(id));
    let allLists = allListID.map(id => {
      return (
        // console.log(id)
        <ul>
          <WatchlistItemContainer 
            listId={id}
            key={id}/> 
        </ul>
      )     
    })

    console.log("watchlist render", Object.values(this.props.watchlists))

    return (
      <div>
        {allLists}
      </div>
    )

  }
}

export default Watchlist