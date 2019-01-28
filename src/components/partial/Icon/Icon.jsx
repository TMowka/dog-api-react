import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as GithubIcon } from 'assets/icons/github.svg';
import { ReactComponent as LinkedinIcon } from 'assets/icons/linkedin.svg';
import { ReactComponent as TelegramIcon } from 'assets/icons/telegram.svg';

const propTypes = {
  name: PropTypes.string,
  className: PropTypes.string
};

const defaultProps = {
  name: '',
  className: ''
};

const icon = React.memo(({ name, className }) => {
  let Icon;
  let color;
  switch (name) {
    case 'github':
      Icon = GithubIcon;
      color = '#333333';
      break;

    case 'linkedin':
      Icon = LinkedinIcon;
      color = '#0077b5';
      break;

    case 'telegram':
      Icon = TelegramIcon;
      color = '#0088cc';
      break;

    default:
      break;
  }

  return <Icon className={className} fill={color} />;
});

icon.propTypes = propTypes;
icon.defaultProps = defaultProps;

export default icon;
