import React from 'react';
import { Switch } from 'react-router-dom';

import HelpOrders from '~/pages/HelpOrders';
import Plans from '~/pages/Plans';
import Registrations from '~/pages/Registrations';
import SignIn from '~/pages/SignIn';
import Students from '~/pages/Students';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/students" component={Students} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/registrations" component={Registrations} isPrivate />
      <Route path="/helpOrders" component={HelpOrders} isPrivate />
    </Switch>
  );
}
