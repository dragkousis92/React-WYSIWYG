import React from 'react';
import { sortableContainer } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

type Props = {
  children: React.Node,
};

const SortableContainer = sortableContainer(({ children }: Props) => (
  <ul>{children}</ul>
));

export { SortableContainer };
export default withStyles(styles)(SortableContainer);
