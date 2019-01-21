import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from 'store/actions';

import Layout from 'components/partial/Layout/Layout';
import Card from 'components/Card/Card';

const propTypes = {
  breeds: PropTypes.instanceOf(Object),
  fetchBreedList: PropTypes.func.isRequired,
  pending: PropTypes.bool,
  filter: PropTypes.string
};

const defaultProps = {
  breeds: null,
  pending: false,
  filter: ''
};

class BreedListPage extends Component {
  componentDidMount() {
    this.fetchBreedList();
  }

  fetchBreedList() {
    const { fetchBreedList } = this.props;

    fetchBreedList();
  }

  renderSpinner() {
    const { pending } = this.props;

    return pending
      ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
      : null;
  }

  renderBreeds() {
    const { breeds, filter } = this.props;

    if (!breeds) {
      return null;
    }

    return Object.keys(breeds)
      .filter(breed => breed.includes(filter))
      .map(breed => (
        <Card key={breed}>
          <Link to={`/breeds/${breed}`}>{breed}</Link>
        </Card>
      ));
  }

  render() {
    return (
      <Layout>
        {this.renderSpinner()}
        <div className="card-columns mt-2">
          {this.renderBreeds()}
        </div>
      </Layout>
    );
  }
}

BreedListPage.propTypes = propTypes;
BreedListPage.defaultProps = defaultProps;

const mapStateToProps = state => ({
  breeds: state.breeds.list,
  pending: state.breeds.pending,
  filter: state.breeds.filter
});

export default connect(mapStateToProps, actions)(BreedListPage);
