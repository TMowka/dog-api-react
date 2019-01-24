import React from 'react';

import Navbar from 'components/Navbar/Navbar';
import Alert from 'components/partial/Alert/Alert';
import Layout from 'components/Layout/Layout';

const app = React.memo(({ children }) => (
  <>
    <Navbar />
    <Alert />
    <Layout>
      {children}
    </Layout>
  </>
));

export default app;
