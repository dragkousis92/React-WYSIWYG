import { addEditor, removeEditor, editorDataChange } from './actions';

import editorsAvailable from './editorSetup';
import {
  // pageObject,
  generateComponent,
  // registerComponentEditor,
  // componentEditors,
} from './utils';

const initialState = { editors: [], editorsAvailable: editorsAvailable };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case addEditor.type:
      return {
        ...state,
        editors: [generateComponent(action.payload), ...state.editors],
      };
    case removeEditor.type:
      return {
        ...state,
        editors: editors.filter(editor => editor.id != action.payload),
      };
    case editorDataChange.type:
      const { editorId, data } = action.payload;
      return {
        ...state,
        editors: state.editors.map(editor =>
          editor.id === editorId ? { ...editor, data } : editor,
        ),
      };

    default:
      return state;
  }
};

export default reducer;
