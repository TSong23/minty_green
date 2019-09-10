import React from 'react';
import { connect } from 'react-redux';
import sessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mstp = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Login',
  navLink: <Link to="/login">To Sign Up</Link>
})

const mdtp = dispatch => ({
  action: (user) => dispatch(login(user))
})

export default connect(
  mstp,
  mdtp
)(sessionForm)