import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { locationPropTypes } from 'util/propTypes';
import PropTypes from 'prop-types';
import * as actions from 'store/actions';

import Modal from 'components/partial/Modal/Modal';
import LazyImage from 'components/partial/LazyImage/LazyImage';
import BreedImageList from './BreedImageList/BreedImageList';

const propTypes = {
  location: locationPropTypes.isRequired,
  setActiveImageIndex: PropTypes.func.isRequired,
  activeImageIndex: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

const defaultProps = {
  activeImageIndex: -1
};

class BreedPage extends Component {
  state = {
    open: false
  };

  componentDidMount() {
    return this.fetchImages();
  }

  handleImageClick = (index) => {
    const { setActiveImageIndex } = this.props;

    setActiveImageIndex(index);

    this.setState({
      open: true
    });
  }

  handleModalClose = () => {
    this.setState({
      open: false
    });
  }

  handleModalContentClick = () => {
    const { activeImageIndex, images, setActiveImageIndex } = this.props;

    setActiveImageIndex(activeImageIndex < images.length - 1 ? activeImageIndex + 1 : 0);
  }

  async fetchImages() {
    const {
      location, fetchImages, fetchRandomImages
    } = this.props;

    const currBreed = location.pathname.split('/')[2];
    const currSubBreed = location.pathname.split('/')[3];

    if (currBreed === 'image' && currSubBreed === 'random') {
      return fetchRandomImages();
    }

    return fetchImages(currBreed, currSubBreed);
  }

  renderImageModal() {
    const { open } = this.state;
    const { images, activeImageIndex } = this.props;

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
    const { images } = this.props;

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
BreedPage.defaultProps = defaultProps;

const mapStateToProps = state => ({
  images: state.images.list,
  activeImageIndex: state.images.activeIndex
});

export default compose(
  connect(mapStateToProps, actions),
  withRouter
)(BreedPage);
