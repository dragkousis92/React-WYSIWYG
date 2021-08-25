import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const AdminTools = ({ handleWeightChange, weight }) => {
  return (
    <div className='adminstative-controls'>
      <FormControl fullWidth>
        <TextField
          id='weight'
          placeholder=''
          value={weight}
          onChange={e => handleWeightChange(e.target.value)}
          label='weight'
          type='number'
        />
      </FormControl>
    </div>
  );
};

export default AdminTools;
export { AdminTools };
