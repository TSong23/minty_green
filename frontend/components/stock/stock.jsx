import React from 'react';
import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Scatter,
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'




export default class stock_data_example extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchStock('AAPL');
  }

  render() {
    const data = [];
    Object.values(this.props.stock_data).map(dayData => {
      data.push({ date: new Date(dayData.date).toLocaleDateString(), close_p: dayData.close })
    })

    console.log(data);

    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey = 'date'/>
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="close_p" stroke="#8884d8" />
      </LineChart>
    );

  }
}


// if using react vis
// import { curveCatmullRom } from 'd3-shape';

// import {
//   XYPlot,
//   XAxis,
//   YAxis,
//   HorizontalGridLines,
//   VerticalGridLines,
//   LineSeries
// } from 'index';

