import React from 'react';


export default class StockHeader extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    //   name: ""
    // }
  }

  // componentDidMount(){
  //   debugger
  //   this.setState({
  //     name: this.props.fetchStockName(this.props.ticker)
  //   })
  // }

  render(){
    // console.log(this.props.ticker)

    return(
      <div className="main_chart_company_title">
        {this.props.info.companyName}
      </div>
    )
  }

}