import React from 'react';
import { ReferenceLine, ResponsiveContainer, LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';


class PortfolioChart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      allStocks : {},
      time : "1d"
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

  fetchYearData(time){
    //check if 

    this.setState({time : time})
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

    // if loop to see if the state is currently intraday or in 1yr
    // if 1yr, loop through stockHash keys and fetch the 1yr data
    // then use defined functions and 1yr data to generate the graph

    if (this.state.time === "1d"){
                                                
      if (Object.keys(stockHash).length){
        allDataLoaded = Object.keys(stockHash).every(symbol => {
          return (this.props.stocks[symbol]["intraday"]);
        });
      }

      if (allDataLoaded){
        // combined data is fine
        // take the smallest data set.
        // stockHash = {"APPL" : 50 , etc}
        // combinedData = [{ticker: "APPL", Price: [200, 201]]
        let stockSymbols = Object.keys(stockHash);
        combinedData = this.combineStockData(stockSymbols);
        normalizedData = this.normalizeData(combinedData, stockHash);
      }

      if (normalizedData.length){
        if (normalizedData[0]["Value"] > normalizedData[99]["Value"]){
          color = "#F45531";
        }
        portfolioValue = normalizedData[99]["Value"];
      }
    } else{

      console.log("state change", this.state);

      // check if yearly data is all loaded
      // if (Object.keys(stockHash).length) {
      //   allDataLoaded = Object.keys(stockHash).every(symbol => {
      //     return (this.props.stocks[symbol]["year"]);
      //   });
      // }

      // if (allDataLoaded){
      //   let stockSymbols = Object.keys(stockHash);
      //   combinedData = this.combineStockData(stockSymbols);
      //   normalizedData = this.normalizeData(combinedData, stockHash);
      // }
    }

    console.log("portfolio chart", this.state);

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

        <div className="portfolio_chart_time_options">
          <button onClick={() => this.setState({ time: "1d" })}>1D</button>
          <button onClick={() => this.fetchYearData("5d")}>1W</button>
          <button onClick={() => this.fetchYearData("1m")}>1M</button>
          <button onClick={() => this.fetchYearData("6m")}>6M</button>
          <button onClick={() => this.fetchYearData("1y")}>1Y</button>
        </div>   
        
        <br/>         
        
      </div>
    )
  }
}

export default PortfolioChart;