import { connect } from 'react-redux';
import StockShow from './stock_show';
import { logout } from '../../actions/session_actions';


const mdtp = () => ({
  logout: () => dispatch(logout())
})

export default connect(
  null,
  mdtp
)(StockShow);

