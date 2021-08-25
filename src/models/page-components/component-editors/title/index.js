import {
  TitleAdminView,
  TitleRenderedView,
} from 'components/component-views/title';

const defaultData = {
  title: 'enter title here',
};

const data = {
  title: 'enter title here',
};

const titleConfig = {
  generateHTML: content => content,
  AdminComponent: TitleAdminView,
  ViewComponent: TitleRenderedView,
  type: 'title',
  key: 'title',
  data,
  defaultData,
};

export default titleConfig;
