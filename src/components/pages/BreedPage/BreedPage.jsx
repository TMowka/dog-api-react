import React, { Component } from 'react';
import axios from 'axios';
import { imageByBreedUrl } from 'util/index';
import { ALERT_TYPES } from 'util/constants';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { locationPropTypes, historyPropTypes } from 'util/propTypes';
import * as actions from 'store/actions';

import Modal from 'components/partial/Modal/Modal';
import LazyImage from 'components/partial/LazyImage/LazyImage';
import BreedImageList from './BreedImageList/BreedImageList';

const propTypes = {
  location: locationPropTypes.isRequired,
  history: historyPropTypes.isRequired
};

class BreedPage extends Component {
  state = {
    images: [],
    open: false,
    activeImageIndex: -1
  };

  componentDidMount() {
    return this.fetchImages();
  }

  async componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (prevProps.location !== location) {
      this.fetchImages();
    }
  }

  handleImageClick = (index) => {
    this.setState({
      open: true,
      activeImageIndex: index
    });
  }

  handleModalClose = () => {
    this.setState({
      open: false
    });
  }

  handleModalContentClick = () => {
    const { activeImageIndex, images } = this.state;

    this.setState({
      activeImageIndex: activeImageIndex < images.length - 1 ? activeImageIndex + 1 : 0
    });
  }

  async fetchImages() {
    const {
      location, history, showAlert, hideAlert
    } = this.props;

    const currBreed = location.pathname.split('/')[2];
    const currSubBreed = location.pathname.split('/')[3];

    try {
      showAlert('', ALERT_TYPES.PENDING);

      const response = await axios.get(imageByBreedUrl(currBreed, currSubBreed));

      this.setState({
        images: response.data.message
      }, hideAlert);
    } catch (error) {
      showAlert(error.message, ALERT_TYPES.ERROR, 4000);
      history.push('/404');
    }
  }

  renderImageModal() {
    const { images, activeImageIndex, open } = this.state;

    return (
      <Modal
        open={open}
        onClose={this.handleModalClose}
        onContentClick={this.handleModalContentClick}
      >
        <div className="card">
          <LazyImage className="card-img-top text-center" src={images[activeImageIndex]} />
        </div>
      </Modal>
    );
  }

  render() {
    const { images } = this.state;

    return (
      <div className="col">
        <div className="row">
          {this.renderImageModal()}
          <BreedImageList images={images} onImageClick={this.handleImageClick} />
        </div>
      </div>
    );
  }
}

BreedPage.propTypes = propTypes;

export default compose(
  connect(null, actions),
  withRouter
)(BreedPage);
