import React from 'react';
import { connect } from 'react-redux';
import sessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';


const mstp = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Sign Up',
  navLink: <Link to="/login">To Login</Link>
})

const mdtp = dispatch => ({
  action: (user) => dispatch(signup(user))
})

export default connect(
  mstp,
  mdtp
)(sessionForm)