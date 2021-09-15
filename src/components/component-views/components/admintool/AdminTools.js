import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Button from 'components/form-components/button';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

type Props = {
  classes: Object,
  removeEditor: () => void,
  weight: number,
  type: string,
  id: string,
};

const AdminTools = ({ classes, weight, removeEditor, type, id }: Props) => {
  return (
    <Grid container className={classes?.adminstrativeControls}>
      <Grid item xs={12}>
        <Typography variant='h6' className={classes?.cardTitle}>
          {type} editor - {id}
        </Typography>
      </Grid>
      <Grid item xs={2} className={classes?.weightControl}>
        <span className={classes?.label}>position:{weight}</span>
      </Grid>
      <Grid item xs className={classes?.buttons}>
        <Button
          status='danger'
          onClick={removeEditor}
          label='Remove'
          size='small'
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(AdminTools);
export { AdminTools };
