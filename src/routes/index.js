import React from 'react';

import Login from '../pages/SignIn';
import Register from '../pages/SignUp';
import Admin from '../pages/Admin';
//import Main from '../pages/Main'

import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/admin" component={Admin} isPrivate />
         </Switch>

      </BrowserRouter>
   );
}