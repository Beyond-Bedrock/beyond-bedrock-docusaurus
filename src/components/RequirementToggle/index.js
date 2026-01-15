import React from 'react';
import styles from './styles.module.css';


/*
title: The title of the requirement
description: A brief description of the requirement
required: Whether the requirement is enabled or not (default: false)

Usage Examples:

<RequirementToggle
  title='Upcoming Creator Features'
  description='Includes actor properties and adjustable fog parameters'
  required
/>

<RequirementToggle
  title='Beta APIs'
  description='Use "-beta" versions of API modules in add-on packs'
  required
/>

<RequirementToggle
  title='Experimental Creator Camera Features'
  description='Enables the use of the latest custom camera features'
  required
/>

*/


export default function RequirementToggle({
  title,
  description,
  required = false,
}) {
  const toggleSrc = required
    ? '/img/toggle_on.webp'
    : '/img/toggle_off.webp';

  const finalDescription =
    description || 'This experimental feature must be enabled';

  return (
    <div className={styles.reqContainer}>
      <div className={styles.reqText}>
        <div className={styles.reqTitle}>{title}</div>

        <div className={styles.reqDescription}>
          {finalDescription}
        </div>
      </div>

      <img
        src={toggleSrc}
        alt={required ? 'Toggle Enabled' : 'Toggle Disabled'}
        className={styles.reqToggleImg}
        draggable={false}
      />
    </div>
  );
}
