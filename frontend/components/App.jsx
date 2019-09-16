import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import {Route, Switch, Redirect} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import StockShowContainer from '../components/stock/stock_show_container';
import HomePageContainer from '../components/splash_home/home_page_container';

const App = () => (
  
  <div>
  <Switch>
    <ProtectedRoute exact path="/" component={HomePageContainer}/> 
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/stocks/:ticker" component={StockShowContainer} />

    <Redirect from="*" to='/' />
  </Switch>
  </div>  
);

export default App;










