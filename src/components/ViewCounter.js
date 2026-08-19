import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import { incrementPageView } from '../lib/counterClient';

export default function ViewCounter() {
  const { pathname } = useLocation();
  const [count, setCount] = useState(null);

  useEffect(() => {
    incrementPageView(pathname)
      .then(setCount)
      .catch(() => {});
  }, [pathname]);

  return <span>👁 {count ?? '…'} views</span>;
}