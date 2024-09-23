import { atom } from 'recoil';
import { getTodoListFromLocalStorage } from '../utils';

export const todoListState = atom({
  key: 'todoListState',
  default: getTodoListFromLocalStorage(),
});
