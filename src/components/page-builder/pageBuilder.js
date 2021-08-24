import React from 'react';
import orderBy from 'lodash/orderBy';
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
  const orderedEditors = orderBy(editors, ['weight']);
  return (
    <div>
      <div>
        <span>Admin area </span>
        {availableEditors.map(editor => (
          <div key={editor.key} onClick={() => addEditor(editor)}>
            Add {editor.type}
          </div>
        ))}

        {orderedEditors.map(({ AdminComponent, id, data }) => (
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
        {orderedEditors.map(({ ViewComponent, id, data }) => (
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
