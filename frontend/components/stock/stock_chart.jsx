import React from 'react';
import { ReferenceLine, ResponsiveContainer, LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';


export default class StockChart extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   console.log("stock chart")
  //   this.props.fetchStockIntraday(this.props.match.params.ticker);
  // }

  // componentDidUpdate(prevProps){
  //   if (prevProps.match.params.ticker !== this.props.match.params.ticker){
  //     this.props.fetchStockIntraday(this.props.match.params.ticker);
  //   } else if(this.props.time !== "1d" && (this.props.time !== prevProps.time) ){
  //     this.props.fetchStockPastData(this.props.match.params.ticker, this.props.time);
  //   }
  // }

  render() {
    //once intraday becomes available, until then: show loading
    console.log("stock chart render")

    // let data = [{time: 1, Close: 5}, {time:2, Close: 6}];
    let data = [];
    let color = "#21CE99";
  
    if (this.props.intradayData){

      Object.values(this.props.intradayData).map(dayData => {
        if (dayData.close) {
          data.push({ time: dayData.minute, Close: dayData.close })
        }
      })
      if (data[data.length - 1]) {
        if (data[0]["Close"] > data[data.length - 1]["Close"]) {
          color = "#F45531";
        }
      }
      console.log("stock chart render data", data, color)
    }

    // const data = [
    //   {
    //     name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    //   },
    //   {
    //     name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    //   },
    //   {
    //     name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    //   },
    //   {
    //     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    //   },
    //   {
    //     name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    //   },
    //   {
    //     name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    //   },
    //   {
    //     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    //   },
    // ];

    return(  
      // <LineChart
      //   width={500}
      //   height={300}
      //   data={data}
      //   margin={{
      //     top: 5, right: 30, left: 20, bottom: 5,
      //   }}
      // >
      //   {/* <CartesianGrid strokeDasharray="3 3" /> */}
      //   <XAxis dataKey="name" />
      //   <YAxis />
      //   <Tooltip />
      //   {/* <Legend /> */}
      //   <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      //   <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      // </LineChart>

      
      <ResponsiveContainer width="100%" height="90%" >
        <LineChart
          data={data}
          // width={500}
          // height={340}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <Tooltip />
          <XAxis dataKey='time' tick={false} axisLine={false} />
          <YAxis domain={['auto', 'auto']} tick={false} axisLine={false} />
          <Line type="monotone" dataKey="Close" stroke={color}
            strokeWidth={2} dot={false} />
          {/* <ReferenceLine y={refData} stroke="gray" strokeDasharray="3 3" /> */}
        </LineChart>
      </ResponsiveContainer>
    
    )

    // if(this.props.time === "1d"){
    //   Object.values(this.props.intraday).map(dayData => {
    //     if (dayData.close){
    //       data.push({ time: dayData.minute, Close: dayData.close })
    //     } 
    //   })
    //   if( data[data.length - 1]){
    //     if(data[0]["Close"] > data[data.length-1]["Close"]){
    //       color = "#F45531";
    //     }
    //   }

    // }else {
    //   Object.values(this.props.historical).map(dayData => {
    //     if (dayData.close) {
    //       data.push({ time: dayData.date, Close: dayData.close })
    //     }
    //   })
      
    //   if (data[data.length - 1]) {
    //     if (data[0]["Close"] > data[data.length - 1]["Close"]) {
    //       color = "#F45531";
    //     }
    //   }
    // }
    
    // return (
    //   <ResponsiveContainer width="100%" height="90%" >  
    //     <LineChart
    //       data={data}
    //       // width={500}
    //       // height={340}
    //       margin ={{ top: 0, right: 0, bottom: 0, left: 0 }}
    //     >
    //       <Tooltip/>
    //       <XAxis dataKey = 'time' tick={false} axisLine={false}/>
    //       <YAxis domain={['auto', 'auto']} tick={false} axisLine={false}/>
    //       <Line type="monotone" dataKey="Close" stroke={color} 
    //         strokeWidth={2} dot={false}/>
    //       {/* <ReferenceLine y={refData} stroke="gray" strokeDasharray="3 3" /> */}
    //     </LineChart>
    //   </ResponsiveContainer>

    // );



  }
}

//domain: allows rescaling of y axis
//tick={false} axisLine={false}
// stroke = "#21CE99" strokeWidth = { 3}

