import React from 'react';
import { CartesianGrid, ResponsiveContainer, LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';


export default class StockChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      intraday: {},
      ticker: this.props.ticker
    

    }
  }

  componentDidMount(){
    this.props.fetchStockIntraday(this.props.match.params.ticker);
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.ticker !== this.props.match.params.ticker){
      this.props.fetchStockIntraday(this.props.match.params.ticker)
    }
  }



  render() {


    const data = [];
    Object.values(this.props.intraday).map(dayData => {
      
      if (dayData.close){
        data.push({ time: dayData.minute, Close: dayData.close })
      } else {
        data.push({ time: dayData.minute, Close: prev })
      }
      let prev = dayData.close
    });


    
    return (
      <ResponsiveContainer width="100%" height="90%">  
        <LineChart
          data={data}
          width={500}
          height={300}
          margin ={{ top: 30, right: 0, bottom: 0, left: 0 }}
        >
          <Tooltip/>
          <XAxis dataKey = 'time' tick={false} axisLine={false}/>
          <YAxis domain={['auto', 'auto']} tick={false} axisLine={false}/>
          <Line type="monotone" dataKey="Close" stroke="#21CE99" 
            strokeWidth={3} dot={false}/>
        </LineChart>
      </ResponsiveContainer>

    );
  }
}

//domain: allows rescaling of y axis
//tick={false} axisLine={false}
// stroke = "#21CE99" strokeWidth = { 3}

