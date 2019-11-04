import {connect} from 'react-redux';
import stockOrder from './stock_order';

import {}


const mstp = (state, ownProps) => ({
  intraday: state.entities.stocks[ownProps.match.params.ticker][intraday],
  shares: state.entities.users.ownedStocks[ownProps.match.params.ticker],
  cash: state.entities.users.cash
})

const mdtp = dispatch => ({

})


