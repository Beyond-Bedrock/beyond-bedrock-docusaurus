import React from 'react';
import DocItemLayout from '@theme-original/DocItem/Layout';
import ViewCounter from '@site/src/components/ViewCounter';

export default function LayoutWrapper(props) {
  return (
    <>
      <DocItemLayout {...props}>
        {props.children}
        <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--ifm-color-secondary)' }}>
          <ViewCounter />
        </div>
      </DocItemLayout>
    </>
  );
}