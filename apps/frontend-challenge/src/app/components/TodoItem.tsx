import { useViewport } from '@my-org/hooks';
import { Todo } from '@my-org/types/todo-types';
import {
  cn,
  formatDate,
  formatTrimmedText,
  getColorFromPriority,
} from '@my-org/utilities';
import { useEffect, useReducer, useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import { ConfirmDeleteTodo } from './ConfirmDeleteTodo';
import { StatusSelect } from './StatusSelect';
import { TodoItemModal } from './TodoItemModal';

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
  const [isSelected, setIsSelected] = useState(false);
  const { width } = useViewport();

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

  const handleTrashClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setConfirmDelete(true);
  };

  const handleItemClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (
      target instanceof HTMLSelectElement ||
      target.closest('select') ||
      target.closest('button')
    ) {
      return;
    }
    setIsSelected(true);
  };

  return (
    <>
      <ConfirmDeleteTodo
        isOpen={confirmDelete}
        onClose={() => setConfirmDelete(false)}
        onConfirm={() => {
          onRemoved(todo.id);
          setConfirmDelete(false);
        }}
      />
      <TodoItemModal
        isOpen={isSelected}
        onClose={() => setIsSelected(false)}
        todo={todo}
        onUpdated={onUpdated}
      />
      <div
        className="flex gap-2 py-2 px-1 items-center justify-between w-full md:pe-4 md:ps-2 rounded-md animate-fadeIn hover:bg-gray-200 transition-colors"
        role="button"
        onClick={handleItemClick}
      >
        <div className="flex flex-col">
          <span className="text-yellow-900 overflow-hidden">
            {width > 640
              ? formatTrimmedText(todo.title, 80)
              : formatTrimmedText(todo.title, 20)}
          </span>
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
          <button onClick={handleTrashClick}>
            <BiTrash className="w-6 h-6 text-red-500 hover:text-red-600 transition-colors" />
          </button>
        </div>
      </div>
    </>
  );
};
