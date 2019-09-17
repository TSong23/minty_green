import React from 'react';

// const StockInfo = ({ info, fetchCompanyInfo}) => {
//   return(
//     <div>
//       <h3>About</h3>

//       <br/>

//       <div>
//         {info.description}
//       </div>
//     </div>
//   )
// }



export default class StockInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.info;
  }

  componentDidMount(){
    let update_info = this.props.fetchCompanyInfo(this.props.ticker);
    this.setState(update_info);
    
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
