import { connect } from 'react-redux';
import HomeMain from './home_page';

import {fetchStockAllListing} from  '../../actions/stock_actions';

const mstp = (state) => ({
  allStocks: state.entities.stocks.allStocks,
  currentUser: state.entities.users[state.session.id],
  userId: state.session.id 
});


const dstp = (dispatch)=> ({
  fetchStockAllListing: () => dispatch(fetchStockAllListing())
});

export default connect(
  mstp,
  dstp
)(HomeMain);

