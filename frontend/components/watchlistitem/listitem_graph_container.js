import { connect } from 'react-redux';
import ListItemGraph from './listitem_graph';
import {
  fetchStockPastData,
  fetchCompanyInfo,
  fetchStockIntraday,
  fetchStockAllListing
} from '../../actions/stock_actions';

const mstp = (state, ownProps) => ({
  stockInfo : state.entities.stocks[ownProps.ticker]

});

const mdtp = dispatch => ({
  fetchStockIntraday : (ticker) => dispatch(fetchStockIntraday(ticker)),
})


export default connect(
  mstp,
  mdtp
)(ListItemGraph);