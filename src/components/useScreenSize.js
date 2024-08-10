import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState('md');

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 599px)').matches) {
        setScreenSize('xs');
      } else if (window.matchMedia('(min-width: 600px) and (max-width: 959px)').matches) {
        setScreenSize('sm');
      } else if (window.matchMedia('(min-width: 960px) and (max-width: 1279px)').matches) {
        setScreenSize('md');
      } else if (window.matchMedia('(min-width: 1280px)').matches) {
        setScreenSize('lg');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;