import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function MapsPage() {
  return (
    <Layout title="Maps" description="Browse Minecraft Bedrock maps">
      <div className="container margin-vert--lg">
        <Heading as="h1">Maps</Heading>
        <p>No maps available at the moment. Please check back later!</p>
      </div>
    </Layout>
  );
}
