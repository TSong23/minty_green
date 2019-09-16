import React from 'react';
import { Link } from 'react-router-dom';
import { fetchStockAllListing } from '../../util/stock_api_util';


class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputval: "",
      allStocks: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectName = this.selectName.bind(this);
  }

  componentDidMount(){
    fetchStockAllListing().then(
      res => this.setState({
        allStocks: Object.values(res)
      })
    )


  } 

  update(){
    return (e) => {
      this.setState({inputval: e.target.value})

    };
  }

  matches() {
    const matches = [];

    this.state.allStocks.forEach(stock => {
      let substr = stock["ticker"].slice(0, this.state.inputval.length);
      if (substr === this.state.inputval.toUpperCase()){
        matches.push(stock["ticker"]);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  handleSubmit(e){
    //need to convert ticker to stock.id 
    // this might be a ajax request to rails backend
    e.preventDefault();
    // const stock = Object.assign({}, this.state);
    // this.props.history.push(`/stocks/${this.state}`);
    // console.log(this.props.history)

    // this.props action should send ajax request to fetch stock
    // send you to another page
  }

  selectName(event) {
    const name = event.currentTarget.innerText;
    this.setState({ inputVal: name });
  }

  render(){
    // console.log(this.state.allStocks)
    // console.log(this.state.allStocks[2])

    const results = this.matches().map((result, i) => {
      return (
        <li key={`${i}`}>{result}</li>
      );
    });

    return(
      <div className="home_page_nav_bar">
        <Link to='/'>mintgreen</Link>

        <form className= "home_page_nav_search" onSubmit={this.handleSubmit}>

          <input type="text" 
            placeholder="Search"
            value={this.state.inputval}
            onChange={this.update()}
            className="search_bar_input"/>
          <ul>
            {results}
          </ul>
          <button type="submit"></button>
          

        </form>
      <button className="splash_top_nav_logout" onClick={this.props.logout}>Log Out</button>

      </div>
    )
  }
}

export default SearchBar