import React from 'react';

class OrderForm extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    console.log("order form state", this.state);
    console.log("order form props", this.props);

    return(
      <div>
        Filler
      </div>
    )

  }


}

export default OrderForm;