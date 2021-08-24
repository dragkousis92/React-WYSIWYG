import React, { useState } from 'react';

const TitleAdminView = ({ title, handleSubmit, editorId, ...rest }) => {
  const [stateTitle, setFormData] = useState(title);

  return (
    <form
      onSubmit={() =>
        handleSubmit({ editorId: editorId, data: { title: stateTitle } })
      }>
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
  defaultTitle: '',
};
export { TitleAdminView };
export default TitleAdminView;
