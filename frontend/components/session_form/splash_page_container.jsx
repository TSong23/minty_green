import React from 'react';
import { connect } from 'react-redux';
import splashPage from './splash_page';


const mstp = (state)=> ({
    session: state.session
  });

export default connect(
  mstp
)(splashPage);
