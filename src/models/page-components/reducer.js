import {
  addEditor,
  removeEditor,
  editorDataChange,
  editorWeightChange,
} from './actions';

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
            Object.values(state.editors).length + 1,
            action.payload,
          ),
          ...state.editors,
        },
      };
    case removeEditor.type:
      return {
        ...state,
        editors: state.editors.filter(editor => editor.id != action.payload),
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

        // state.editors.map(editor =>
        //   editor.id === action.payload.editorId
        //     ? { ...editor, data: action.payload.data }
        //     : editor,
        // ),
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

    default:
      return state;
  }
};

export default reducer;
