import React from 'react'
import { Route, IndexRoute } from 'react-router';
import App from './containers/App/App';
import Home from './containers/Home/Home';
import adminPlaceholder from './components/TestMiddlePanel/testRoute';
import Profile from './components/Profile/profile';
import Registration from './components/Profile/registration';
import Login from './components/Profile/login';
import PasswordReset from './components/Profile/passwordReset';


export default (
  <Route path="/browse" component={App}>
  	<IndexRoute component={Home}/>
    <Route path="/admin" component={adminPlaceholder} />
    <Route path="/profile" component={Profile} />
    <Route path="/auth/registration" component={Registration} />
    <Route path="/auth/login" component={Login} />
    <Route path="/auth/passwordreset" component={PasswordReset} />
  </Route>
)
