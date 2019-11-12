import React from 'react';

export default class StockInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.info;
  }

  // componentDidMount(){
  //   this.props.fetchCompanyInfo(this.props.ticker);    
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.match.params.ticker !== this.props.match.params.ticker) {
  //     this.props.fetchCompanyInfo(this.props.match.params.ticker)
  //   }
  // }

  render(){
    return(
      <div>
        <br/>
        <h3>About</h3>
        <div className="company_description">
          {this.props.info.description}
        </div>

        <div className="company_info_grid">
          <div>
            <h3>CEO</h3>
            <div>
            {this.props.info.CEO}
            </div>
          </div>
          <div>
            <h3>Employees</h3>
            <div>
              {this.props.info.employees}
            </div>
          </div>
          <div>
            <h3>Sector</h3>
            <div>
              {this.props.info.sector}
            </div>
          </div>
          <div>
            <h3>Headquarters</h3>
            <div>
              {this.props.info.city}, {this.props.info.state}
            </div>
          </div>
        </div>
      </div>
    )
    }

}
