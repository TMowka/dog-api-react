import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/partial/Header/Header';

const homePage = React.memo(() => (
  <div id="home-page">
    <Header title="Welcome to Dog API">
      <p className="mb-1">
        Application of the internet&apos;s biggest collection of open source dog pictures.
      </p>
      <p className="d-none d-md-block">If you wanted to look at dogs of different breeds then you are in</p>
    </Header>

    <section>
      <div className="container">
        <div className="row text-center">
          <Link
            to="/breeds/image/random"
            className="btn btn-outline-secondary mx-auto"
          >
            I&apos;m Feeling Lucky
          </Link>
        </div>
      </div>
    </section>
  </div>
));

export default homePage;
