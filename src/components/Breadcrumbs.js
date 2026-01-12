import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

import styles from './Breadcrumbs.module.css';

export default function Breadcrumbs({ contentType, itemTitle }) {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: getContentTypeLabel(contentType), href: `/${contentType}` },
  ];

  if (itemTitle) {
    breadcrumbs.push({ label: itemTitle, href: undefined });
  }

  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ol className={styles.breadcrumbList}>
        {breadcrumbs.map((crumb, index) => (
          <li
            key={index}
            className={clsx(
              styles.breadcrumbItem,
              index === breadcrumbs.length - 1 && styles.breadcrumbActive
            )}
          >
            {crumb.href ? (
              <Link to={crumb.href} className={styles.breadcrumbLink}>
                {crumb.label}
              </Link>
            ) : (
              <span className={styles.breadcrumbCurrent}>{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function getContentTypeLabel(contentType) {
  const labels = {
    addons: 'Add-ons',
    guides: 'Guides',
    maps: 'Maps',
    'resource-packs': 'Resource Packs',
  };
  return labels[contentType] || 'Content';
}
