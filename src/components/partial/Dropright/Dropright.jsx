import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { childrenPropTypes } from 'util/propTypes';

const propTypes = {
  children: childrenPropTypes,
  items: PropTypes.arrayOf(PropTypes.node)
};

const defaultProps = {
  children: null,
  items: null
};

// #region Item
const itemPropTypes = {
  children: childrenPropTypes
};

const itemDefaultProps = {
  children: null
};
// #endregion Item

class Dropright extends Component {
  static Item({ children }) {
    return (
      <div className="dropdown-item text-center">
        {children}
      </div>
    );
  }

  state = {
    expand: false
  };

  componentWillUnmount() {
    clearTimeout(this.mouseLeaveTimeout);
  }

  handleToggleExpand = () => {
    const { expand } = this.state;

    this.setState({
      expand: !expand
    });
  }

  handleMouseEnter = () => {
    clearTimeout(this.mouseLeaveTimeout);

    this.setState({
      expand: true
    });
  }

  handleMouseLeave = () => {
    this.mouseLeaveTimeout = setTimeout(() => {
      this.setState({
        expand: false
      });
    }, 300);
  }

  render() {
    const { expand } = this.state;
    const { children, items } = this.props;

    return (
      <div className="btn-group dropright">
        {children}
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
          onClick={this.handleToggleExpand}
          onMouseLeave={this.handleMouseLeave}
        >
          <span className="sr-only">Toggle Dropright</span>
        </button>
        <div
          className={`dropdown-menu ${expand ? 'show' : ''}`}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {items}
        </div>
      </div>
    );
  }
}

Dropright.propTypes = propTypes;
Dropright.defaultProps = defaultProps;

Dropright.Item.propTypes = itemPropTypes;
Dropright.Item.defaultProps = itemDefaultProps;

export default Dropright;
