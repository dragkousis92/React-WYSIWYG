import {
  CodeBlockAdminView,
  CodeBlockRenderedView,
} from 'components/component-views/code-block';

const defaultData = {
  code: '',
  language: '',
};

const data = {
  code: '',
  language: '',
};

const codeEditorConfig = {
  AdminComponent: CodeBlockAdminView,
  ViewComponent: CodeBlockRenderedView,
  type: 'code',
  key: 'code',
  data,
  defaultData,
};

export default codeEditorConfig;
