import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';

import styles from './ContentCard.module.css';

export default function ContentCard({ item, contentType }) {
  // Handle missing item data
  if (!item) {
    return null;
  }

  const thumbnailUrl = item.image?.startsWith('http')
    ? item.image
    : useBaseUrl(item.image || '/img/placeholder.png');

  const authorAvatarUrl = item.author?.avatar?.startsWith('http')
    ? item.author.avatar
    : useBaseUrl(item.author?.avatar || '/img/avatar-placeholder.png');

  return (
    <Link to={`/${contentType}/${item.slug}`} className={clsx('card', styles.cardLink)}>
      <div className={styles.imageWrap}>
        <img
          src={thumbnailUrl ?? '/img/placeholder.png'}
          alt={item.title ?? 'Content Thumbnail'}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={clsx('card__body', styles.body)}>
        <h3 className={styles.title}>{item.title}</h3>

        {item.description && (
          <p className={styles.desc}>{item.description}</p>
        )}

        {item.author?.name && (
          <div className={styles.authorRow}>
            <img
              src={authorAvatarUrl}
              alt={item.author.name}
              className={styles.authorAvatar}
              loading="lazy"
            />
            <span className={styles.authorName}>{item.author.name}</span>
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
      </div>
    </Link>
  );
}
