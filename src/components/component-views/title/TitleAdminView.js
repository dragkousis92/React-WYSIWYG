import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';
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
