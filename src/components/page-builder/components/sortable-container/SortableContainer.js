import React from 'react';
import { sortableContainer } from 'react-sortable-hoc';
import withStyles from '@mui/styles/withStyles';
import styles from './styles';

type Props = {
  children: React.Node,
  classes: Object,
};

const SortableContainer = sortableContainer(({ children, classes }: Props) => (
  <ul className={classes?.sortableContainer}>{children}</ul>
));

export { SortableContainer };
export default withStyles(styles)(SortableContainer);
