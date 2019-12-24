import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from '~/pages/Dashboard';
import Students from '~/pages/Students';

import SignIn from '../pages/SignIn';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/students" component={Students} isPrivate />
      <Route path="/" component={() => <h1>Page Not Found error: 404</h1>} />
    </Switch>
  );
}
