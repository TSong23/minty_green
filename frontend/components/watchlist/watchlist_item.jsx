import React from 'react';

class Watchlist extends React.Component{
  constructor(props){
    super(props); 

  }

  componentDidMount() {
    this.props.fetchWatchlistItems(this.props.listId);
    console.log("watchlist items mounted")
  }

  render(){
    
    console.log("render for watchlist items", this.props.watchlist_items)
    return(
      <div>
        watchlist item
      </div>
    )
  }

}

export default Watchlist;