import React from 'react';
import AdminTools from '../admintool/AdminTools';
import withAdminWrapperComponent from './withAdminWrapperComponent';
import compose from 'utilities/compose/compose';

import { withStyles } from '@material-ui/core/styles';
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
}: Props) => (
  <div className={classes?.adminEditorWrapper} id={editorId}>
    <AdminTools
      weight={weight}
      handleWeightChange={handleWeightChange}
      removeEditor={removeEditor}
      type={type}
      id={editorId}
    />
    <div className='admin-wrapper'>
      <AdminComponent handleUpdate={handleUpdate} {...defaultData} />
    </div>
  </div>
);
export default compose(
  withStyles(styles),
  withAdminWrapperComponent,
)(AdminWrapperComponent);
export { AdminWrapperComponent };
