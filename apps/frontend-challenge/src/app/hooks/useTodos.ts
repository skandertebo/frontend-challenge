import { Todo } from '@my-org/types/todo-types';
import { useRecoilState } from 'recoil';
import { todoListState } from '../store/atoms';
import { setTodoListToLocalStorage } from '../utils';

export interface UseTodosReturn {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, todo: Todo) => void;
}

export default function useTodos(): UseTodosReturn {
  const [todos, setTodos] = useRecoilState(todoListState);

  function addTodo(todo: Todo) {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    setTodoListToLocalStorage(newTodos);
  }

  function removeTodo(id: string) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setTodoListToLocalStorage(newTodos);
  }

  function updateTodo(id: string, todo: Todo) {
    const newTodos = todos.map((t) => (t.id === id ? todo : t));
    setTodos(newTodos);
    setTodoListToLocalStorage(newTodos);
  }

  return {
    todos,
    addTodo,
    removeTodo,
    updateTodo,
  };
}
