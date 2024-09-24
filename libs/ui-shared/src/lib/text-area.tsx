import { cn } from '@my-org/utilities';

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <textarea
      {...props}
      className={cn(
        'p-2 border border-yellow-700 rounded-md -mt-2 w-full focus:outline-none focus:ring-1 focus:ring-yellow-700 transition-colors',
        props.className
      )}
    />
  );
};
