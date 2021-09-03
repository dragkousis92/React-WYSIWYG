import React from 'react';

type Props = {
  image: string,
};

const ImageRenderedView = ({ image }: Props) => (
  <div>{image && <img src={image} alt='' />}</div>
);

ImageRenderedView.defaultProps = { image: '' };

export { ImageRenderedView };
export default ImageRenderedView;
