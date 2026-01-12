import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './ContentDetail.module.css';
import StructuredData from './StructuredData';
import Breadcrumbs from './Breadcrumbs';

export default function ContentDetail({ item, contentType: contentTypeModule }) {
  const contentType = typeof contentTypeModule === 'string' ? contentTypeModule : contentTypeModule.default || 'addons';
  
  // Handle missing item data
  if (!item) {
    return (
      <Layout
        title={`Content Not Found - Beyond Bedrock`}
        description="The requested content could not be found."
      >
        <main className={clsx('container margin-vert--lg', styles.page)}>
          <div className="alert alert--warning">
            <h3>Content Not Found</h3>
            <p>The requested content could not be found or may not have been created yet.</p>
            <p>Please check back later or return to the <Link to={`/${contentType}`}>{getContentTypeTitle(contentType)} list</Link>.</p>
          </div>
        </main>
      </Layout>
    );
  }
  
  const thumbnailUrl = item.thumbnail?.startsWith('http')
    ? item.thumbnail
    : useBaseUrl(item.thumbnail || '/img/placeholder.png');

  const authorAvatarUrl = item.author?.avatar?.startsWith('http')
    ? item.author.avatar
    : useBaseUrl(item.author?.avatar || '/img/avatar-placeholder.png');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": contentType === 'maps' ? "Map" : "SoftwareApplication",
    "name": item.title,
    "description": item.description,
    "image": item.thumbnail,
    "author": {
      "@type": "Person",
      "name": item.author?.name,
      "image": item.author?.avatar
    },
    "datePublished": item.datePublished || new Date().toISOString(),
    "dateModified": item.dateModified || new Date().toISOString(),
    "applicationCategory": "Game",
    "operatingSystem": "Minecraft Bedrock Edition",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": item.rating ? {
      "@type": "AggregateRating",
      "ratingValue": item.rating,
      "reviewCount": item.reviewCount || 1
    } : undefined,
    "keywords": item.tags?.join(", "),
    "downloadUrl": item.downloadUrl
  };

  // Generate Open Graph meta tags
  const ogTags = {
    'og:title': `${item.title} - ${getContentTypeTitle(contentType)}`,
    'og:description': item.description || `Download ${item.title} for Minecraft Bedrock Edition`,
    'og:image': thumbnailUrl,
    'og:type': contentType === 'maps' ? 'website' : 'product',
    'og:site_name': 'Beyond Bedrock',
    'og:url': typeof window !== 'undefined' ? window.location.href : '',
    'article:section': getContentTypeTitle(contentType),
    'article:tag': item.tags?.join(', '),
  };

  // Generate Twitter Card meta tags
  const twitterTags = {
    'twitter:card': 'summary_large_image',
    'twitter:title': item.title,
    'twitter:description': item.description || `Download ${item.title} for Minecraft Bedrock Edition`,
    'twitter:image': thumbnailUrl,
    'twitter:site': '@beyondbedrock',
    'twitter:creator': item.author?.name || '@beyondbedrock',
  };

  return (
    <Layout
      title={`${item.title} - ${getContentTypeTitle(contentType)} - Beyond Bedrock`}
      description={item.description || `Download ${item.title} for Minecraft Bedrock Edition`}
      image={thumbnailUrl}
      structuredData={structuredData}
      ogTags={ogTags}
      twitterTags={twitterTags}
    >
      <StructuredData item={item} contentType={contentType} />
      <Breadcrumbs contentType={contentType} itemTitle={item.title} />
      <main className={clsx('container margin-vert--lg', styles.page)}>
        <div className={styles.header}>
          <div className={styles.thumbnailContainer}>
            <img
              src={thumbnailUrl}
              alt={item.title}
              className={styles.thumbnail}
            />
          </div>
          
          <div className={styles.info}>
            <Heading as="h1" className={styles.title}>{item.title}</Heading>
            
            {item.description && (
              <p className={styles.description}>{item.description}</p>
            )}

            {item.author?.name && (
              <div className={styles.author}>
                <img
                  src={authorAvatarUrl}
                  alt={item.author.name}
                  className={styles.authorAvatar}
                />
                <div>
                  <div className={styles.authorName}>{item.author.name}</div>
                  {item.author?.bio && (
                    <div className={styles.authorBio}>{item.author.bio}</div>
                  )}
                </div>
              </div>
            )}

            {!!item.tags?.length && (
              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={clsx('badge badge--secondary', styles.tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {item.downloadUrl && (
              <a
                href={item.downloadUrl}
                className={clsx('button button--primary', styles.downloadBtn)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download {getContentTypeTitle(contentType)}
              </a>
            )}
          </div>
        </div>

        {item.longDescription && (
          <div className={styles.content}>
            <Heading as="h2">About</Heading>
            <div 
              className={styles.longDescription}
              dangerouslySetInnerHTML={{ __html: item.longDescription }}
            />
          </div>
        )}

        {item.screenshots && item.screenshots.length > 0 && (
          <div className={styles.screenshots}>
            <Heading as="h2">Screenshots</Heading>
            <div className={styles.screenshotGrid}>
              {item.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot.startsWith('http') ? screenshot : useBaseUrl(screenshot)}
                  alt={`${item.title} screenshot ${index + 1}`}
                  className={styles.screenshot}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}

function getContentTypeTitle(contentType) {
  const titles = {
    addons: 'Add-on',
    guides: 'Guide',
    maps: 'Map',
    'resource-packs': 'Resource Pack',
  };
  return titles[contentType] || 'Content';
}
