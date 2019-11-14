import React from 'react';
import Login from '../pages/SignIn';
import Register from '../pages/SignUp';
import Admin from '../pages/Admin';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from '../routes/privateroute';
export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/admin" component={Admin} />
         </Switch>

      </BrowserRouter>
   );
}
