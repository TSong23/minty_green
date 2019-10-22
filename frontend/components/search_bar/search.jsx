import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
      res => {
        this.setState({
          allStocks: Object.values(res)
        })
      }
    )
  } 

  update(){
    return (e) => {
      this.setState({inputVal: e.target.value});
    };
  }

  matches() {
    const matches = [];

    if (this.state.inputVal.length !== 0){
      this.state.allStocks.forEach(stock => {

        //search by ticker or name
        let substr = stock["ticker"].slice(0, this.state.inputVal.length);
        let nameStr = stock["name"].slice(0, this.state.inputVal.length);
        if (substr === this.state.inputVal.toUpperCase() || 
          nameStr.toLowerCase() === this.state.inputVal )
        {
          if(matches.length < 6){
            matches.push([stock["ticker"],"   ",stock["name"]]);
          }
        }

      }); //end of loop      
    }

    return matches
  }

  selectName(event) {
    const name = event.currentTarget.innerText;
    this.setState({ inputVal: name });
  }

  render(){
    const results = this.matches().map((result, i) => {
      return (   
        <li key={result}>    
          <NavLink 
            to={`/stocks/${result[0]}`} 
            ticker={result[0]}
            key={result[0]}
          >
            {result}
          </NavLink>
        </li> 
      );
    });

    return(
      <div className="home_page_nav_bar">
        
        <Link to='/' className="home_nav_button">mintgreen</Link>
        <div className="home_page_nav_wrap">
          <div className="home_page_nav_search">
            <input type="text" 
              placeholder="Search"
              onChange={this.update()}
              className="home_page_nav_search_input"/>

            <ul className="home_page_nav_search_results">
              <br/>
              {results}
            </ul> 
          </div>           
        </div>  

        <button className="splash_top_nav_logout" onClick={this.props.logout}>Log Out</button>

      </div>
    )
  }
}

export default SearchBar