import React from 'react';
import AdminTools from '../admintool/AdminTools';
import withAdminWrapperComponent from './withAdminWrapperComponent';
import compose from 'utilities/compose/compose';

const AdminWrapperComponent = ({
  handleWeightChange,
  weight,
  handleUpdate,
  AdminComponent,
  defaultData,
}) => (
  <div className='admin-wrapper'>
    <AdminTools weight={weight} handleWeightChange={handleWeightChange} />
    <div className='admin-wrapper'>
      <AdminComponent handleUpdate={handleUpdate} {...defaultData} />
    </div>
  </div>
);
export default compose(withAdminWrapperComponent)(AdminWrapperComponent);
export { AdminWrapperComponent };
