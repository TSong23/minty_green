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
      sum = Math.round(sum * 100) / 100;
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

    // normalizedData = [
    //   { Value: 29096.749999999996 }
    //   ,{ Value: 29136 }
    //   ,{ Value: 29174.25 }
    //   ,{ Value: 29169.5 }
    //   ,{ Value: 29180.25 }
    //   ,{ Value: 29198.5 }
    //   ,{ Value: 29209.25 }
    //   ,{ Value: 29172 }
    //   ,{ Value: 29220.25 }
    //   ,{ Value: 29204.75 }
    //   ,{ Value: 29203.25 }
    //   ,{ Value: 29202.75 }
    //   ,{ Value: 29222.5 }
    //   ,{ Value: 29225 }
    //   ,{ Value: 29245.25 }
    //   ,{ Value: 29256.5 }
    //   ,{ Value: 29260 }
    //   ,{ Value: 29277.5 }
    //   ,{ Value: 29276.5 }
    //   ,{ Value: 29297.25 }
    //   ,{ Value: 29320.25 }
    //   ,{ Value: 29288 }
    //   ,{ Value: 29299 }
    //   ,{ Value: 29309.5 }
    //   ,{ Value: 29301.25 }
    //   ,{ Value: 29306.250000000004 }     
    // ];
    if (normalizedData.length){
      if (normalizedData[0]["Value"] > normalizedData[99]["Value"]){
        color = "#F45531";
      }
      portfolioValue = normalizedData[99]["Value"];
    }

    
    return(
      <div className="home_page_balance_display">
        <div className="current_portfolio_value">
          Portfolio Value 
          <br/>
          <h3>${portfolioValue}</h3>
        </div>
        <div>    
          <LineChart data={normalizedData} width={760} height={300}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}>
            <Tooltip />
            <YAxis domain={['auto', 'auto']} tick={false} axisLine={false} />
            <Line type="monotone" dataKey="Value" stroke={color}
              strokeWidth={2} dot={false} />
          </LineChart>
        </div>
        
      </div>
    )
  }
}

export default PortfolioChart;