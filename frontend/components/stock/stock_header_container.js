import { connect } from 'react-redux';
import {fetchStockName} from '../../actions/stock_actions';
import StockHeader from './stock_header';

// const mstp = ({ entities: { stocks } }, ownProps) => (
//   {
//   info : stocks[ownProps.match.params.ticker]
// })

const mdtp = (dispatch) => ({
  fetchStockName: (ticker) => dispatch(fetchStockName(ticker))
})  

export default connect(
  null,
  mdtp
)(StockHeader);