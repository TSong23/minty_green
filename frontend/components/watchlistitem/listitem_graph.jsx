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
    this.props.fetchStockIntraday(this.props.ticker)
  }


  render(){

    // let chartRender = "Loading"

    let chartData = [];
    let color = "#21CE99";

    if (this.props.stockInfo.intraday){
      Object.values(this.props.stockInfo.intraday).map(data => {
        if (data.close) {
          chartData.push({time: data.label, Price: data.close})
        }
      });   
      if (chartData[0]["Price"] > chartData[chartData.length -1]["Price"]){
        color = "#F45531";
      }
    } 

    return(
        <LineChart width={175} height={55}
          data={chartData}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }} 
          cursor="pointer">
          <XAxis dataKey='time' tick={false} axisLine={false} hide={true}/>
          <YAxis domain={['dataMin', 'dataMax']} tick={false} axisLine={false} hide={true}/>
          <Line type="monotone" dataKey="Price" stroke={color}
            strokeWidth={2} dot={false} />
        </LineChart>
    )
    
  }
}

export default ListItemGraph

