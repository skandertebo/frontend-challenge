import { Todo } from '@my-org/types/todo-types';
import { cn, formatDate, getColorFromPriority } from '@my-org/utilities';
import { useEffect, useReducer, useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import { ConfirmDeleteTodo } from './ConfirmDeleteTodo';
import { StatusSelect } from './StatusSelect';

export interface TodoItemProps {
  todo: Todo;
  onUpdated: (id: string, todo: Todo) => void;
  onRemoved: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onUpdated,
  onRemoved,
}) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  // This is a hack to force a re-render every second to update the time ago
  const triggerRerender = useReducer((prev) => !prev, false)[1];
  useEffect(() => {
    const timeout = setTimeout(() => {
      triggerRerender();
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [todo.createdAt, todo.updatedAt]);

  const priortiyColor = getColorFromPriority(todo.importance);
  const priorityText =
    todo.importance === 'high'
      ? 'High'
      : todo.importance === 'medium'
      ? 'Medium'
      : 'Low';
  const tailwindPriorityColor = `text-${priortiyColor}-500`;

  const handleStatusChange = (status: Todo['status']) =>
    onUpdated(todo.id, { ...todo, status });

  return (
    <>
      {confirmDelete && (
        <ConfirmDeleteTodo
          isOpen={confirmDelete}
          onClose={() => setConfirmDelete(false)}
          onConfirm={() => {
            onRemoved(todo.id);
            setConfirmDelete(false);
          }}
        />
      )}
      <div className="flex gap-2 items-center justify-between w-full pe-2 animate-fadeIn">
        <div className="flex flex-col">
          <span className="text-yellow-900">{todo.title}</span>
          <span className="text-xs flex items-center gap-2">
            <span className="text-gray-500">{formatDate(todo.createdAt)}</span>
            &nbsp;-&nbsp;
            <span className="items-center gap-2 flex">
              <span className="text-yellow-800">Priority:</span>
              <span className={cn(tailwindPriorityColor, 'font-semibold')}>
                {priorityText}
              </span>
            </span>
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <StatusSelect value={todo.status} onChange={handleStatusChange} />
          <button onClick={() => setConfirmDelete(true)}>
            <BiTrash className="w-6 h-6 text-red-500 hover:text-red-600 transition-colors" />
          </button>
        </div>
      </div>
    </>
  );
};
