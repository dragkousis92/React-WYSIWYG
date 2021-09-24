import {
  addEditor,
  removeEditor,
  editorDataChange,
  editorWeightChange,
  editorDragged,
} from './actions';

import { omit } from 'lodash';

import editorsAvailable from './editorSetup';
import { generateComponent } from './utils';

const initialState = { editors: {}, editorsAvailable: editorsAvailable };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case addEditor.type:
      return {
        ...state,
        editors: {
          ...generateComponent(
            Object.values(state.editors).length,
            action.payload,
          ),
          ...state.editors,
        },
      };
    case removeEditor.type:
      return {
        ...state,
        editors: omit(state.editors, action.payload),
      };
    case editorDataChange.type:
      return {
        ...state,
        editors: {
          ...state.editors,
          [action.payload.editorId]: {
            ...state.editors[action.payload.editorId],
            data: action.payload.data,
          },
        },
      };
    case editorWeightChange.type:
      return {
        ...state,
        editors: {
          ...state.editors,
          [action.payload.editorId]: {
            ...state.editors[action.payload.editorId],
            weight: action.payload.weight,
          },
        },
      };
    case editorDragged.type:
      console.log(action);
      return {
        ...state,
        editors: {
          ...Object.values(state.editors).reduce(
            (newEditors, editor) => ({
              ...newEditors,
              [editor.id]: {
                ...editor,
                weight: action.payload.indexOf(editor.id),
              },
            }),
            {},
          ),
        },
      };

    default:
      return state;
  }
};

export default reducer;
