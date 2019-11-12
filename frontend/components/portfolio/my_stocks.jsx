import React from 'react'; 
import { NavLink, Link } from 'react-router-dom';
import ListItemGraph from '../watchlistitem/listitem_graph_container';

class MyStocks extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      stocks : {}
    }

  }

  componentDidMount(){
    this.props.fetchStockAllListing().then(
      res => this.setState({ stocks: res.payload })
    );
  }

  render(){

    let ownedStockIDs = Object.keys(this.props.ownedStocks);
    let allTickers = [];
    let allSymbolID = {};
    let ownedStockSym = [];

    if (Object.keys(this.state.stocks).length) {
      allTickers = Object.keys(this.state.stocks);
      allTickers.map(sym => {
        let stockID = this.state.stocks[sym]["id"];
        allSymbolID[stockID] = sym;
      })
    } 

    if (Object.keys(allSymbolID).length){
      ownedStockSym = ownedStockIDs.map(ID => {
        let stockSym = allSymbolID[ID];
        let numShares = this.props.ownedStocks[`${ID}`];
        return (
          <NavLink to={`/stocks/${stockSym}`}
            ticker={stockSym} key={stockSym} className="watchlist_items">
            <div className="watchlist_items_stock_sym">
              {stockSym}
              <br/>
              <div className="watchlist_items_num_shares">{numShares} Shares</div>
              
            </div>
            <div className="mini_chart_container">
              <ListItemGraph ticker={stockSym}></ListItemGraph>
            </div>
          </NavLink>
        );
      });
    }





    
    return(
      <div className="right_col_watchlist_container">
        <h3>My Stocks</h3>
        {ownedStockSym}
      </div>
    )
  }
}

export default MyStocks;