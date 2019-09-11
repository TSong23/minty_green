import React from 'react';
import { connect } from 'react-redux';
import splashPage from './splash_page';


const mstp(state){
  debugger
  return({
  session: state.session
  });
}

// console.log("debugger ahead")
// debugger

export default connect(
  mstp
)(splashPage);
