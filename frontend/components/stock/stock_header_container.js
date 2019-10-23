import { connect } from 'react-redux';
import {fetchStockName} from '../../actions/stock_actions';
import StockHeader from './stock_header';


const mdtp = (dispatch) => ({
  fetchStockName: (ticker) => dispatch(fetchStockName(ticker))
})  

export default connect(
  null,
  mdtp
)(StockHeader);