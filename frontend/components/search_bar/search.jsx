import React from 'react';
import { Link } from 'react-router-dom';
import { fetchStockAllListing } from '../../util/stock_api_util';


class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputVal: "",
      allStocks: []
    }
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
      this.setState({inputVal: e.target.value});
    };
  }

  matches() {
    const matches = [];

    this.state.allStocks.forEach(stock => {
      let substr = stock["ticker"].slice(0, this.state.inputVal.length);
      if (substr === this.state.inputVal.toUpperCase()){
        matches.push(stock["ticker"]);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }


  selectName(event) {
    const name = event.currentTarget.innerText;
    this.setState({ inputVal: name });
  }

  render(){
    console.log("inputVal", this.state.inputVal)

    const results = this.matches().map((result, i) => {
      return (      
        
          <Link 
            to={`/stocks/${result}`} 
            ticker={result}
            key={result}
          >
            {result}
          </Link>
        
      );
    });

    return(
      <div className="home_page_nav_bar">
        <Link to='/'>mintgreen</Link>

          <input type="text" 
            placeholder="Search"
            onChange={this.update()}
            className="home_page_nav_search"/>
          <ul>
            {results}
          </ul>     

      <button className="splash_top_nav_logout" onClick={this.props.logout}>Log Out</button>

      </div>
    )
  }
}

export default SearchBar