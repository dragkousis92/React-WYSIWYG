import React from 'react';

type Props = {
  editorDataChange: () => void,
  editorWeightChange: () => void,
  removeEditor: () => void,
  editorId: string,
};
const withAdminWrapperComponent = Component => (props: Props) => {
  const { editorDataChange, editorWeightChange, removeEditor, editorId } =
    props;

  const updateView = editorId => data =>
    editorDataChange({
      editorId,
      data,
    });

  const updateViewWithEditorId = updateView(editorId);

  const updateWeight = editorId => weight =>
    editorWeightChange({ editorId, weight });

  const updateWeightWithEditorId = updateWeight(editorId);

  const removeEditorWithEditorId = () => {
    removeEditor(editorId);
  };

  return (
    <Component
      {...props}
      handleWeightChange={updateWeightWithEditorId}
      handleUpdate={updateViewWithEditorId}
      removeEditor={removeEditorWithEditorId}
    />
  );
};

export default withAdminWrapperComponent;
export { withAdminWrapperComponent };
