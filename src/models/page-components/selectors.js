const editors = ({ pageComponentsReducer }) => pageComponentsReducer.editors;

const availableEditors = ({ pageComponentsReducer }) =>
  pageComponentsReducer.editorsAvailable;

export { editors, availableEditors };
