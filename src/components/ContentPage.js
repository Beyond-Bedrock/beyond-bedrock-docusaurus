import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';

import ContentCard from './ContentCard';
import useContentData from '../hooks/useContentData';
import styles from './ContentPage.module.css';

export default function ContentPage({
  title,
  description,
  subtitle,
  contentType,
  emptyMessage,
  staticContent = false,
}) {
  const [page, setPage] = useState(1);
  const { items, totalPages, loading, error } = useContentData(contentType, page);

  const handlePreviousPage = () => {
    setPage((p) => Math.max(1, p - 1));
  };

  const handleNextPage = () => {
    setPage((p) => Math.min(totalPages, p + 1));
  };

  return (
    <Layout title={title} description={description}>
      <main className={clsx('container margin-vert--lg', styles.page)}>
        <Heading as="h1">{title}</Heading>
        <p className={styles.subtitle}>{subtitle}</p>

        {staticContent ? (
          <div className={styles.staticContent}>
            {emptyMessage}
          </div>
        ) : loading ? (
          <p>Loading {title.toLowerCase()}…</p>
        ) : error ? (
          <div className="alert alert--danger">
            <h3>Error loading {title.toLowerCase()}</h3>
            <p>{error}</p>
            <p>
              Ensure <code>static/{contentType}/index.json</code> and{' '}
              <code>static/{contentType}/page-1.json</code> exist and are reachable.
            </p>
            <p>If these files don't exist yet, this page will display content once they're created.</p>
          </div>
        ) : items.length === 0 ? (
          <div className={styles.emptyState}>
            <p>{emptyMessage}</p>
          </div>
        ) : (
          <>
            <div className={styles.grid}>
              {items.map((item) => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className={styles.pager}>
                <button
                  className={clsx('button button--secondary', styles.pagerBtn)}
                  disabled={page <= 1}
                  onClick={handlePreviousPage}
                >
                  &lt;
                </button>

                <span className={styles.pagerText}>
                  Page {page} / {totalPages}
                </span>

                <button
                  className={clsx('button button--secondary', styles.pagerBtn)}
                  disabled={page >= totalPages}
                  onClick={handleNextPage}
                >
                  &gt;
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </Layout>
  );
}
