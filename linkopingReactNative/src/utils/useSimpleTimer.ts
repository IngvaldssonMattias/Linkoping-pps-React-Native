import { useState, useRef, useEffect } from 'react';

type Mode = 'Work' | 'Break';

export const useSimpleTimer = (workTime = 30 * 60, breakTime = 10 * 60) => {
  const [timeLeft, setTimeLeft] = useState(workTime);
  const [mode, setMode] = useState<Mode>('Work');
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Byt mode och sätt ny tid
  const toggleMode = () => {
    setMode(prevMode => {
      const newMode = prevMode === 'Work' ? 'Break' : 'Work';
      setTimeLeft(newMode === 'Work' ? workTime : breakTime);
      return newMode;
    });
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            toggleMode();
            return 0; 
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning]);

  const reset = () => {
    setIsRunning(false);
    setTimeLeft(mode === 'Work' ? workTime : breakTime);
  };

  return {
    timeLeft,
    mode,
    isRunning,
    setIsRunning,
    reset,
  };
};