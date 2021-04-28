import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from 'app/pages/Landing';

const AppRoutes = (): React.ReactElement => (
  <Switch>
    <Route path="/home" component={Landing} />
  </Switch>
);

export default AppRoutes;
