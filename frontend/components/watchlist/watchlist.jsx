import React from 'react';


class Watchlist extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllWatchlist();
    console.log("watchlist mounted")
  }

  render(){
    console.log("watchlist", this.props.watchlists)

    return (
      <div>
        {/* {this.props.watchlists} */}
      </div>
    )

  }
}

export default Watchlist