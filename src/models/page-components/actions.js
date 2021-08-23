import actionCreator from 'utilities/action-creator';

const packageCreator = actionCreator('weather');

const addEditor = packageCreator.createAction('addEditor');
const removeEditor = packageCreator.createAction('removeEditor');
const editorDataChange = packageCreator.createAction('editorWeightChange');

export { addEditor, removeEditor, editorDataChange };
