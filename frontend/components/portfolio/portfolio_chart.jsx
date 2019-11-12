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
    this.formatData = this.formatData.bind(this);
    this.truncateYear = this.truncateYear.bind(this);
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
        ticker: sym,
        Price: this.formatData(this.props.stocks[sym]["intraday"])
      });
    })
    
    return allDataArr
  }

  combineStockYearData(symbols, stockHash){
    let allDataArr = [];

    symbols.forEach(sym => {
      let reArr = [];
      Object.values(this.props.stocks[sym]["year"]).map(data => {
        let sharesVal = data.close * stockHash[sym];
        reArr.push({ time: data.label, Value: sharesVal})
      })
      allDataArr.push(reArr);
    })
    
    return allDataArr;
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

    let today = new Date();
    let eastTimeZone = new Date(today.getTime() + 180*60*1000);
    let currentTime = eastTimeZone.getHours() + ":" + eastTimeZone.getMinutes(); 

    // change string time to number of minutes past 9:30

    let numTime = currentTime.split(':').map(str => {
      return Number(str);
    });
    
    let minutesPast = (numTime[0] - 9) * 60 + numTime[1] - 30;
    let timeInterval = minutesPast/100;
    
    for (let j = 0; j < 100; j++){
      let sum = 0;
      multiData.forEach(dataSet => {
        sum = sum + dataSet[j];
      })

      sum = Math.round(sum * 100) / 100;

      // add the minutesPast to 9:30 
      let addMinutes = Math.round(timeInterval * j);
      let chartHours = Math.floor(addMinutes/60);
      let chartMin = addMinutes - chartHours * 60;

      // adjust for 9:30 start
      let newChartHours = chartHours + 9;
      let newChartMin = chartMin + 30;
      let ampm = 'AM';
      if (newChartMin > 60){
        newChartHours += 1;
        newChartMin -= 60;
      }
      if (newChartHours >= 12){
        ampm = 'PM';
        if (newChartHours >= 13){
          newChartHours -= 12;
        }
      }

      let chartDate = `${newChartHours}` + ":" + `${newChartMin}` + `${ampm}`;
      sumData.push({date: chartDate, Value : sum})
    }

    return sumData;
  }

  normalizeYearData(combinedData){
    let sumData = [];
    let yearDataLen = combinedData[0].length;
    for (let i = 0; i < yearDataLen; i++){
      let sum = 0;
      for (let j = 0; j < combinedData.length; j++) {
        sum = sum + combinedData[j][i]["Value"];
      }
      sum = Math.round(sum * 100) / 100;
      sumData.push({
        date: combinedData[0][i]["time"],
        Value : sum
      })
    }
    return sumData;
  }


  multiplyData(reducedData, price){
    let sharesValueArr = reducedData.map(x => x * price);
    return sharesValueArr;
  }

  truncateYear(yearData){

    let length = yearData.length;

    if (this.state.time === '5d'){
      return yearData.slice(Math.round(length * 34 / 35));
    } else if (this.state.time === '6m') {
      return yearData.slice(Math.round(length / 2));
    } else if (this.state.time === '1m') {
      return yearData.slice(Math.round((length * 9 / 10)));
    } else {
      return yearData;
    }
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
    let percChange = "0.00";
    let dayDiff = "0.00";
    let diffSign = "+"

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
        let open = normalizedData[0]["Value"];
        let current = normalizedData[normalizedData.length - 1]["Value"];
        dayDiff = Math.round((current - open) * 100) / 100;
        percChange = Math.round((current / open - 1) * 10000) / 100; 
        if (open > current){
          color = "#F45531";
          diffSign = "";
        }
        portfolioValue = normalizedData[99]["Value"];
      }

    } else{

      // check if yearly data is all loaded
      if (Object.keys(stockHash).length) {
        allDataLoaded = Object.keys(stockHash).every(symbol => {
          return (this.props.stocks[symbol]["year"]);
        });
      }

      if (allDataLoaded){
        let stockSymbols = Object.keys(stockHash);
        combinedData = this.combineStockYearData(stockSymbols, stockHash);
        let yearData = this.normalizeYearData(combinedData);

        // format the year data according to state
        normalizedData = this.truncateYear(yearData);

      }

      //calculate color, perc change, gains etc.
      if (normalizedData.length) {
        let open = normalizedData[0]["Value"];
        let current = normalizedData[normalizedData.length - 1]["Value"];
        dayDiff = Math.round((current - open) * 100) /100;
        percChange = Math.round((current / open - 1) * 10000) / 100; 
        if (open > current) {
          color = "#F45531";
          diffSign = "";
        }
        portfolioValue = normalizedData[normalizedData.length - 1]["Value"];

      }
    }



    return(
      <div className="home_page_balance_display">
        <div className="current_portfolio_value">
          Portfolio Value 
          <br/>
          <h3>${portfolioValue}</h3>
          <h4>{diffSign}${dayDiff}   {diffSign}{percChange}%</h4>
        </div>
        <div>    
          <LineChart data={normalizedData} width={760} height={300}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }} >
            <XAxis dataKey='date' tick={false} axisLine={false} />
            <YAxis domain={['auto', 'auto']} tick={false} axisLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="Value" stroke={color}
              strokeWidth={2} dot={false} />
          </LineChart>
        </div>

        <div className="portfolio_chart_time_options">
          <button onClick={() => this.setState({ time: "1d" })}>1D</button>
          <button onClick={() => this.setState({time : "5d"})}>1W</button>
          <button onClick={() => this.setState({time : "1m"})}>1M</button>
          <button onClick={() => this.setState({time : "6m"})}>6M</button>
          <button onClick={() => this.setState({time : "1y"})}>1Y</button>
        </div>   
        
        <br/>         
        
      </div>
    )
  }
}

export default PortfolioChart;