import {
  CKEditorAdminView,
  CKEditorRenderedView,
} from 'components/component-views/ckeditor';

const defaultData = {
  title: 'enter title here',
};

const data = {
  content: 'enter title here',
};

const ckeditorConfig = {
  generateHTML: content => content,
  AdminComponent: CKEditorAdminView,
  ViewComponent: CKEditorRenderedView,
  type: 'ckeditor',
  key: 'ck',
  data,
  defaultData,
};

export default ckeditorConfig;
