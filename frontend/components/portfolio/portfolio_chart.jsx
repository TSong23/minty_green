import React from 'react';
import { ReferenceLine, ResponsiveContainer, LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';


class PortfolioChart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      allStocks : {}
    }

    this.combineStockData = this.combineStockData.bind(this);
    this.normalizeData = this.normalizeData.bind(this);
  } 

  componentDidMount(){
    this.props.fetchStockAllListing().then(
      res => this.setState({ allStocks: res.payload })
    );
  }

  combineStockData(symbols){
    let allDataArr = [];
    symbols.forEach(sym => {
      allDataArr.push({
        ticker : sym,
        Price: this.formatData(this.props.stocks[sym]["intraday"])
      });
    })
    return allDataArr
  }

  formatData(stockData){
    let reArr = [];
    let reducedArr = [];
    Object.values(stockData).map(data => {
      if (data.close) {
        reArr.push(data.close)
      }
    });
    let step = reArr.length / 100;
    for (let i = 0; i < reArr.length; i = i + step){
      let j = Math.round(i);
      reducedArr.push(reArr[j]);
    }
    if (reducedArr.length > 100){
      reducedArr.pop();
    }
    return reducedArr;
  }

  normalizeData(combinedData, stockHash){
    let multiData = [];
    let sumData = [];
    
    for (let i = 0; i < combinedData.length; i++){
      Object.keys(stockHash).forEach(sym => {
        if (combinedData[i]["ticker"] === sym){
          multiData.push(this.multiplyData(combinedData[i]["Price"], stockHash[sym]));
        }
      })
    }
    
    for (let j = 0; j < 100; j++){
      let sum = 0;
      multiData.forEach(dataSet => {
        sum = sum + dataSet[j];
      })
      sumData.push({"Value" : sum})
    }
    return sumData;
  }

  multiplyData(reducedData, price){
    let sharesValueArr = reducedData.map(x => x * price);
    return sharesValueArr;
  }


  render(){

    
    let ownedStockIDs = Object.keys(this.props.ownedStocks);
    let stockHash = {};
    let allSymbolID = {};
    let allDataLoaded = false;
    let combinedData;
    let normalizedData = [];
    let color = "#21CE99";
    let portfolioValue = 0;

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

    // iterate through each of the stocks intraday on the list and find the info 
    // combine the values and make new graph

    if (Object.keys(stockHash).length){
      allDataLoaded = Object.keys(stockHash).every(symbol => {
        return (this.props.stocks[symbol]["intraday"]);
      });
    }


    if (allDataLoaded){
      let stockSymbols = Object.keys(stockHash);
      combinedData = this.combineStockData(stockSymbols);
      // combined data is fine
      // take the smallest data set.
      // stockHash = {"APPL" : 50 , etc}
      // combinedData = [{ticker: "APPL", Price: [200, 201]]
      normalizedData = this.normalizeData(combinedData, stockHash);
    }

    if (normalizedData.length){
      if (normalizedData[0]["Value"] > normalizedData[99]["Value"]){
        color = "#F45531";
      }
      portfolioValue = normalizedData[99]["Value"];
    }

    debugger

    return(
      <div>
        <div>
          Portfolio Value {portfolioValue}
        </div>
        <LineChart
          data={normalizedData}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <YAxis domain={['auto', 'auto']} tick={false} axisLine={false} />
          <Tooltip />
          <Line type="monotone" dataKey="Value" stroke={color}
            strokeWidth={2} dot={false} />
        </LineChart>
      </div>
    )
  }
}

export default PortfolioChart;