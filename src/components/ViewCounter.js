import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import { incrementPageView } from '../lib/counterClient';

export default function ViewCounter() {
  const { pathname } = useLocation();
  const [count, setCount] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (pathname) {
      incrementPageView(pathname)
        .then(setCount)
        .catch(() => setError(true));
    }
  }, [pathname]);

  if (error) return null;
  return <span>👁 {count ?? '…'} views</span>;
}