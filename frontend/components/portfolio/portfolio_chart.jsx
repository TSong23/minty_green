import React from 'react';

class PortfolioChart extends React.Component{
  constructor(props){
    super(props);
  } 

  componentDidMount(){
    this.props.fetchTransactions();
  }

  render(){
    return(
      <div>
        Filler
      </div>
    )
  }
}

export default PortfolioChart;