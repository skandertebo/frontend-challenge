import { List, ListItem } from '@my-org/ui-shared';
import { useState } from 'react';
import useTodos from '../hooks/useTodos';
import { AddTodo } from './AddTodo';
import { Filters } from './Filters';
import { TodoItem } from './TodoItem';

export interface Filter {
  status: ('in-progress' | 'todo' | 'done')[];
  priority: ('high' | 'medium' | 'low')[];
}

export default function TodosContainer() {
  const { todos, updateTodo, removeTodo } = useTodos();
  const [filters, setFilters] = useState<Filter>({
    status: ['in-progress', 'todo', 'done'],
    priority: ['high', 'medium', 'low'],
  });
  const welcomingMessage = 'What a lovely day to be productive!';

  const todosToDisplay = todos.filter((todo) => {
    return (
      filters.status.includes(todo.status) &&
      filters.priority.includes(todo.importance)
    );
  });

  const subMessage =
    todosToDisplay.length === 0
      ? 'Start by adding a new todo.'
      : `You have ${todosToDisplay.length} ${
          todosToDisplay.length === 1 ? 'todo' : 'todos'
        }.`;

  return (
    <div className="md:px-6 md:py-6 px-1 py-2 animate-fadeIn h-full flex-1">
      <div className="flex flex-col gap-4 px-2 py-4 md:px-8 md:py-8 border border-yellow-700 rounded-xl h-full">
        <h2 className="text-2xl text-center font-semibold text-yellow-700">
          {welcomingMessage}
        </h2>
        <div className="flex items-center gap-x-4 flex-wrap">
          <p className="text-yellow-700">{subMessage}</p>
          <Filters filters={filters} setFilters={setFilters} />
        </div>
        <div className="flex flex-col h-full gap-8">
          <List className="overflow-y-auto max-h-[35vh]">
            {todosToDisplay.map((todo) => (
              <ListItem key={todo.id}>
                <TodoItem
                  todo={todo}
                  onUpdated={updateTodo}
                  onRemoved={removeTodo}
                />
              </ListItem>
            ))}
          </List>
          <AddTodo position={todosToDisplay.length === 0 ? 'top' : 'bottom'} />
        </div>
      </div>
    </div>
  );
}
