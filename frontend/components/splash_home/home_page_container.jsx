import { connect } from 'react-redux';
import HomeMain from './home_page';

import {fetchStockAllListing} from  '../../actions/stock_actions';


const dstp = (dispatch)=> ({
  fetchStockAllListing: () => dispatch(fetchStockAllListing())
});

export default connect(
  null,
  dstp
)(HomeMain);

