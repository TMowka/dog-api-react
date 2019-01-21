import React from 'react';
import { Link } from 'react-router-dom';
import './Page404.css';

const page404 = React.memo(() => (
  <div className="d-flex flex-row align-items-center" id="page-404-wrap">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          <span className="display-1 d-block">404</span>
          <div className="mb-4 lead">The page you are looking for was not found.</div>
          <Link to="/" className="btn btn-link">Back to Home</Link>
        </div>
      </div>
    </div>
  </div>
));

export default page404;