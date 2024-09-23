import { Todo, todoListSchema } from '@my-org/types/todo-types';

export const getTodoListFromLocalStorage: () => Todo[] = () => {
  const todoList = localStorage.getItem('todoList');
  if (!todoList) {
    return [];
  }
  try {
    const parsedList = JSON.parse(todoList);
    const parseResult = todoListSchema.safeParse(parsedList);
    if (parseResult.success) {
      return parsedList;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};

export const setTodoListToLocalStorage: (todoList: Todo[]) => void = (
  todoList
) => {
  localStorage.setItem('todoList', JSON.stringify(todoList));
};
