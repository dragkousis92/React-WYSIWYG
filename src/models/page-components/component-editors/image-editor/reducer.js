import { updateEditor, updateView } from './actions';

const initialInputState = { content: '', viewHTML: '' };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case updateEditor.type:
      return {
        ...state,
        content: action.payload,
      };
    case updateView.type:
      return {
        ...state,
        viewHTML: action.payload,
      };

    default:
      return state;
  }
};
