import './pages.scss';
import './pages.mobile.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import History from '../../history';

import MainPage from './MainPage/MainPage';
import SecondPage from './SecondPage/SecondPage';

function pages() {
  return (
    <Router history={History}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/2" component={SecondPage} />
      </Switch>
    </Router>
  );
}

export default pages;
