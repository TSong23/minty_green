import { connect } from 'react-redux';
import SearchBar from './search';
import { logout } from '../../actions/session_actions';
import stocksReducer from '../../reducers/stocks/stock_test';

// the provider allows all files inside component to access the store

const mstp = ({ session, entities: { users, stocks } }) => ({
  currentUser: users[session.id],
  allStocks : stocks
})

const mdtp = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(
  mstp,
  mdtp
)(SearchBar);