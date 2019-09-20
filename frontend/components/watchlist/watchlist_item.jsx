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
          
          <NavLink
            to={`/stocks/${company.ticker}`}
            ticker={company.ticker}
            key={company.ticker}
          >
            <div className="watchlist_items">
              <div>{company.ticker}</div>
            </div> 
          </NavLink>
         
        )
      }else {
        return null
      }      
    })

    return(
      <div key="watchlist items" className="watchlist_items_container">
        {listItems}
      </div>
    )
  }

}

export default Watchlist;