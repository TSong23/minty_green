import React from 'react';
import { CartesianGrid, ResponsiveContainer, LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';


export default class StockChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      intraday: {}

    }
  }

  componentDidMount(){
    this.props.fetchStockIntraday(`${this.props.ticker}`);
  }

  render() {
    const data = [];
    Object.values(this.props.intraday).map(dayData => {
      data.push({ date: new Date(dayData.date).toLocaleDateString(), Close: dayData.close })
    })
    
    console.log(this.props.ticker)

    return (
      <ResponsiveContainer width="100%" height="90%">  
        <LineChart
          data={data}
          width={500}
          height={300}
          margin ={{ top: 30, right: 0, bottom: 0, left: 0 }}
        >
          <Tooltip/>
          <XAxis dataKey = 'date' tick={false} axisLine={false}/>
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

