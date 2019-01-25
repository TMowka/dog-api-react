import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { locationPropTypes } from 'util/propTypes';

import NavbarItem from './NavbarItem/NavbarItem';

const propTypes = {
  location: locationPropTypes.isRequired
};

class Navbar extends Component {
  state = {
    items: [
      { path: '', name: 'Home' },
      { path: 'breeds', name: 'Breeds' },
      { path: 'about', name: 'About' }
    ],
    active: ''
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

  updateActive() {
    const { items } = this.state;
    const { location } = this.props;

    const currBasePath = location.pathname.split('/')[1].toLowerCase();
    const currBasePathIndex = items.findIndex(item => item.path === currBasePath);

    this.setState({
      active: currBasePathIndex > -1 ? currBasePath : ''
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

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <div className="nav-item">
            <Link to="/" className="navbar-brand">Dog API</Link>
          </div>
          <ul className="navbar-nav">
            {this.renderNavbarItems()}
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = propTypes;

export default withRouter(Navbar);
