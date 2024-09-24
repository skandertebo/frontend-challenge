import { useCallback, useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseViewport {
  width: number;
  height: number;
}

export function useViewport(): UseViewport {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width, height };
}

export default useViewport;
