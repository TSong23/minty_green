import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ticker: ""
    }
  }

  update(){
    return (e) => {
      this.setState({[ticker]: e.target.value})
    };
  }

  handleSubmit(e){
    //need to convert ticker to stock.id 
    // this might be a ajax request to rails backend

    const stockId = this.props.stock.id;
    this.props.history.push(`/stocks/${stockId}`);
    // this.props action should send ajax request to fetch stock
    // send you to another page
  }

  render(){

    return(
      <div className="home_page_nav_bar">
        <Link to='/'>mintgreen</Link>

        <form onSubmit={this.handleSubmit}>

          <input type="text" onChange={this.update()}/>
          <button type="submit"></button>
          

        </form>
      <button className="splash_top_nav_logout" onClick={logout}>Log Out</button>

      </div>
    )
  }
}

export default SearchBar