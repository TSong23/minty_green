import React from 'react';

export default class StockInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.info;
  }

  componentDidMount(){
    this.props.fetchCompanyInfo(this.props.ticker);    
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.ticker !== this.props.match.params.ticker) {
      this.props.fetchCompanyInfo(this.props.match.params.ticker)
    }
  }

  render(){

    return(
      <div>
        <h3>About</h3>
        {this.props.info.description}
      </div>
    )
    }

}
