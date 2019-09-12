import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter} from 'react-router-dom';
import SplashPage from '../components/splash_dash/splash_page';
import HomeMain from '../components/splash_dash/home_page';


const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/" />
        // redirect to dashboard
      )
  )} />
);


const Protected = ({ path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <HomeMain {...props} />
    ) : (
        <SplashPage/>
      )
  )} />
);

const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.id) }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
