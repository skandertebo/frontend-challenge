import { Input, PrioritySelector, TextArea } from '@my-org/ui-shared';
import { cn, generateRandomString } from '@my-org/utilities';
import { useCallback, useReducer } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { useTodoForm } from '../hooks/useTodoForm';
import useTodos from '../hooks/useTodos';

export interface AddTodoProps {
  position?: 'top' | 'bottom';
}

export const AddTodo: React.FC<AddTodoProps> = ({ position }) => {
  const { todos, addTodo } = useTodos();
  const { form, updateForm, resetForm } = useTodoForm();
  const [notesExpanded, toggleNotesExpanded] = useReducer(
    (prev) => !prev,
    false
  );

  const handleAddTodo = useCallback(() => {
    if (form.title === '') return;
    addTodo({
      ...form,
      id: generateRandomString(),
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'todo',
    });
    resetForm();
    toast.success('Todo added successfully!', {
      autoClose: 1400,
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
    <div
      className={cn(
        'flex flex-col mb-16 sm:mb-8',
        position === 'bottom' && 'mt-auto mb-16 sm:mb-2'
      )}
    >
      <div className="flex flex-col">
        <div className="flex items-start gap-2">
          <Input
            type="text"
            placeholder="Add Todo"
            containerClassName="flex-1 -mt-2"
            value={form.title}
            name="title"
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
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

          <button
            className={cn(
              'underline text-yellow-700 font-normal text-md',
              notesExpanded && 'invisible'
            )}
            onClick={toggleNotesExpanded}
          >
            Add notes
          </button>
        </div>
      </div>

      <div
        className={cn(
          'flex flex-col items-start',
          !notesExpanded ? 'invisible' : 'animate-swipeIn'
        )}
      >
        <TextArea
          placeholder="Add notes..."
          value={form.description}
          name="description"
          onChange={handleInputChange}
          className="p-2 border border-yellow-700 rounded-md -mt-2 w-full focus:outline-none focus:ring-1 focus:ring-yellow-700 transition-colors"
          onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
        />
        <button
          onClick={toggleNotesExpanded}
          className="underline text-yellow-700 font-normal text-md hover:text-yellow-800 transition-colors"
        >
          Hide
        </button>
      </div>
    </div>
  );
};
