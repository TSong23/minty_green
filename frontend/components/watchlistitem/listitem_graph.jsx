import React from 'react';

class ListItemGraph extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      intraday : {}
    }
  }

  componentDidMount(){
    if (this.props.stockInfo){
      this.props.fetchStockIntraday(this.props.ticker)
    }
  }

  render(){
  
    return(
      <div>
        ListItemGraph Filler
      </div>
    )
  }
}

export default ListItemGraph