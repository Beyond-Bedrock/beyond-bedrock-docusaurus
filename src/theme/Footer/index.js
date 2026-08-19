import React from 'react';
import Footer from '@theme-original/Footer';
import ViewCounter from '@site/src/components/ViewCounter';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <div style={{ textAlign: 'center', padding: '1rem', fontSize: '0.9rem', color: 'var(--ifm-color-secondary)' }}>
        <ViewCounter />
      </div>
    </>
  );
}