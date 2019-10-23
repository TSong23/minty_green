import React from 'react';
import {fetchStockName} from '../../util/stock_api_util';


export default class StockHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      companyName : ""
    }
  }

  // componentDidMount(){
  //   fetchStockName(this.props.ticker).then(res => {
  //     this.setState({companyName : res.stock.name }) 
  //   });
  // }

  // componentDidUpdate(prevProps){
  //   console.log("Stock Header did update")
  //   if (prevProps.ticker !== this.props.ticker){
  //     fetchStockName(this.props.ticker).then(res => {
  //       this.setState({ companyName: res.stock.name })
  //     });
  //   }
  // }


  render(){
    console.log("stock header render")
    fetchStockName(this.props.ticker).then(res => {
      this.setState({ companyName: res.stock.name })
    });
    return(
      <div className="main_chart_company_title">
        {this.state.companyName}
      </div>
    )
  }

}