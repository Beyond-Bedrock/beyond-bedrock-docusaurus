import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function GuidesPage() {
  return (
    <Layout title="Guides" description="Browse Minecraft Bedrock guides">
      <div className="container margin-vert--lg">
        <Heading as="h1">Guides</Heading>
        <p>No guides available at the moment. Please check back later!</p>
      </div>
    </Layout>
  );
}
