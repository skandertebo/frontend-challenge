import { cn } from '@my-org/utilities';

export interface ListProps {
  className?: string;
}

export const List: React.FC<React.PropsWithChildren<ListProps>> = ({
  children,
  className,
}) => {
  return <ul className={cn('flex flex-col gap-2', className)}>{children}</ul>;
};
