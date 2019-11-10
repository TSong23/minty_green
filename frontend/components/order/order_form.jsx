import React from 'react';

class OrderForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      buySell : "BUY",
      shares : 0
    }

    this.updateShares = this.updateShares.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    console.log("form submit", this.state.buySell, 
    this.state.shares, this.props.currentPrice, 
      this.props.currentStockId);
    
    this.props.createTransactions({
      stock_id: this.props.currentStockId,
      num_shares: this.state.shares,
      price: this.props.currentPrice,
      order_type: this.state.buySell
    })
  }

  updateShares(e){
    this.setState({shares : e.currentTarget.value})
  }


  render(){
    let cashShares;
    if(this.state.buySell === "BUY"){
      cashShares = `$${this.props.cash}`;
    } else{
      if (this.props.shares){
        cashShares = `${this.props.shares} Shares`
      }
    }

    return(
      <div>
        <form onSubmit={this.handleSubmit} className="transaction_form">

          <div>
            <button onClick={(e) => { 
              e.preventDefault(); 
              this.setState({ buySell: "BUY" })
            }}> 
              <h3>BUY {this.props.ticker}</h3>
            </button>
            <button onClick={(e) => {
              e.preventDefault();
              this.setState({ buySell: "SELL" })
            }}>
              <h3>SELL {this.props.ticker}</h3> 
            </button>
          </div>

          <div className="shares_input">
            <h4>Shares</h4>
            <input 
              type="number" min="0" className="shares_input_background"
              onChange={this.updateShares}
            />
          </div>


          <div className="transaction_price">
            <h4>Price</h4>  <h4>${this.props.currentPrice}</h4>
          </div>
{/* 
          <div className="estimated_cost">
            <h4>Estimated Cost</h4>  <h4>{cashShares}</h4>
          </div> */}

          <div className="estimated_cost">
            <h4>Available</h4>  <h4>{cashShares}</h4>
          </div>


          <button type="submit" className="transaction_button">
            {this.state.buySell}
          </button>
          <br/>
        </form>
        
      </div>
    )
  }

} //class end

export default OrderForm;