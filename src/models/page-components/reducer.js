import {
  addEditor,
  removeEditor,
  editorDataChange,
  editorWeightChange,
} from './actions';

import editorsAvailable from './editorSetup';
import { generateComponent } from './utils';

const initialState = { editors: [], editorsAvailable: editorsAvailable };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case addEditor.type:
      return {
        ...state,
        editors: [
          generateComponent(state.editors.length + 1, action.payload),
          ...state.editors,
        ],
      };
    case removeEditor.type:
      return {
        ...state,
        editors: state.editors.filter(editor => editor.id != action.payload),
      };
    case editorDataChange.type:
      return {
        ...state,
        editors: state.editors.map(editor =>
          editor.id === action.payload.editorId
            ? { ...editor, data: action.payload.data }
            : editor,
        ),
      };
    case editorWeightChange.type:
      return {
        ...state,
        editors: state.editors.map(editor =>
          editor.id === action.payload.editorId
            ? { ...editor, weight: action.payload.weight }
            : editor,
        ),
      };

    default:
      return state;
  }
};

export default reducer;
