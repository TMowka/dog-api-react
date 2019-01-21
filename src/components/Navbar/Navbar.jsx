import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'store/actions';

import NavbarItem from './NavbarItem/NavbarItem';

const propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired,
  searchBreedChange: PropTypes.func.isRequired
};

class Navbar extends Component {
  state = {
    items: [
      { path: 'breeds', name: 'Breeds' },
      { path: 'about', name: 'About' }
    ],
    active: '',
    searchVisible: false
  };

  componentDidMount() {
    this.updateActive();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (prevProps.location !== location) {
      this.updateActive();
    }
  }

  handleSearchChange = (event) => {
    const { searchBreedChange } = this.props;

    searchBreedChange(event.target.value);
  }

  updateActive() {
    const { items } = this.state;
    const { location } = this.props;

    const currBasePath = location.pathname.split('/')[1].toLowerCase();
    const currBasePathIndex = items.findIndex(item => item.path === currBasePath);

    this.setState({
      active: currBasePathIndex > -1 ? currBasePath : '',
      searchVisible: currBasePathIndex === 0
    });
  }

  renderNavbarItems() {
    const { items, active } = this.state;

    return items.map(item => (
      <NavbarItem
        key={item.name}
        to={`/${item.path}`}
        active={item.path === active}
      >
        {item.name}
      </NavbarItem>
    ));
  }

  renderSearch() {
    const { searchVisible } = this.state;

    if (!searchVisible) {
      return null;
    }

    return (
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search breed"
          aria-label="Search"
          onChange={this.handleSearchChange}
        />
      </form>
    );
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-sm bg-light">
        <div className="container">
          <Link to="/">Dog API</Link>
          {this.renderSearch()}
          <ul className="nav">
            {this.renderNavbarItems()}
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = propTypes;

export default connect(null, actions)(Navbar);
