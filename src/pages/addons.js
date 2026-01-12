import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function AddonsPage() {
  return (
    <Layout title="Add-ons" description="Browse Minecraft Bedrock add-ons">
      <div className="container margin-vert--lg">
        <Heading as="h1">Add-ons</Heading>
        <p>No add-ons available at the moment. Please check back later!</p>
      </div>
    </Layout>
  );
}
