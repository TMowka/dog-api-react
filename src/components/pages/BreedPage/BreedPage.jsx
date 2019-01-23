import React, { Component } from 'react';
import axios from 'axios';
import config from 'config';
import { withRouter } from 'react-router-dom';
import { locationPropTypes, historyPropTypes } from 'util/propTypes';

import Layout from 'components/partial/Layout/Layout';
import BreedImageList from './BreedImageList/BreedImageList';
import BreedImageModal from './BreedImageModal/BreedImageModal';
import BreedThumbnailImage from './BreedThumbnailImage/BreedThumbnailImage';

const propTypes = {
  location: locationPropTypes.isRequired,
  history: historyPropTypes.isRequired
};

class BreedPage extends Component {
  state = {
    images: [],
    activeImageIndex: -1
  };

  componentDidMount() {
    return this.fetchImages();
  }

  async componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (prevProps.location !== location) {
      await this.fetchImages();
    }
  }

  handleImageClick = (index) => {
    this.setState({
      activeImageIndex: index
    });
  }

  async fetchImages() {
    const { location, history } = this.props;

    const currBreed = location.pathname.split('/')[2];
    const currSubBreed = location.pathname.split('/')[3];

    try {
      const response = await axios.get(config.api.imagesByBreed(currBreed, currSubBreed));

      this.setState({
        images: response.data.message
      });
    } catch (error) {
      history.push('/404');
    }
  }

  renderImageModal() {
    const { images, activeImageIndex } = this.state;

    return activeImageIndex > -1
      ? (
        <BreedImageModal
          src={images[activeImageIndex]}
          onClose={() => this.handleImageClick(-1)}
        >
          <div className="card">
            <BreedThumbnailImage className="card-img-top text-center" src={images[activeImageIndex]} />
          </div>
        </BreedImageModal>
      )
      : null;
  }

  render() {
    const { images } = this.state;

    return (
      <Layout>
        <div className="col">
          <div className="row">
            {this.renderImageModal()}
            <BreedImageList images={images} onImageClick={this.handleImageClick} />
          </div>
        </div>
      </Layout>
    );
  }
}

BreedPage.propTypes = propTypes;

export default withRouter(BreedPage);
