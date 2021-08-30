import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

type Props = {
  handleWeightChange: () => void,
  removeEditor: () => void,
  weight: number,
};

const AdminTools = ({ handleWeightChange, weight, removeEditor }: Props) => {
  return (
    <div className='adminstative-controls'>
      <FormControl fullWidth>
        <TextField
          id='weight'
          placeholder=''
          value={weight}
          onChange={e => handleWeightChange(parseInt(e.target.value))}
          label='weight'
          type='number'
        />
      </FormControl>
      <div
        role='button'
        onClick={removeEditor}
        onKeyDown={removeEditor}
        tabIndex='0'>
        Remove
      </div>
    </div>
  );
};

export default AdminTools;
export { AdminTools };
