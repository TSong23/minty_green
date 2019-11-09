import {connect} from 'react-redux';
import MyStocks from './my_stocks';
import { fetchStockAllListing } from '../../actions/stock_actions';

const mstp = ({entities}) => ({
  ownedStocks : entities.users.ownedStocks
})

const mdtp = dispatch => ({
  fetchStockAllListing: () => dispatch(fetchStockAllListing())
})

export default connect(
  mstp,
  mdtp
)(MyStocks)