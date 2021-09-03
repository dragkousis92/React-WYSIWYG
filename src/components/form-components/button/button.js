import React from 'react';
import classnames from 'classnames';
import MuiButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

type Props = {
  classes: Object,
  status: 'primary' | 'danger',
  size: 'small' | 'medium' | 'large',
  label: string,
};

const Button = ({ classes, status, size, label }: Props) => (
  <MuiButton
    variant='contained'
    color='primary'
    className={classnames(classes?.button, {
      [classes?.primary]: status === 'primary',
      [classes?.danger]: status === 'danger',
      [classes?.small]: size === 'small',
    })}
    disableElevation>
    {label}
  </MuiButton>
);
export default withStyles(styles)(Button);
