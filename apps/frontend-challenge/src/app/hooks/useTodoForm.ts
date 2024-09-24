import { Todo } from '@my-org/types/todo-types';
import { useReducer } from 'react';
export type TodoForm = Pick<Todo, 'title' | 'description' | 'importance'>;

const initialForm: TodoForm = {
  title: '',
  description: '',
  importance: 'medium',
};

type Action =
  | { type: 'update'; payload: Partial<TodoForm> }
  | { type: 'reset' };

function reducer(state: TodoForm, action: Action): TodoForm {
  switch (action.type) {
    case 'update':
      return { ...state, ...action.payload };
    case 'reset':
      return initialForm;
    default:
      return state;
  }
}

export function useTodoForm() {
  const [form, dispatch] = useReducer(reducer, initialForm);

  return {
    form,
    updateForm: (payload: Partial<TodoForm>) =>
      dispatch({ type: 'update', payload }),
    resetForm: () => dispatch({ type: 'reset' }),
  };
}
