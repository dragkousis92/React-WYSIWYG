import React, { useState } from 'react';
import Editor from 'lib/Ckeditor/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const CKEditorAdminView = ({ title, handleSubmit, editorId, ...rest }) => {
  const [output, setOutput] = useState('');
  const editorConfiguration = {
    toolbar: [
      'heading',
      '|',
      'bold',
      'italic',
      'underline',
      'link',
      'bulletedList',
      'numberedList',
      'alignment',
      '|',
      'outdent',
      'indent',
      'insertTable',
      'mediaEmbed',
      '|',
      'code',
      'codeBlock',
      '|',
      'imageUpload',
      'imageInsert',
      '|',
      'undo',
      'redo',
    ],
  };

  return (
    <CKEditor
      editor={Editor}
      identifier={editorId}
      config={editorConfiguration}
      data={output}
      onChange={(event, editor) => {
        const data = editor.getData();
        handleSubmit({ editorId: editorId, data: { content: data } });
        setOutput(data);
      }}
    />
  );
};

CKEditorAdminView.defaultProps = {
  defaultTitle: '',
};
export { CKEditorAdminView };
export default CKEditorAdminView;
