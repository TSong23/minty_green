import React from 'react';
import { connect } from 'react-redux';
import sessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { clearErrors } from '../../actions/session_actions';

const mstp = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Sign Up'
})

const mdtp = dispatch => ({
  action: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(
  mstp,
  mdtp
)(sessionForm)