import React from 'react';
import AdminTools from '../admintool/AdminTools';
import withAdminWrapperComponent from './withAdminWrapperComponent';
import Paper from '@mui/material/Paper';
import compose from 'utilities/compose/compose';
import Divider from '@mui/material/Divider';

import withStyles from '@mui/styles/withStyles';
import styles from './styles';

type Props = {
  classes: Object,
  handleWeightChange: () => void,
  weight: numer,
  handleUpdate: () => void,
  removeEditor: () => void,
  AdminComponent: React.node,
  defaultData: Object,
  type: string,
  editorId: string,
  SortHandler: React.node,
};

const AdminWrapperComponent = ({
  classes,
  weight,
  AdminComponent,
  defaultData,
  handleWeightChange,
  handleUpdate,
  removeEditor,
  editorId,
  type,
  SortHandler,
}: Props) => (
  <Paper elevation={0} className={classes?.adminEditorWrapper}>
    <div id={editorId}>
      <AdminTools
        weight={weight}
        handleWeightChange={handleWeightChange}
        removeEditor={removeEditor}
        type={type}
        id={editorId}
        SortHandler={SortHandler}
      />
      <Divider />
      <div className={classes?.adminWrapper}>
        <AdminComponent handleUpdate={handleUpdate} {...defaultData} />
      </div>
    </div>
  </Paper>
);
export default compose(
  withStyles(styles),
  withAdminWrapperComponent,
)(AdminWrapperComponent);
export { AdminWrapperComponent };
