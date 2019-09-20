import React from 'react';


export default class StockHeader extends React.Component{
  constructor(props){
    super(props);
  }


  render(){

    return(
      <div className="main_chart_company_title">
        {this.props.info.companyName}
      </div>
    )
  }

}