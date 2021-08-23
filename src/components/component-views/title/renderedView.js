import React from 'react';

type Props = {
  content: string,
};

const CKEditorView = ({ title }: Props) => <h1>{title}</h1>;

CKEditorView.defaultProps = { content: '' };

export { CKEditorView };
export default CKEditorView;
