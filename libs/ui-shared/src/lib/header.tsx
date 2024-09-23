import { cn } from '@my-org/utilities';

export interface HeaderProps {
  headerClassName?: string;
  title: string;
  titleClassName?: string;
  icon?: React.ReactNode;
}

export function Header({
  headerClassName,
  title,
  titleClassName,
  icon,
}: HeaderProps) {
  return (
    <header
      className={cn(
        'flex',
        'items-center bg-yellow-300 py-3 px-4',
        headerClassName
      )}
    >
      {icon && <div className={cn('mr-2')}>{icon}</div>}
      <h1 className={cn('text-xl font-semibold', titleClassName)}>{title}</h1>
    </header>
  );
}

export default Header;
