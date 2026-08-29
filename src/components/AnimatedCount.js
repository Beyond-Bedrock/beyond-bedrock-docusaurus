import React from 'react';

/**
 * CSS animated counter component using @property and CSS counters.
 * @param {number|null|undefined} props.value - The target integer to count up to.
 * @param {string|number} [props.duration='2s'] - Animation duration (e.g. '2s', '1000ms', or 1000).
 * @param {React.ReactNode} [props.placeholder='…'] - Placeholder while value is null/undefined.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @param {React.CSSProperties} [props.style={}] - Additional inline styles.
 */
export default function AnimatedCount({
  value,
  duration = '2s',
  placeholder = '…',
  className = '',
  style = {},
}) {
  if (value === null || value === undefined) {
    return <span className={className} style={style}>{placeholder}</span>;
  }

  const intValue = Math.round(Number(value) || 0);
  const formattedDuration = typeof duration === 'number' ? `${duration}ms` : duration;

  return (
    <span
      className={`animated-count ${className}`.trim()}
      style={{
        '--num': intValue,
        '--duration': formattedDuration,
        ...style,
      }}
    />
  );
}
