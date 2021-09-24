import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import withStyles from '@mui/styles/withStyles';
import styles from './styles';

type Props = {
  classes: object,
  title: string,
  handleUpdate: () => void,
};

const TitleAdminView = ({
  classes,
  title: defaultTitle,
  handleUpdate,
}: Props) => {
  const [title, setTitle] = useState(defaultTitle);

  return (
    <FormControl>
      <TextField
        id='title'
        placeholder=''
        value={title}
        variant='standard'
        onChange={event => {
          setTitle(event.target.value);
          handleUpdate({ title: title });
        }}
        type='text'
        className={classes?.title}
        InputProps={{
          className: classes?.titleInput,
        }}
        label='title'
      />
    </FormControl>
  );
};

TitleAdminView.defaultProps = {
  title: '',
};
export { TitleAdminView };
export default withStyles(styles)(TitleAdminView);
