import { IoFilter } from 'react-icons/io5';
import { Filter } from './TodosContainer';

export interface FiltersProps {
  filters: Filter;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
}

export const Filters: React.FC<FiltersProps> = ({ filters, setFilters }) => {
  function handleAdd<T extends keyof Filter>(field: T, value: Filter[T][0]) {
    setFilters((prev) => ({
      ...prev,
      [field]: [...prev[field], value],
    }));
  }
  function handleRemove<T extends keyof Filter>(field: T, value: Filter[T][0]) {
    setFilters((prev) => ({
      ...prev,
      [field]: prev[field].filter((v) => v !== value),
    }));
  }
  function toggleAdd<T extends keyof Filter>(field: T, value: Filter[T][0]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (filters[field] as any).includes(value)
      ? handleRemove(field, value)
      : handleAdd(field, value);
  }

  return (
    <div className="flex gap-4 items-center w-full">
      <IoFilter className="text-yellow-900 h-5 w-5" />
      <div className="flex items-center justify-between gap-x-8">
        <div className="flex gap-2 items-center">
          <span className="text-yellow-900 font-semibold">Status:</span>
          <input
            type="checkbox"
            checked={filters.status.includes('in-progress')}
            onChange={() => toggleAdd('status', 'in-progress')}
            className="accent-yellow-700"
          />
          <label>In Progress</label>
          <input
            type="checkbox"
            checked={filters.status.includes('todo')}
            onChange={() => toggleAdd('status', 'todo')}
            className="accent-yellow-700"
          />
          <label>Todo</label>
          <input
            type="checkbox"
            checked={filters.status.includes('done')}
            onChange={() => toggleAdd('status', 'done')}
            className="accent-yellow-700"
          />
          <label>Done</label>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-yellow-900 font-semibold">Priority:</span>
          <input
            type="checkbox"
            checked={filters.priority.includes('high')}
            onChange={() => toggleAdd('priority', 'high')}
            className="accent-yellow-700"
          />
          <label>High</label>
          <input
            type="checkbox"
            checked={filters.priority.includes('medium')}
            onChange={() => toggleAdd('priority', 'medium')}
            className="accent-yellow-700"
          />
          <label>Medium</label>
          <input
            type="checkbox"
            checked={filters.priority.includes('low')}
            onChange={() => toggleAdd('priority', 'low')}
            className="accent-yellow-700"
          />
          <label>Low</label>
        </div>
      </div>
    </div>
  );
};
