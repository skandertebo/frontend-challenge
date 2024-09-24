import { Input, PrioritySelector } from '@my-org/ui-shared';
import { generateRandomString } from '@my-org/utilities';
import { useCallback, useReducer } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import { useTodoForm } from '../hooks/useTodoForm';
import useTodos from '../hooks/useTodos';

export default function TodosContainer() {
  const { todos, addTodo, updateTodo, removeTodo } = useTodos();
  const { form, updateForm } = useTodoForm();
  const [notesExpanded, toggleNotesExpanded] = useReducer(
    (prev) => !prev,
    false
  );
  const welcomingMessage =
    todos.length === 0
      ? 'What a lovely day to be productive!'
      : 'Welcome back, share with us your progress so far!';
  const subMessage =
    todos.length === 0
      ? 'Start by adding a new todo.'
      : `You have ${todos.length} todos.`;

  const handleAddTodo = useCallback(() => {
    addTodo({
      ...form,
      id: generateRandomString(),
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'todo',
    });
  }, [addTodo, form]);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updateForm({ [name]: value });
  };

  return (
    <div className="md:p-6 p-2 animate-fadeIn">
      <div className="flex flex-col gap-4 p-4 md:p-8 border border-yellow-700 rounded-xl">
        <h2 className="text-2xl text-center font-semibold text-yellow-700">
          {welcomingMessage}
        </h2>
        <p className="text-yellow-700">{subMessage}</p>
        <div className="flex flex-col gap-4">
          {todos.map((todo) => (
            <div key={todo.id} className="flex flex-col gap-2">
              <span className="text-yellow-700">{todo.title}</span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="bg-yellow-700 text-white p-2 rounded-md hover:bg-yellow-800 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex flex-col">
            <div className="flex items-start gap-2">
              <Input
                type="text"
                placeholder="Add Todo"
                containerClassName="flex-1 -mt-2"
                value={form.title}
                name="title"
                onChange={handleInputChange}
              />
              <button
                onClick={handleAddTodo}
                disabled={form.title === ''}
                className="text-yellow-600 hover:text-yellow-700 transition-colors disabled:text-gray-400 disabled:opacity-50"
              >
                <FaCirclePlus className="h-7 w-7" />
              </button>
            </div>
            <div className="flex gap-1 flex-col items-start">
              <PrioritySelector
                value={form.importance}
                name="importance"
                onChange={handleInputChange}
              />
              {!notesExpanded && (
                <button
                  className="underline text-yellow-700 font-normal text-md"
                  onClick={toggleNotesExpanded}
                >
                  Add notes
                </button>
              )}
            </div>
          </div>
          {notesExpanded && (
            <div className="flex flex-col items-start">
              <textarea
                placeholder="Add notes..."
                value={form.description}
                name="description"
                onChange={handleInputChange}
                className="p-2 border border-yellow-700 rounded-md -mt-2 w-full focus:outline-none focus:ring-1 focus:ring-yellow-700 transition-colors"
              />
              <button
                onClick={toggleNotesExpanded}
                className="underline text-yellow-700 font-normal text-md hover:text-yellow-800 transition-colors"
              >
                Hide
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
