import { useState, useEffect, useRef } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const previous = useRef();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize((prev) => {
        previous.current = prev;
        return {
          width: window.innerWidth,
          height: window.innerHeight,
        };
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
