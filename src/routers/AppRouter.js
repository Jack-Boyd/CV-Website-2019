import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import CVContainer from '../components/CVContainer';

const AppRouter = () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" component={CVContainer} exact={true}/>
      </Switch>
  </BrowserRouter>
);

export default AppRouter;