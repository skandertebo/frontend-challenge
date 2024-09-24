import { cn } from '@my-org/utilities';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
  inputClassName?: string;
}

export function Input({
  label,
  error,
  containerClassName,
  inputClassName,
  ...props
}: InputProps) {
  return (
    <div className={cn('flex flex-col gap-1', containerClassName)}>
      {label && (
        <label htmlFor={props.id} className="text-sm font-semibold">
          {label}
        </label>
      )}
      <input
        {...props}
        className={cn(
          'border-b-2 flex-1 border-gray-300 px-2 py-1 focus:outline-none focus:border-yellow-600 transition-colors placeholder:text-gray-400 placeholder:focus:text-yellow-600',
          inputClassName,
          error &&
            'border-red-500 placeholder:text-red-500 focus:placeholder:text-red-600'
        )}
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
}
