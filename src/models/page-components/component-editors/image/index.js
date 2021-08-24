import React from 'react';
import {
  ImageAdminView,
  ImageRenderedView,
} from 'components/component-views/image';

const defaultData = {
  imageSource: '',
};

const data = {
  imageSource: '',
};

const imageEditorConfig = {
  generateHTML: content => content,
  AdminComponent: ImageAdminView,
  ViewComponent: ImageRenderedView,
  type: 'image',
  key: 'image',
  data,
  defaultData,
};

export default imageEditorConfig;
