import {
  ImageAdminView,
  ImageRenderedView,
} from 'components/component-views/image';

const defaultData = {
  image: '',
};

const data = {
  image: '',
};

const imageEditorConfig = {
  AdminComponent: ImageAdminView,
  ViewComponent: ImageRenderedView,
  type: 'image',
  key: 'image',
  data,
  defaultData,
};

export default imageEditorConfig;
