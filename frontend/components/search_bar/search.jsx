import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ticker: ""
    }
    console.log("state is ")
    console.log(this.state)
    //state now has ticker

    console.log("props are")
    console.log(this.props)
  }

  update(){
    return (e) => {
      this.setState({ticker: e.target.value})
      console.log(this.state)
    };
  }

  handleSubmit(e){
    //need to convert ticker to stock.id 
    // this might be a ajax request to rails backend
    e.preventDefault();
    const stockId = 
    this.props.history.push(`/stocks/${stockId}`);
    // this.props action should send ajax request to fetch stock
    // send you to another page
  }

  render(){

    return(
      <div className="home_page_nav_bar">
        <Link to='/'>mintgreen</Link>

        <form className= "home_page_nav_search" onSubmit={this.handleSubmit}>

          <input type="text" onChange={this.update()}/>
          <button type="submit"></button>
          

        </form>
      <button className="splash_top_nav_logout" onClick={this.props.logout}>Log Out</button>

      </div>
    )
  }
}

export default SearchBar