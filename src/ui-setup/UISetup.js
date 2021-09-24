import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import withStyles from '@mui/styles/withStyles';

import theme from './theme';
import styles from './styles';

type UISetupStylesProps = {
  classes: Object,
  children: HTMLElement | Object | [],
};

const UISetupStyles = withStyles(styles)(
  ({ classes, children }: UISetupStylesProps) => (
    <>
      <CssBaseline />
      <div className={classes.container}>{children}</div>
    </>
  ),
);

type UISetupProps = {
  children: HTMLElement | Object | [],
};
console.log(theme);
const UISetup = ({ children }: UISetupProps) => (
  <ThemeProvider theme={theme}>
    <UISetupStyles>{children}</UISetupStyles>
  </ThemeProvider>
);

UISetup.defaultProps = {};

export default UISetup;
