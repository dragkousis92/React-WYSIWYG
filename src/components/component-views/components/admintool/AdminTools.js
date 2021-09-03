import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Button from 'components/form-components/button';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

type Props = {
  classes: Object,
  handleWeightChange: () => void,
  removeEditor: () => void,
  weight: number,
  type: string,
};

const AdminTools = ({
  classes,
  handleWeightChange,
  weight,
  removeEditor,
  type,
}: Props) => {
  return (
    <Grid container className={classes?.adminstrativeControls}>
      <Grid item xs={12}>
        <Typography variant='h6' className={classes?.cardTitle}>
          {type} editor
        </Typography>
      </Grid>
      <Grid item xs={2} className={classes?.weightControl}>
        <span className={classes?.label}>position:</span>

        <FormControl>
          <TextField
            id='weight'
            placeholder=''
            value={weight}
            onChange={e => handleWeightChange(parseInt(e.target.value))}
            type='number'
            className={classes?.weight}
            InputProps={{
              className: classes?.weightInput,
            }}
          />
        </FormControl>
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
