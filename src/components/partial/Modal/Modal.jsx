import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { childrenPropTypes } from 'util/propTypes';
import config from 'config/index';
import './Modal.css';

const propTypes = {
  children: childrenPropTypes,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onContentClick: PropTypes.func
};

const defaultProps = {
  children: null,
  open: false,
  onClose: null,
  onContentClick: null
};

const modal = React.memo(({
  children, open, onClose, onContentClick
}) => {
  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <CSSTransition
      in={open}
      timeout={config.modalAnimationTimeout}
      classNames="modal"
      unmountOnExit
    >
      <div
        className="modal"
        tabIndex="-1"
        role="presentation"
        onClick={onClose}
      >
        <div
          className="modal-dialog"
          role="presentation"
          onClick={handleClick}
        >
          <div className="modal-content">
            <div
              className="modal-body"
              role="presentation"
              onClick={onContentClick}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
});

modal.propTypes = propTypes;
modal.defaultProps = defaultProps;

export default modal;
