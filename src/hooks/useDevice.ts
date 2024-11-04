import { useState, useEffect } from 'react';

import {
  MIN_DESKTOP_WIDTH,
  MAX_MOBILE_WIDTH,
  TDevice,
} from './endpoints';

const useDevice = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setWidth(window.innerWidth);
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (width >= MIN_DESKTOP_WIDTH) return TDevice.DESKTOP;
  if (width <= MAX_MOBILE_WIDTH) return TDevice.MOBILE;
  return TDevice.TABLET;
};

export default useDevice;
