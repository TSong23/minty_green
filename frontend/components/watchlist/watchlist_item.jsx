import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Watchlist extends React.Component{
  constructor(props){
    super(props); 

  }

  componentDidMount() {
    this.props.fetchWatchlistItems(this.props.listId);
  }

  render(){
    
    let allWatchItems = Object.values(this.props.watchlist_items);
    
    let filteredList = allWatchItems.filter(item => (item.watchlist_id === this.props.listId))
    
    let listItems = filteredList.map(item => {
      let company = this.props.allStocks[item["stock_id"] - 1];
      
      if (company){
        return (
          <li>
          <NavLink
            to={`/stocks/${company.ticker}`}
            ticker={company.ticker}
            key={company.ticker}
          >
            {company.ticker}
          </NavLink>
          </li>
        )
      }else {
        return null
      }      
    })

    return(
      <ul key="watchlist items">
        {listItems}
      </ul>
    )
  }

}

export default Watchlist;