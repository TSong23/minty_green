import { connect } from 'react-redux';
import HomeMain from './home_page';

import {fetchStockAllListing} from  '../../actions/stock_actions';
import { fetchBusinessNews } from '../../util/news_api_util';

const mstp = (state) => ({
  // allStocks: state.entities.stocks.allStocks,
  stocks: state.entities.stocks,
  currentUser: state.entities.users[state.session.id],
  userId: state.session.id 
});


const dstp = (dispatch)=> ({
  fetchStockAllListing: () => dispatch(fetchStockAllListing()),
  fetchBusinessNews: () => fetchBusinessNews()
});

export default connect(
  mstp,
  dstp
)(HomeMain);

