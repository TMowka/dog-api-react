import React from 'react';
import { childrenPropTypes } from 'util/propTypes';

import Navbar from 'components/Navbar/Navbar';
import Alert from 'components/partial/Alert/Alert';
import Layout from 'components/Layout/Layout';

const propTypes = {
  children: childrenPropTypes
};

const defaultProps = {
  children: null
};

const app = React.memo(({ children }) => (
  <>
    <Navbar />
    <Alert />
    <Layout>
      {children}
    </Layout>
  </>
));

app.propTypes = propTypes;
app.defaultProps = defaultProps;

export default app;
