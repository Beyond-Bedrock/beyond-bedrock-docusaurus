import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const categoryCards = [
  {
    emoji: '🧩',
    title: 'Add-ons',
    description: 'Transform your Minecraft experience with behavior packs',
    to: '/addons',
  },
  {
    emoji: '🎨',
    title: 'Resource Packs',
    description: 'Change the look and feel of your Minecraft world',
    to: '/resource-packs',
  },
  {
    emoji: '🗺️',
    title: 'Maps',
    description: 'Explore custom adventures and challenges',
    to: '/maps',
  },
  {
    emoji: '📚',
    title: 'Guides',
    description: 'Learn how to create and use Bedrock content',
    to: '/guides',
  },
];

function CategoryCard({ emoji, title, description, to }) {
  return (
    <Link className={styles.categoryCard} to={to}>
      <div className={styles.categoryCardTop}>
        <div className={styles.categoryIcon} aria-hidden="true">
          {emoji}
        </div>
      </div>
      <div className={styles.categoryCardBody}>
        <Heading as="h3" className={styles.categoryTitle}>
          {title}
        </Heading>
        <p className={styles.categoryDescription}>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.section}>
          <Heading as="h2" className={styles.sectionTitle}>
            Browse by Category
          </Heading>

          <div className={styles.categoryGrid}>
            {categoryCards.map((card) => (
              <CategoryCard key={card.to} {...card} />
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <Heading as="h2" className={styles.sectionTitle}>
            Join Our Community
          </Heading>

          <p className={styles.sectionLead}>
            Connect with other Bedrock creators and enthusiasts. Share your creations, get feedback, and stay up-to-date with
            the latest Minecraft Bedrock news.
          </p>

          <div className={styles.ctaRow}>
            <Link className={clsx('button button--secondary button--lg', styles.ctaButton)} href="https://discord.gg/fmTdYDv6hh">
              Join Discord
            </Link>
            <Link className={clsx('button button--secondary button--lg', styles.ctaButton)} href="https://x.com/beyond_bedrock">
              Follow Us On 𝕏
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
