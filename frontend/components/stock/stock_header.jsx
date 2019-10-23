import React from 'react';
import {fetchStockName} from '../../util/stock_api_util';


export default class StockHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      companyName : ""
    }
  }

  componentDidMount(){
    fetchStockName(this.props.ticker).then(res => {
      this.setState({companyName : res.stock.name }) 
    });
  }


  render(){
    let name = this.state.companyName;
    return(
      <div className="main_chart_company_title">
        {name}
      </div>
    )
  }

}