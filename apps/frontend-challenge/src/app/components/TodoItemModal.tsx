import { Todo } from '@my-org/types/todo-types';
import { GenericModal, GenericModalProps } from '@my-org/ui-shared';
import { cn, formatDate, getColorFromPriority } from '@my-org/utilities';
import { StatusSelect } from './StatusSelect';

export interface TodoItemModalProps extends GenericModalProps {
  todo: Todo;
  onUpdated: (id: string, todo: Todo) => void;
}

export const TodoItemModal: React.FC<TodoItemModalProps> = ({
  todo,
  onClose,
  isOpen,
  onUpdated,
}) => {
  const priorityColor = getColorFromPriority(todo.importance);
  const priorityText =
    todo.importance === 'high'
      ? 'High'
      : todo.importance === 'medium'
      ? 'Medium'
      : 'Low';
  const tailwindPriorityColor = `text-${priorityColor}-500`;

  return (
    <GenericModal onClose={onClose} isOpen={isOpen}>
      <div className="flex flex-col w-[80vw] max-w-[500px] max-h-[600px] overflow-y-auto p-4">
        <h1 className="text-xl font-semibold mb-2">{todo.title}</h1>
        <div className="text-sm text-gray-500">
          <span>Created: {formatDate(todo.createdAt)}</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="mt-4 flex items-center">
            <span className="text-gray-700 font-semibold">Priority:</span>
            <span className={cn(tailwindPriorityColor, 'font-semibold ml-2')}>
              {priorityText}
            </span>
          </div>
          <div className="flex item-center gap-4">
            <span className="text-gray-700 font-semibold">Status:</span>
            <StatusSelect
              value={todo.status}
              onChange={(status) => onUpdated(todo.id, { ...todo, status })}
            />
          </div>
        </div>
        {todo.description && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Notes:</h2>
            <p className="text-gray-700">{todo.description}</p>
          </div>
        )}
        <button
          className="mt-6 w-fit px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </GenericModal>
  );
};
