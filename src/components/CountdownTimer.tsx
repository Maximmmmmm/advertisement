import { useState, useEffect } from 'react';

const INITIAL_HOURS = 10;
const STORAGE_KEY = 'countdown_target';

export function CountdownTimer() {
  const newTarget = () => {
    const t = new Date(new Date().getTime() + INITIAL_HOURS * 60 * 60 * 1000);
    localStorage.setItem(STORAGE_KEY, t.toISOString());
    return t;
  };

  const getTarget = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const t = new Date(saved);
      // якщо збережений таргет вже в минулому — створюємо новий
      if (t.getTime() > new Date().getTime()) return t;
    }
    return newTarget();
  };

  const [target, setTarget] = useState(getTarget);

  const calculateTimeLeft = (t: Date) => {
    const difference = t.getTime() - new Date().getTime();
    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(target));

  useEffect(() => {
    const timer = setInterval(() => {
      const left = calculateTimeLeft(target);

      if (left.hours === 0 && left.minutes === 0 && left.seconds === 0) {
        const resetTarget = newTarget();
        setTarget(resetTarget);
        setTimeLeft(calculateTimeLeft(resetTarget));
      } else {
        setTimeLeft(left);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex gap-3 justify-center items-center">
      <div className="bg-red-600 text-white px-4 py-3 rounded-lg min-w-[70px] text-center">
        <div className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="text-xs opacity-90">годин</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="bg-red-600 text-white px-4 py-3 rounded-lg min-w-[70px] text-center">
        <div className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="text-xs opacity-90">хвилин</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="bg-red-600 text-white px-4 py-3 rounded-lg min-w-[70px] text-center">
        <div className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="text-xs opacity-90">секунд</div>
      </div>
    </div>
  );
}