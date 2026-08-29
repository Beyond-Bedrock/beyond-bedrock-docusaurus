import { useState, useEffect, useRef } from 'react';

/**
 * Animates a number from 0 to the target value over the given duration.
 * Returns the current animated number (integer), or null while waiting for data.
 */
export default function useAnimatedCount(target, durationMs = 2000) {
  const [display, setDisplay] = useState(null);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    // Nothing to animate yet
    if (target === null || target === undefined) {
      setDisplay(null);
      return;
    }

    // Zero is instant
    if (target === 0) {
      setDisplay(0);
      return;
    }

    startTimeRef.current = null;

    const animate = (timestamp) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / durationMs, 1);

      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setDisplay(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [target, durationMs]);

  return display;
}
