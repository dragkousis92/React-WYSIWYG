import React from 'react';
import { sortableElement } from 'react-sortable-hoc';
import withStyles from '@mui/styles/withStyles';
import styles from './styles';

type Props = {
  children: React.Node,
  classes: Object,
};

const SortableItem = sortableElement(({ classes, children }: Props) => (
  <li className={classes?.sortableElement}>{children}</li>
));

export { SortableItem };
export default withStyles(styles)(SortableItem);
