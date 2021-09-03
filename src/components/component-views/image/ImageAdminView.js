import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

type Props = {
  classes: object,
  image: string,
  handleUpdate: () => void,
};

const ImageAdminView = ({
  classes,
  image: defaultImage,
  handleUpdate,
}: Props) => {
  const [image, setImage] = useState(defaultImage);

  return (
    <FormControl fullWidth>
      <TextField
        id='image'
        placeholder=''
        value={image}
        onChange={event => {
          setImage(event.target.value);
          handleUpdate({ image: event.target.value });
        }}
        type='text'
        className={classes?.image}
        InputProps={{
          className: classes?.imageInput,
        }}
        label='Image'
        fullWidth
      />
    </FormControl>
  );
};

ImageAdminView.defaultProps = {
  defaultTitle: '',
};
export { ImageAdminView };
export default withStyles(styles)(ImageAdminView);
