import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import {Route, Switch, Redirect} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import StockShow from '../components/stock/stock_show';

const App = () => (
  
  <div>
  <Switch>
    <ProtectedRoute exact path="/"/> 
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route path="/stocks/:ticker" component={StockShow} />

    <Redirect from="*" to='/' />
  </Switch>
  </div>  
);

export default App;










