import React, { useState } from 'react';

type Props = {
  title: 'string',
};

const TitleAdminView = ({ title, handleUpdate, editorId }) => {
  const [stateTitle, setFormData] = useState(title);

  return (
    <form onSubmit={() => handleUpdate({ title: stateTitle })}>
      <label>
        Title:
        <input
          type='text'
          value={stateTitle}
          onChange={() => setFormData(event.target.value)}
        />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
};

TitleAdminView.defaultProps = {
  title: '',
};
export { TitleAdminView };
export default TitleAdminView;
