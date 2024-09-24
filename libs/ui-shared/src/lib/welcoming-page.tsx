import { cn } from '@my-org/utilities';

export interface WelcomingPageProps {
  title: string;
  logo?: React.ReactNode;
  containerClassName?: string;
  titleClassName?: string;
}

export function WelcomingPage({
  title,
  logo,
  containerClassName,
  titleClassName,
}: WelcomingPageProps) {
  return (
    <div
      className={cn(
        'h-screen w-screen flex justify-center flex-col gap-2 items-center bg-yellow-700',
        containerClassName
      )}
    >
      <h2 className={cn('text-5xl font-semibold text-white', titleClassName)}>
        {title}
      </h2>
      {logo}
    </div>
  );
}

export default WelcomingPage;
