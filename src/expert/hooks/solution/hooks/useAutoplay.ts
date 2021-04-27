import { useEffect, useState } from "react";
import { Image } from "../../dto";

const DEFAULT_TIMER = 3000;

interface UseAutoplay {
  autoplay: boolean;
  setAutoplay: (autoplay: boolean) => void;
  time: number;
}

export default function useAutoplay(
  selected: Image,
  handleNext: () => void
): UseAutoplay {
  const [autoplay, setAutoplay] = useState<boolean>(false);
  const [elapsed, setElapsed] = useState<number>(0);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, DEFAULT_TIMER);

      return () => clearInterval(interval);
    }
  }, [autoplay, selected, handleNext]);

  useEffect(() => {
    setElapsed(0);

    if (autoplay) {
      const start = performance.now();
      const interval = setInterval(() => {
        setElapsed(performance.now() - start);
      }, 30);

      return () => clearInterval(interval);
    }
  }, [autoplay, selected]);

  return {
    autoplay,
    setAutoplay,
    time: (elapsed / DEFAULT_TIMER) * 100,
  };
}
