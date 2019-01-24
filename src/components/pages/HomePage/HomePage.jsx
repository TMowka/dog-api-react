import React from 'react';
import { Link } from 'react-router-dom';

const homePage = React.memo(() => (
  <div className="container">
    <div className="row">
      <section className="p5 text-center">
        <div className="row">
          <div className="col">
            <div className="container pt-5">
              <h1>
                Application of the internet&apos;s biggest collection of open source dog pictures.
              </h1>
              <p className="d-none d-md-block">If you wanted to look at dogs of different breeds then you are in the right place.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="row text-center">
      <Link
        to="/"
        className="btn btn-outline-secondary mx-auto mt-5"
      >
        I&apos;m Feeling Lucky
      </Link>
    </div>
  </div>
));

export default homePage;
