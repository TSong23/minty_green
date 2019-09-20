import React from 'react';

class WatchItemButton extends React.Component{
  constructor(props){
    super(props)
    //the component when constructed has the correct  and update props
    // this.props.ticker has the current stock show info
    // go through the watchlists and find which watchlists the stock 
    // can be added to and removed from
    // has access to this.props.allStocks
    // filter through allStocks using tickers
    
  }

  

  render() {
    let stocksArr = Object.values(this.props.allStocks);
    let listItemsArr = Object.values(this.props.watchlistItems);
    let watchlistArr = [];
     Object.keys(this.props.watchlists).forEach(id => {
      watchlistArr.push([id, "false"])
    });

    //["1", "false"]
    //["2", "false"]

    let stockId;
    
    // stockId is now defined
    stocksArr.forEach( (ele, idx) =>{
      if(ele.ticker === this.props.ticker){
        stockId = idx + 1;
      }else{
        return null
      }
    })
    
    // now loop through watchlists and find out if it has the stockId
    // if it does, edit the watchlistArr and change the value

  
    listItemsArr.forEach(item => {
      if (parseInt(item.stock_id) === stockId){
        //item.watchlist_id is the watchlistId that has the stock
        // loop through watchlistArr and find if it has item.watchlist_id


        watchlistArr.forEach(ele => {
          if (parseInt(ele[0]) === item.watchlist_id){
            ele[1] = "true";
          }
        })
        
      } 
    })

    // watchlistArr now holds correct values
    // watchlist id, boolean
    // [ ["1", "true"]
    // ["2", "true"] ]
    
    // <button onClick={this.addToWatchList()}>{buttonText}</button>
    console.log("arr", watchlistArr);
    let deleteitemId;
  

    //iteration through watchlistArr and add buttons accordingly
    let watchlist_options = watchlistArr.map(arr => {
      if (arr[1] === 'false'){
        let ajaxlistid = arr[0];
        return(
          <div className="watchlist_item_option_button">
            <button onClick={() => 
              this.props.createWatchlistItem({ stock_id: stockId, watchlist_id: ajaxlistid})
          }>
              {`Add to Watchlist ${arr[0]}`}
            </button>
          </div>
        ) 
      } else{
          // has to find the primary key by finding correct watchlist_id and stock_id
          let item_listId = arr[0];
          
          listItemsArr.forEach((obj, idx) =>{
            if (obj.watchlist_id === parseInt(item_listId) && (obj.stock_id === stockId)){
              
              deleteitemId = idx + 1;
              
            }
          }) 
      
          console.log(deleteitemId)
          return (
            <div className="watchlist_item_option_button">
              <button onClick={() =>
                this.props.deleteWatchlistItem(deleteitemId)
              }>
                {`Remove from Watchlist ${arr[0]}`}
              </button>
            </div>
          )
        }  
    })

    console.log("watchlistitem arr", listItemsArr)
    return(
      <div className="watchlist_item_option_container">
        {watchlist_options}
      </div>
    )
  }
}

export default WatchItemButton