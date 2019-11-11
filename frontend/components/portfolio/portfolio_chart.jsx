import React from 'react';

class PortfolioChart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      allStocks : {}
    }
  } 

  componentDidMount(){
    this.props.fetchStockAllListing().then(
      res => this.setState({ allStocks: res.payload })
    );
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