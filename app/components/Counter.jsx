// components/AnimatedCounter.js
'use client'
import { useState, useEffect } from 'react';

const AnimatedCounter = ({ endValue, interval }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentValue((prevValue) => {
        const nextValue = prevValue + 1;
        return nextValue <= endValue ? nextValue : prevValue;
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [endValue, interval]);

  return (
    <div>
      {currentValue}
    </div>
  );
};

export default AnimatedCounter;
