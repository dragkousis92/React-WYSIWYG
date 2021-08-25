import React from 'react';

type Props = {
  editorDataChange: () => void,
  editorWeightChange: () => void,
  editorId: string,
};
const withAdminWrapperComponent = Component => (props: Props) => {
  const { editorDataChange, editorWeightChange, editorId } = props;

  const updateView = editorId => data =>
    editorDataChange({
      editorId,
      data,
    });

  const updateViewWithEditorId = updateView(editorId);

  const updateWeight = editorId => weight =>
    editorWeightChange({ editorId, weight });

  const updateWeightWithEditorId = updateWeight(editorId);

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
