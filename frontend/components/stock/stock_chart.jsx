import React from 'react';
import { ResponsiveContainer, LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';


export default class StockChart extends React.Component {
  constructor(props){
    super(props);
  }

  formatData(stockData){
    let reArr = [];
    Object.values(stockData).map(data => {
      if (data.close) {
        reArr.push({ time: data.label, Price: data.close })
      }
    });
    return reArr;
  }

  formatBetween(stockData, time){
    let reArr  = [];
    
    Object.values(stockData).map(data => {
      if (data.close) {
        reArr.push({ time: data.label, Price: data.close })
      }
    });

    let length = reArr.length;
    if (time === '5d'){
      return reArr.slice(Math.round(length*34 / 35) );
    } else if (time === '6m'){
      return reArr.slice(Math.round(length/2));
    } else if (time === '1m'){
      return reArr.slice(Math.round( (length * 9 / 10) ));
    } else {
      return reArr;
    }
  }

  findColor(data){
    let color = "#21CE99";
    if (data[0]["Price"] > data[data.length - 1]["Price"]) {
      color = "#F45531";
    }
    return color;
  }

  render() {
    //once intraday becomes available, until then: show loading
    let data = [];
    let color;

  
    if (this.props.stockData && (this.props.time === '1d')){
      data = this.formatData(this.props.stockData);
      color = this.findColor(data);
    } else if (this.props.stockData && this.props.time){
      data = this.formatBetween(this.props.stockData, this.props.time);
      color = this.findColor(data);
    }   
   

    return(  
      <ResponsiveContainer width="100%" height="90%" >
        <LineChart
          data={data}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <XAxis dataKey='time' tick={false} axisLine={false} />
          <YAxis domain={['auto', 'auto']} tick={false} axisLine={false} />
          <Tooltip />
          <Line type="monotone" dataKey="Price" stroke={color}
            strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

// <ResponsiveContainer width="100%" height="90a%" >
        // <LineChart
        //   data={data}
        //   margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        //   <XAxis dataKey='name' tick={false} axisLine={false} />
        //   <YAxis domain={['auto', 'auto']} tick={false} axisLine={false} />
        //   <Tooltip />
        //   <Line type="monotone" dataKey="uv" stroke={color}
        //     strokeWidth={2} dot={false} />
        // </LineChart>
      // </ResponsiveContainer>



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

//domain: allows rescaling of y axis
//tick={false} axisLine={false}
// stroke = "#21CE99" strokeWidth = { 3}

