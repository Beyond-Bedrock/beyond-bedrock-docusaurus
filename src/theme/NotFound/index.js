import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import clsx from 'clsx';

import stylesIndex from '../../pages/index.module.css';
import styles from './index.module.css';

export default function NotFound() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Page Not Found | 404"
      description="The page you're looking for doesn't exist. Explore Beyond Bedrock's Minecraft Bedrock add-ons and community content."
    >
      <div className={styles.floating404Container}>
        <img 
          src="/img/404.svg" 
          alt="404" 
          className={styles.floating404}
          style={{ filter: 'var(--ifm-image-filter)' }}
        />
        
        {/* Random stars */}
        <div className={styles.starsContainer}>
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className={styles.star}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className={clsx('hero hero--primary', stylesIndex.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            404 - Page Not Found
          </Heading>
          <p className={clsx('hero__subtitle', stylesIndex.noMarginBottom)}>
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>
      </div>

      <main>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <div className="text--center">
                <Heading as="h2">Fell Out Of The World?</Heading>
                <p className="margin-bottom--lg">
                  The page you're trying to reach seems to have vanished into the void. 
                  But don't worry! There's plenty of amazing Minecraft Bedrock content to explore.
                </p>
                
                <div className="margin-bottom--lg">
                  <Heading as="h3">What can you do?</Heading>
                  <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
                    <li>Check the URL for typos</li>
                    <li>Use the navigation menu to find what you need</li>
                    <li>Contact us if you think something's missing</li>
                  </ul>
                </div>

                <div className="margin-bottom--lg">
                  <Link
                    to="/"
                    className="button button--primary button--lg margin-right--sm"
                  >
                    Go Home
                  </Link>
                  <Link
                    to="/contact"
                    className="button button--outline button--lg"
                  >
                    Contact Us
                  </Link>
                </div>

                <p className="text--muted">
                  If you believe this is an error, please{' '}
                  <Link to="/contact">let us know</Link> so we can fix it!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
