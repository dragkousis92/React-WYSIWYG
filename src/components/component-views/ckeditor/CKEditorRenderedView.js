import React from 'react';

type Props = {
  content: string,
};

const CKEditorView = ({ content }: Props) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
);

CKEditorView.defaultProps = { content: '' };

export { CKEditorView };
export default CKEditorView;
