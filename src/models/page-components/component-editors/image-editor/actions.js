import actionCreator from 'utilities/action-creator';

const packageCreator = actionCreator('ckeditor');

const updateEditor = packageCreator.createAction('updateEditor');
const updateView = packageCreator.createAction('updateView');
// const editorWeightChange = packageCreator.createAction('editorWeightChange');

export { updateEditor, updateView };
