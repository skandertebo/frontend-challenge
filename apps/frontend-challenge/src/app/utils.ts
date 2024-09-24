import { Todo, todoListSchema } from '@my-org/types/todo-types';

export const getTodoListFromLocalStorage: () => Todo[] = () => {
  const todoList = localStorage.getItem('todoList');
  if (!todoList) {
    return [];
  }
  try {
    const parsedList = JSON.parse(todoList);
    if (!Array.isArray(parsedList)) {
      return [];
    }
    const listWithDates = parsedList.map((todo) => ({
      ...todo,
      createdAt: new Date(todo.createdAt),
      updatedAt: new Date(todo.updatedAt),
    }));
    const parseResult = todoListSchema.safeParse(listWithDates);
    if (parseResult.success) {
      return listWithDates;
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
