import React, { Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';
import HomePage from 'components/pages/HomePage/HomePage';

const BreedListPage = React.lazy(() => import('components/pages/BreedListPage/BreedListPage'));
const BreedPage = React.lazy(() => import('components/pages/BreedPage/BreedPage'));
const AboutPage = React.lazy(() => import('components/pages/AboutPage/AboutPage'));
const Page404 = React.lazy(() => import('components/pages/Page404/Page404'));

const app = React.memo(() => (
  <BrowserRouter>
    <Route path="/" render={props => <Navbar {...props} />} />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact component={HomePage} />

        <Route path="/breeds/:breed/:subBreed" component={BreedPage} />
        <Route path="/breeds/:breed" component={BreedPage} />
        <Route path="/breeds" component={BreedListPage} />

        <Route path="/about" component={AboutPage} />

        <Route component={Page404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
));

export default app;
