import { ADD_TO_DO } from '../actions/action-types';

const initialState = {
  toDos: []
};

function rootReducer(state = intialState, action) {
  if (action.type === ADD_TO_DO) {
    state.toDos = [...state.toDos, action.payload];
  }
  return state;
};

export default rootReducer;