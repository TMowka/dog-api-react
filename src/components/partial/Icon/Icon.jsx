import React from 'react';
import PropTypes from 'prop-types';

import twitterIcon from 'assets/icons/twitter.svg';

const propTypes = {
  name: PropTypes.string
};

const defaultProps = {
  name: ''
};

const icon = React.memo(({ name }) => {
  let iconSvg;
  switch (name) {
    case 'twitter':
      iconSvg = twitterIcon;
      break;

    default:
      break;
  }

  return <i>{iconSvg}</i>;
});

icon.propTypes = propTypes;
icon.defaultProps = defaultProps;

export default icon;
