import React from 'react';
import { Switch } from 'react-router-dom';

import HelpOrders from '~/pages/HelpOrders';
import Plans from '~/pages/Plans';
import Registrations from '~/pages/Registrations';
import SignIn from '~/pages/SignIn';
import Students from '~/pages/Students';
import StudentEdit from '~/pages/Students/edit';
import StudentRegister from '~/pages/Students/register';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      {/* STUDENTES */}
      <Route path="/students" exact component={Students} isPrivate />
      <Route
        path="/students/:id/edit"
        exact
        component={StudentEdit}
        isPrivate
      />
      <Route
        path="/students/register"
        exact
        component={StudentRegister}
        isPrivate
      />

      {/* PLANS */}
      <Route path="/plans" exact component={Plans} isPrivate />

      {/* REGISTRATIONS */}
      <Route path="/registrations" exact component={Registrations} isPrivate />

      {/* HELP ORDERS */}
      <Route path="/helpOrders" exact component={HelpOrders} isPrivate />
    </Switch>
  );
}
