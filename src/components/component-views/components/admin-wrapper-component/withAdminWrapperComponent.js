import React from 'react';

const withAdminWrapperComponent = Component => props => {
  const updateView = editorId => data =>
    props.editorDataChange({
      editorId,
      data,
    });

  const updateViewWithEditorId = updateView(props.editorId);

  const updateWeight = editorId => weight =>
    props.editorWeightChange({ editorId, weight });

  const updateWeightWithEditorId = updateWeight(props.editorId);

  return (
    <Component
      {...props}
      handleWeightChange={updateWeightWithEditorId}
      handleUpdate={updateViewWithEditorId}
    />
  );
};

export default withAdminWrapperComponent;
export { withAdminWrapperComponent };
