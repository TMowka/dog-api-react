import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ALERT_TYPES } from 'util/constants';
import { CSSTransition } from 'react-transition-group';
import config from 'config/index';
import './Alert.css';

const propTypes = {
  visible: PropTypes.bool,
  message: PropTypes.string,
  type: PropTypes.oneOf([...Object.values(ALERT_TYPES), ''])
};

const defaultProps = {
  visible: false,
  message: '',
  type: ''
};

const alert = ({ visible, message, type }) => {
  const classes = ['alert'];
  let content = message;

  switch (type) {
    case ALERT_TYPES.PRIMARY:
      classes.push('alert-primary');
      break;

    case ALERT_TYPES.SUCCESS:
      classes.push('alert-success');
      break;

    case ALERT_TYPES.ERROR:
      classes.push('alert-danger');
      break;

    case ALERT_TYPES.PENDING:
      classes.push('alert-secondary');
      content = (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
      break;

    default:
      classes.push('alert-primary');
      break;
  }

  return (
    <CSSTransition
      in={visible}
      timeout={config.alertAnimationTimeout}
      classNames="alert-box"
      unmountOnExit
    >
      <div className="alert-box mr-5">
        <div className={classes.join(' ')} role="alert">
          {content}
        </div>
      </div>
    </CSSTransition>
  );
};

alert.propTypes = propTypes;
alert.defaultProps = defaultProps;

const mapStateToProps = state => ({
  visible: state.alert.visible,
  message: state.alert.message,
  type: state.alert.type
});

export default connect(mapStateToProps)(alert);
