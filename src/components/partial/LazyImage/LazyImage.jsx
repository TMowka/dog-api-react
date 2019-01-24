import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import unloadedImage from 'assets/images/empty-image.png';

const propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.instanceOf(Object)
};

const defaultProps = {
  src: '',
  alt: '',
  className: '',
  style: null
};

class LazyImage extends PureComponent {
  state = {
    loaded: false,
    error: false
  };

  componentDidMount() {
    const { src } = this.props;

    const img = new Image();
    img.onload = () => this.setState({ loaded: true });
    img.onerror = () => this.setState({ error: true });
    img.src = src;
  }

  render() {
    const { error, loaded } = this.state;
    const {
      className, style, src, alt
    } = this.props;

    return (
      <img
        className={className}
        style={style}
        src={error || !loaded ? unloadedImage : src}
        alt={alt}
      />
    );
  }
}

LazyImage.propTypes = propTypes;
LazyImage.defaultProps = defaultProps;

export default LazyImage;
