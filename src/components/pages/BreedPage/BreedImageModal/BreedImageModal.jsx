import React from 'react';
import PropTypes from 'prop-types';
import { childrenPropTypes } from 'util/propTypes';

const propTypes = {
  children: childrenPropTypes,
  onClose: PropTypes.func
};

const defaultProps = {
  children: null,
  onClose: null
};

const breedImageModal = React.memo(({ children, onClose }) => (
  <div
    className="modal"
    tabIndex="-1"
    role="dialog"
    style={{
      display: 'block',
      backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }}
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" aria-label="Close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
));

breedImageModal.propTypes = propTypes;
breedImageModal.defaultProps = defaultProps;

export default breedImageModal;
