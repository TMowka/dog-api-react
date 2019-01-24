import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'components/pages/HomePage/HomePage';

const BreedListPage = React.lazy(() => import('components/pages/BreedListPage/BreedListPage'));
const BreedPage = React.lazy(() => import('components/pages/BreedPage/BreedPage'));
const AboutPage = React.lazy(() => import('components/pages/AboutPage/AboutPage'));
const Page404 = React.lazy(() => import('components/pages/Page404/Page404'));

const router = React.memo(() => (
  <Suspense fallback={<div>Loading ...</div>}>
    <Switch>
      <Route path="/" exact component={HomePage} />

      <Route path="/breeds/:breed/:subBreed" component={BreedPage} />
      <Route path="/breeds/:breed" component={BreedPage} />
      <Route path="/breeds" component={BreedListPage} />

      <Route path="/about" component={AboutPage} />

      <Route component={Page404} />
    </Switch>
  </Suspense>
));

export default router;
