import actionCreator from 'utilities/action-creator';

const packageCreator = actionCreator('administrativeComponents');

const addEditor = packageCreator.createAction('addEditor');
const removeEditor = packageCreator.createAction('removeEditor');
const editorDataChange = packageCreator.createAction('editorDataChange');
const editorWeightChange = packageCreator.createAction('editorWeightChange');
const editorDragged = packageCreator.createAction('editorDragged');
const savePage = packageCreator.createEffect('savePage');

export {
  addEditor,
  removeEditor,
  editorDataChange,
  editorWeightChange,
  editorDragged,
  savePage,
};
