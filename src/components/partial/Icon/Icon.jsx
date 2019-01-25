import React from 'react';
import PropTypes from 'prop-types';

import githubSvg from 'assets/icons/github.svg';
import linkedinSvg from 'assets/icons/linkedin.svg';
import telegramSvg from 'assets/icons/telegram.svg';

const propTypes = {
  name: PropTypes.string,
  className: PropTypes.string
};

const defaultProps = {
  name: '',
  className: ''
};

const icon = React.memo(({ name, className }) => {
  let iconSvg;
  switch (name) {
    case 'github':
      iconSvg = githubSvg;
      break;

    case 'linkedin':
      iconSvg = linkedinSvg;
      break;

    case 'telegram':
      iconSvg = telegramSvg;
      break;

    default:
      break;
  }

  return <img src={iconSvg} alt={name} className={className} />;
});

icon.propTypes = propTypes;
icon.defaultProps = defaultProps;

export default icon;
