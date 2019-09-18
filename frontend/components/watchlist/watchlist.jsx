import React from 'react';


class Watchlist extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllWatchlist();
  }

  render(){
    const allWatchlists = this.props.watchlists.map(list => {
      return(
        <li>
          {list}
        </li>
      )
    });

    return (
      <div>
        {allWatchlists}
      </div>
    )

  }
}

export default Watchlist