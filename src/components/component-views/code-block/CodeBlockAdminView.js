import React, { useState } from 'react';
const languageSuppport = {
  Apache: 'apache',
  Bash: 'bash',
  C: 'C',
  'C++': 'cpp',
  CSS: 'css',
  Dockerfile: 'dockerfile',
  HTML: 'html',
  XML: 'xml',
  Java: 'java',
  Javascript: 'javascript',
  Less: 'less',
  Markdown: 'markdown',
  PHP: 'php',
  Plaintext: 'text',
  SCSS: 'scss',
  Shell: 'shell',
};

const CodeEditor = ({ code, handleSubmit, editorId, ...rest }) => {
  const [text, setText] = useState(code);
  const [language, setLanguage] = useState('');

  const onChange = event => setText(event.target.value);

  const onKeyDown = event => {
    if (event.keyCode === 9) {
      event.preventDefault();
      const { selectionStart, selectionEnd } = event.target;
      setText(
        text.substring(0, selectionStart) + '\t' + text.substring(selectionEnd),
      );
    }
  };

  const languageChange = event => setLanguage(event.target.value);

  return (
    <form
      onSubmit={() =>
        handleSubmit({
          editorId: editorId,
          data: { code: text, language: language },
        })
      }>
      <select value={language} onChange={languageChange}>
        {Object.keys(languageSuppport).map(language => (
          <option key={language} value={languageSuppport[language]}>
            {language}
          </option>
        ))}
      </select>
      <textarea
        className=''
        placeholder='Write some Lyrics'
        value={text}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <input type='submit' value='Submit' />
    </form>
  );
};

CodeEditor.defaultProps = {
  defaultTitle: '',
};
export { CodeEditor };
export default CodeEditor;
