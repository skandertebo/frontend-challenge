import { Todo } from '@my-org/types/todo-types';
import { cn } from '@my-org/utilities';

export interface StatusSelectProps {
  value: string;
  onChange: (value: Todo['status']) => void;
}

export const StatusSelect: React.FC<StatusSelectProps> = ({
  value,
  onChange,
}) => {
  const colorClasses = {
    todo: 'bg-yellow-600',
    'in-progress': 'bg-blue-500',
    done: 'bg-green-600',
  };

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as Todo['status'])}
      className={cn(
        'border border-gray-300 px-2 py-1 rounded-md',
        'text-white',
        'focus:outline-none',
        colorClasses[value as keyof typeof colorClasses],
        'transition-colors'
      )}
    >
      <option value="todo">Todo</option>
      <option value="in-progress">In Progress</option>
      <option value="done">Done</option>
    </select>
  );
};
