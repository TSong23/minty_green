import { connect } from 'react-redux';
import HomeMain from './home_page';

import {fetchStockAllListing} from  '../../actions/stock_actions';

const mstp = ({entities: {stocks: {allStocks}}}) => ({
  allStocks
});


const dstp = (dispatch)=> ({
  fetchStockAllListing: () => dispatch(fetchStockAllListing())
});

export default connect(
  mstp,
  dstp
)(HomeMain);

