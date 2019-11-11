import React from 'react';

class PortfolioChart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      allStocks : {}
    }
  } 

  componentDidMount(){
    this.props.fetchStockAllListing().then(
      res => this.setState({ allStocks: res.payload })
    );
  }



  render(){

    
    let ownedStockIDs = Object.keys(this.props.ownedStocks);
    let stockHash = {};
    let allSymbolID = {};
    let allDataLoaded = "false";

    if (Object.keys(this.state.allStocks).length) {
      Object.keys(this.state.allStocks).map(sym => {
        let stockID = this.state.allStocks[sym]["id"];
        allSymbolID[stockID] = sym;
      });
    }

    if (Object.keys(allSymbolID).length) {
      ownedStockIDs.map(ID => {
        let stockSym = allSymbolID[ID];
        stockHash[stockSym] = this.props.ownedStocks[`${ID}`];
      });
    }

    console.log("portfolio stock hash", stockHash);


    // iterate through each of the stocks intraday on the list and find the info 
    // combine the values and make new graph

    if (Object.keys(stockHash).length){
      allDataLoaded = Object.keys(stockHash).every(symbol => {
        return (this.props.stocks[symbol]["intraday"]);
      });
    }



    return(
      <div>
        Filler
      </div>
    )
  }
}

export default PortfolioChart;