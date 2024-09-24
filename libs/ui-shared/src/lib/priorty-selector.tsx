export interface PrioritySelectorProps {
  value: 'low' | 'medium' | 'high';
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PrioritySelector: React.FC<PrioritySelectorProps> = ({
  value,
  name,
  onChange,
}) => {
  return (
    <div className="flex items-center gap-x-3 flex-wrap">
      <span className="text-yellow-800">Priority:</span>
      <div className="flex gap-2 items-center">
        <input
          type="radio"
          name={name}
          value="low"
          onChange={onChange}
          checked={value === 'low'}
          className="accent-yellow-700"
          id={name + 'low'}
        />
        <label className="text-green-500" htmlFor={name + 'low'}>
          Low
        </label>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="radio"
          name={name}
          value="medium"
          onChange={onChange}
          checked={value === 'medium'}
          className="accent-yellow-700"
          id={name + 'medium'}
        />
        <label className="text-yellow-500" htmlFor={name + 'medium'}>
          Medium
        </label>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="radio"
          name={name}
          value="high"
          onChange={onChange}
          checked={value === 'high'}
          className="accent-yellow-700"
          id={name + 'high'}
        />
        <label className="text-red-500" htmlFor={name + 'high'}>
          High
        </label>
      </div>
    </div>
  );
};
