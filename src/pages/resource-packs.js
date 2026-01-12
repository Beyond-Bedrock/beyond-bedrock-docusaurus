import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function ResourcePacksPage() {
  return (
    <Layout title="Resource Packs" description="Browse Minecraft Bedrock resource packs">
      <div className="container margin-vert--lg">
        <Heading as="h1">Resource Packs</Heading>
        <p>No resource packs available at the moment. Please check back later!</p>
      </div>
    </Layout>
  );
}
