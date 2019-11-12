import React from 'react';

class OrderForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      buySell : "BUY",
      shares : 0,
      formError : ""
      
    }

    this.updateShares = this.updateShares.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    
    if (this.state.buySell === "BUY"){
      if (this.state.shares * this.props.currentPrice > this.props.cash){
        this.setState({ formError: "Not enough buying power", shares: 0})
      }else{
        this.props.createTransactions({
          stock_id: this.props.currentStockId,
          num_shares: this.state.shares,
          price: this.props.currentPrice,
          order_type: this.state.buySell
        })
        this.setState({ formError: "" })
      }
    }else{
      if (this.state.shares > this.props.shares) {
        this.setState({ formError: "Not enough shares"})
      }else{
        this.props.createTransactions({
          stock_id: this.props.currentStockId,
          num_shares: this.state.shares,
          price: this.props.currentPrice,
          order_type: this.state.buySell
        })
        this.setState({ formError: "", shares : 0})
      }
    }
    
   
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

    let estimatedCost = Math.round((this.state.shares * this.props.currentPrice) * 100) / 100;

    return(
      <div>
        <form onSubmit={this.handleSubmit} className="transaction_form">

          <div className="order_form_buy_sell">
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
            <h4>Price</h4>  <h4>${Math.round((this.props.currentPrice) * 100) / 100}</h4>
          </div>

          <div className="estimated_cost">
            <h4>Estimated Cost</h4>  <h4>{estimatedCost}</h4>
          </div>

          <div className="estimated_cost">
            <h4>Available</h4>  <h4>{cashShares}</h4>
          </div>


          <button type="submit" className="transaction_button">
            {this.state.buySell}
          </button>
          <br/>

          <div className="transaction_errors">
            <h4>{this.state.formError}</h4>
          </div>

          <br/>
        </form>
        
      </div>
    )
  }

} //class end

export default OrderForm;