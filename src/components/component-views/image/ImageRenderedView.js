import React from 'react';

type Props = {
  imageSource: string,
};

const ImageRenderedView = ({ imageSource }: Props) => (
  <div>{imageSource && <img src={imageSource} />}</div>
);

ImageRenderedView.defaultProps = { imageSource: '' };

export { ImageRenderedView };
export default ImageRenderedView;
