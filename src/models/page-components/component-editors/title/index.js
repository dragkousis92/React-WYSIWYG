import React from 'react';
import {
  CKEditorView,
  CKEditorAdminView,
} from 'components/component-views/title';

const data = {
  title: 'enter title here',
};

const ckeditorConfig = {
  generateHTML: content => content,
  AdminComponent: CKEditorAdminView,
  ViewComponent: CKEditorView,
  data,
  type: 'ckeditor',
  key: 'ck',
};

export default ckeditorConfig;
