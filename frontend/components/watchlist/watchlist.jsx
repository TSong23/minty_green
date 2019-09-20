import React from 'react';
import WatchlistItemContainer from './watchlistitem_container';

class Watchlist extends React.Component {
  constructor(props){
    super(props);
    this.props.fetchAllWatchlist();
  }

  // componentDidMount(){
  //   this.props.fetchAllWatchlist();
  // }

  render(){
    // console.log("when does watchlist show?",this.props.watchlists)
    let allListID;
    let allLists;
    if (this.props.watchlists){
      allListID = Object.keys(this.props.watchlists).map(id => parseInt(id));
      allLists = allListID.map(id => {
        return (
          // console.log(id)
          <div key={id} className="watchlist">
            <h3>Watchlist {id}</h3>
              <WatchlistItemContainer 
                listId={id}
                allStocks={this.props.allStocks}
              /> 
            
          </div>
        )     
      })
    }else{
      allLists = null;
    }

    // console.log("watchlist render", Object.values(this.props.watchlists))

    return (
      <div key="watchlists" className="right_col_watchlist_container">
        {allLists}

      </div>
    )

  }
}

export default Watchlist