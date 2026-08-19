import React from 'react';
import Layout from '@theme-original/Layout';
import Head from '@docusaurus/Head';
import ViewCounter from '@site/src/components/ViewCounter';

export default function LayoutWrapper(props) {
  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7542591684540065"
          crossOrigin="anonymous"
        />
      </Head>
      <Layout {...props}>
        {props.children}
        <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--ifm-color-secondary)', textAlign: 'center', paddingBottom: '2rem' }}>
          <ViewCounter incrementOnMount={true} showLabel={true} />
        </div>
      </Layout>
    </>
  );
}
