import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import withStyles from '@mui/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
  removeEditor: () => void,
  weight: number,
  type: string,
  SortHandler: React.node,
  id: string,
};

const AdminTools = ({
  classes,
  removeEditor,
  type,
  id,
  SortHandler,
}: Props) => (
  <Grid container className={classes?.adminstrativeControls}>
    <Grid item xs={12}>
      <div className={classes?.controlsHeader}>
        <div className={classes?.controlsHeaderInfo} id={id}>
          <SortHandler />
          <Typography variant='body2' className={classes?.cardTitle}>
            <b>{type}</b> component
          </Typography>
        </div>
        <DeleteIcon color='error' onClick={removeEditor} />
      </div>
    </Grid>
  </Grid>
);

export default withStyles(styles)(AdminTools);
export { AdminTools };
