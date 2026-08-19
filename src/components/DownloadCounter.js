import React, { useEffect, useState } from 'react';
import { getDownloadCount } from '../lib/counterClient';

export default function DownloadCounter({ file, showLabel = true }) {
  const [count, setCount] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (file) {
      getDownloadCount(file)
        .then((data) => {
          if (typeof data === 'number') setCount(data);
          else setCount(null); // We don't have a get function, so show placeholder
        })
        .catch(() => setCount(null));
    }
  }, [file]);

  if (error) return null;

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: 'var(--ifm-color-secondary)' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
      </svg>
      {showLabel && <span>{count ?? '…'} downloads</span>}
      {!showLabel && <span>{count ?? '…'}</span>}
    </span>
  );
}