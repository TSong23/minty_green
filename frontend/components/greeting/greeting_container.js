import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

// the provider allows all files inside component to access the store

const mstp = ({session, entities: {users}}) => ({
  currentUser:  users[session.id]
})

const mdtp = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(
  mstp, 
  mdtp
)(Greeting);
