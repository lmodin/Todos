import { ADD_TO_DO } from './action-types';

export function addToDo(payload) {
  return { type: ADD_TO_DO, payload}
};