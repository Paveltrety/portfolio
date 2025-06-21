import { useEffect, useState } from 'react';

interface IWindowSize {
  width: number;
  height: number;
}

export const useWindowSize = (): IWindowSize => {
  const [windowDimensions, setWindowDimensions] = useState<IWindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowDimensions;
};
