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

    let allWatchItems = Object.values(this.props.watchlist_items);
    let listItems = allWatchItems.map(item => {
      return (
        <li key={item.id}>
          {item}
        </li>
      )
    })
    console.log("render for watchlist items", this.props.watchlist_items)
    return(
      <div>
        {listItems}
      </div>
    )
  }

}

export default Watchlist;