import React from 'react';
import { ResponsiveContainer, LineChart, Line,
         XAxis, YAxis } from 'recharts';


class ListItemGraph extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    //   intraday : {}
    // }
  }

  componentDidMount(){
    if (this.props.stockInfo) {
      if (this.props.stockInfo.intraday === undefined) {
        this.props.fetchStockIntraday(this.props.ticker);
      }
    } else {
      this.props.fetchStockIntraday(this.props.ticker);
    }

    if (this.props.stockInfo) {
      if (this.props.stockInfo.year === undefined) {
        this.props.fetchStockPastData(this.props.ticker);
      }
    } else {
      this.props.fetchStockPastData(this.props.ticker);
    }

  }


  render(){

    // let chartRender = "Loading"

    let chartData = [];
    let color = "#21CE99";
    let open, current;
    let percChange;

    if (this.props.stockInfo.intraday){
      Object.values(this.props.stockInfo.intraday).map(data => {
        if (data.close) {
          chartData.push({time: data.label, Price: data.close})
        }
      });   
      open = chartData[0]["Price"];
      current = chartData[chartData.length - 1]["Price"];
      if (open > current){
        color = "#F45531";
      }
      percChange = Math.round( (current / open -1 ) * 10000 ) / 100; 
      if (percChange === 0){
        percChange = "0.00";
      }
    } 

    return(
      <div className="mini_chart">
        <LineChart width={175} height={55}
          data={chartData}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }} 
          cursor="pointer">
          <XAxis dataKey='time' tick={false} axisLine={false} hide={true}/>
          <YAxis domain={['dataMin', 'dataMax']} tick={false} axisLine={false} hide={true}/>
          <Line type="monotone" dataKey="Price" stroke={color}
            strokeWidth={2} dot={false} />
        </LineChart>
        <div className="perc_change_day">
          ${current}
          <br/>
          {percChange}%
        </div>
      </div>
    )
    
  }
}

export default ListItemGraph

