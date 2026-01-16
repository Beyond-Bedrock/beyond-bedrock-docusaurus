import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import stylesIndex from './index.module.css';
import styles from './about.module.css';

function AboutHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', stylesIndex.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          About Beyond Bedrock
        </Heading>
        <p className={clsx('hero__subtitle', stylesIndex.noMarginBottom)}>
          Learn about our mission, team, and what makes us different.
        </p>
      </div>
    </header>
  );
}

function AboutSection({ title, children }) {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>{title}</Heading>
        <div className={styles.sectionContent}>
          {children}
        </div>
      </div>
    </section>
  );
}

function TeamGrid() {
  const teamMembers = [
    {
      name: 'Minato',
      role: 'Founder & Lead Developer',
      image: 'img/team/8bTB101.svg'
    },
    {
      name: 'Mevo',
      role: 'Developer & Code Reviewer',
      image: 'img/team/4xKdA01.svg'
    },
    {
      name: 'MZ3G',
      role: 'Developer & Designer',
      image: 'img/team/owqn801.svg'
    }
  ];

  return (
    <div className={styles.teamGrid}>
      {teamMembers.map(({ name, role, image }, index) => (
        <div key={index} className={styles.teamMember}>
          <img src={image} alt={`${name}, ${role}`} className={styles.teamImage} />
          <Heading as="h3" className={styles.teamName}>{name}</Heading>
          <p className={styles.teamRole}>{role}</p>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`About Us | ${siteConfig.title}`}
      description="Learn about Beyond Bedrock, its mission, values, and the team behind the platform for Minecraft Bedrock Edition creators and players."
    >
      <AboutHeader />
      <main>
        <AboutSection title="About Us">
          <p>
            We are a team of creators dedicated to making high-quality Minecraft Bedrock add-ons.
            We also run a content hosting site where you can find amazing creations from our team and the wider Minecraft
            Bedrock community.
          </p>
          <p>
            We created this platform to showcase our team's creations and provide a space for the community to share their
            own. From unique add-ons that enhance gameplay to resource packs that transform the look and feel of Minecraft, our
            goal is to highlight the best from our team and the community.
          </p>
        </AboutSection>

        <AboutSection title="What We Offer">
          <p>Our platform is built to support both our team and the community through:</p>
          <ul className={styles.featureList}>
            <li>
              <strong>High-Quality Add-Ons:</strong> Custom-made Minecraft Bedrock add-ons created by our team to enhance gameplay.
            </li>
            <li>
              <strong>Community Creations:</strong> A space for players and creators to upload, share, and discover unique Bedrock content.
            </li>
            <li>
              <strong>Easy Content Hosting:</strong> Reliable hosting for creators to share their work with the community.
            </li>
            <li>
              <strong>Regular Updates & Support:</strong> Ongoing updates to our projects and support for users and creators alike.
            </li>
          </ul>
        </AboutSection>

        <AboutSection title="Our Team">
          <p>
            Beyond Bedrock is maintained by a dedicated team of Minecraft Bedrock creators who are passionate about the game and its community.
          </p>
          <TeamGrid />
        </AboutSection>

        <AboutSection title="Join Us">
          <p>
            Beyond Bedrock is more than just a website, it's a community. Whether you're a player looking for exciting new content, 
            a creator wanting to share your work, or simply a Minecraft fan, we welcome you to join our community.
          </p>
          <p>
            Have questions or want to get involved?{' '}
            <Link to="/contact">Contact us</Link> or join our community on Discord.
          </p>
        </AboutSection>
      </main>
    </Layout>
  );
}
