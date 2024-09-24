import { useEffect, useState } from 'react';

export function useTimer(time = 1000): boolean {
  const [ticked, setTicked] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTicked(false);
    }, time);
  }, []);
  return ticked;
}

export default useTimer;
