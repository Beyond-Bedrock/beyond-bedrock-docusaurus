import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';

import ContentCard from './ContentCard';
import styles from './ContentPage.module.css';

export default function ContentList({ content }) {
  const { items = [], totalPages = 0, contentType = 'content' } = content || {};

  return (
    <Layout
      title={`${getContentTypeTitle(contentType)} - Beyond Bedrock`}
      description={`Browse ${getContentTypeTitle(contentType).toLowerCase()} for Minecraft Bedrock Edition`}
    >
      <main className={clsx('container margin-vert--lg', styles.page)}>
        <Heading as="h1">{getContentTypeTitle(contentType)}</Heading>
        <p className={styles.subtitle}>
          {getContentTypeDescription(contentType)}
        </p>

        {items.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No {getContentTypeTitle(contentType).toLowerCase()} available yet. Check back soon!</p>
            <p>This page is ready to display content once it becomes available.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {items.map((item) => (
              <ContentCard key={item.id} item={item} contentType={contentType} />
            ))}
          </div>
        )}
      </main>
    </Layout>
  );
}

function getContentTypeTitle(contentType) {
  const titles = {
    addons: 'Add-ons',
    guides: 'Guides',
    maps: 'Maps',
    'resource-packs': 'Resource Packs',
  };
  return titles[contentType] || 'Content';
}

function getContentTypeDescription(contentType) {
  const descriptions = {
    addons: 'Transform your Minecraft experience with behavior packs.',
    guides: 'Learn how to create and use Bedrock content.',
    maps: 'Explore custom adventures and challenges.',
    'resource-packs': 'Change the look and feel of your Minecraft world.',
  };
  return descriptions[contentType] || 'Browse content for Minecraft Bedrock Edition.';
}
