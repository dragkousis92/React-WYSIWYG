import React from 'react';
import Highlight from 'react-highlight';
import 'highlight.js/styles/idea.css';

type Props = {
  content: string,
};

const CodeBlockRenderedView = ({ code, language }: Props) => (
  <div>
    {code && <Highlight className={`language-${language}`}>{code}</Highlight>}
  </div>
);

CodeBlockRenderedView.defaultProps = { content: '' };

export { CodeBlockRenderedView };
export default CodeBlockRenderedView;
