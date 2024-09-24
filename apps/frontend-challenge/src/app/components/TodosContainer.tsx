import { List, ListItem } from '@my-org/ui-shared';
import useTodos from '../hooks/useTodos';
import { AddTodo } from './AddTodo';
import { TodoItem } from './TodoItem';

export default function TodosContainer() {
  const { todos, updateTodo, removeTodo } = useTodos();

  const welcomingMessage = 'What a lovely day to be productive!';

  const subMessage =
    todos.length === 0
      ? 'Start by adding a new todo.'
      : `You have ${todos.length} ${todos.length === 1 ? 'todo' : 'todos'}.`;

  return (
    <div className="md:p-6 p-2 animate-fadeIn h-full flex-1">
      <div className="flex flex-col gap-4 p-4 md:p-8 border border-yellow-700 rounded-xl h-full">
        <h2 className="text-2xl text-center font-semibold text-yellow-700">
          {welcomingMessage}
        </h2>
        <p className="text-yellow-700">{subMessage}</p>
        <div className="flex flex-col h-full gap-8">
          <List className="overflow-y-auto max-h-[35vh]">
            {todos.map((todo) => (
              <ListItem key={todo.id}>
                <TodoItem
                  todo={todo}
                  onUpdated={updateTodo}
                  onRemoved={removeTodo}
                />
              </ListItem>
            ))}
          </List>
          <AddTodo />
        </div>
      </div>
    </div>
  );
}
