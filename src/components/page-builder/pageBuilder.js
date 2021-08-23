import React from 'react';

import withModelProps from 'utilities/withModelProps';

import {
  editors,
  availableEditors,
  addEditor,
  removeEditor,
  editorDataChange,
  reducer,
} from 'models/page-components';

const PageBuilder = ({
  editors,
  availableEditors,
  addEditor,
  editorDataChange,
  ...rest
}) => {
  return (
    <div>
      <div>
        <span>Admin area </span>
        {availableEditors.map(editor => (
          <div key={editor.key} onClick={() => addEditor(editor)}>
            Add {editor.type}
          </div>
        ))}

        {editors.map(({ AdminComponent, id, data }) => (
          <AdminComponent
            editorId={id}
            key={id}
            {...data}
            handleSubmit={editorDataChange}
          />
        ))}
      </div>
      <hr />
      <div>
        <span>Preview area </span>
        {editors.map(({ ViewComponent, id, data }) => (
          <ViewComponent key={id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default withModelProps({
  editors,
  addEditor,
  editorDataChange,
  availableEditors,
})(PageBuilder);
