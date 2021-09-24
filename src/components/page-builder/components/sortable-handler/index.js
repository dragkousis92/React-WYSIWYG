import React from 'react';
import { sortableHandle } from 'react-sortable-hoc';
import DragHandleIcon from '@mui/icons-material/DragHandle';

const DragHandle = sortableHandle(() => <DragHandleIcon />);

export { DragHandle };
export default DragHandle;
