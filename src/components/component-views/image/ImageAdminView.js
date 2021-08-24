import React, { useState } from 'react';

const ImageAdminView = ({ imageSource, handleSubmit, editorId, ...rest }) => {
  const [stateImage, setImage] = useState(imageSource);

  return (
    <form
      onSubmit={() =>
        handleSubmit({ editorId: editorId, data: { imageSource: stateImage } })
      }>
      <label>
        Image:
        <input
          type='text'
          value={stateImage}
          onChange={() => setImage(event.target.value)}
        />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
};

ImageAdminView.defaultProps = {
  defaultTitle: '',
};
export { ImageAdminView };
export default ImageAdminView;
