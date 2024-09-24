import { Header, WelcomingPage } from '@my-org/ui-shared';
import { cn } from '@my-org/utilities';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import TodosContainer from './components/TodosContainer';

export default function TodoApp() {
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false);
    }, 2100);
  }, []);

  return (
    <>
      {showIntro && (
        <WelcomingPage
          title="Todo!"
          titleClassName="animate-fadeIn"
          containerClassName="fixed animate-fadeOutLater flex-row gap-4"
          logo={<FaCheck className="animate-fadeIn h-12 w-12 text-white" />}
        />
      )}
      <div className={cn('flex flex-col h-screen', showIntro && 'hidden')}>
        <Header
          title="Todo App"
          headerClassName="bg-yellow-700 text-white md:py-6 gap-2 md:px-12"
          icon={<FaCheck className="h-6 w-6" />}
        />
        <TodosContainer />
      </div>
    </>
  );
}
