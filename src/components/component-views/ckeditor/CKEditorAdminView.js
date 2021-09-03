import React, { useState } from 'react';
import Editor from 'lib/Ckeditor/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';

type Props = {
  content: string,
  handleUpdate: () => void,
};

const CKEditorAdminView = ({
  content: defaultContent,
  handleUpdate,
}: Props) => {
  const [content, setContent] = useState(defaultContent);
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
      config={editorConfiguration}
      data={content}
      onChange={(event, editor) => {
        const data = editor.getData();
        handleUpdate({ content: content });
        setContent(data);
      }}
    />
  );
};

export { CKEditorAdminView };
export default CKEditorAdminView;
