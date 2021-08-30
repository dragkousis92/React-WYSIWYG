import React from 'react';
import AdminTools from '../admintool/AdminTools';
import withAdminWrapperComponent from './withAdminWrapperComponent';
import compose from 'utilities/compose/compose';

type Props = {
  handleWeightChange: () => void,
  weight: numer,
  handleUpdate: () => void,
  removeEditor: () => void,
  AdminComponent: React.node,
  defaultData: Object,
};

const AdminWrapperComponent = ({
  handleWeightChange,
  weight,
  handleUpdate,
  removeEditor,
  AdminComponent,
  defaultData,
}: Props) => (
  <div className='admin-wrapper'>
    <AdminTools
      weight={weight}
      handleWeightChange={handleWeightChange}
      removeEditor={removeEditor}
    />
    <div className='admin-wrapper'>
      <AdminComponent handleUpdate={handleUpdate} {...defaultData} />
    </div>
  </div>
);
export default compose(withAdminWrapperComponent)(AdminWrapperComponent);
export { AdminWrapperComponent };
