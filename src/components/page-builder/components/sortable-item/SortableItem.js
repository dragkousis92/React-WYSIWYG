import React from 'react';
import { sortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

type Props = {
  children: React.Node,
};

const SortableItem = sortableElement(({ children }: Props) => (
  <li>{children}</li>
));

export { SortableItem };
export default withStyles(styles)(SortableItem);
