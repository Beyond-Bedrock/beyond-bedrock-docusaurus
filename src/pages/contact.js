import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

// Import both CSS modules
import stylesIndex from './index.module.css';
import styles from './contact.module.css';

function ContactHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', stylesIndex.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Get In Touch
        </Heading>
        <p className={clsx('hero__subtitle', stylesIndex.noMarginBottom)}>
          We'd love to hear from you! Choose how you'd like to connect with us.
        </p>
      </div>
    </header>
  );
}

function ContactMethods() {
  return (
    <section className={styles.contactMethods}>
      <div className="container">
        <div className={styles.contactCards}>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <img src="img/social/discord-icon.svg" alt="Discord Icon" />
            </div>
            <Heading as="h3">Join Our Discord</Heading>
            <p>Connect with our community and get real-time support from our team.</p>
            <Link 
              className="button button--secondary button--lg" 
              href="https://discord.gg/fmTdYDv6hh"
            >
              Join Discord
            </Link>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <img src="img/social/email-icon.svg" alt="Email Icon" />
            </div>
            <Heading as="h3">Email Us</Heading>
            <p>Contact us for any questions, suggestions or reports.</p>
            <p className={styles.contactEmail}>contact@beyondbedrock.org</p>
            <Link 
              className="button button--secondary button--lg" 
              href="mailto:contact@beyondbedrock.org"
            >
              Send Email
            </Link>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <img src="img/social/x-icon.svg" alt="𝕏 Icon" />
            </div>
            <Heading as="h3">Follow Us</Heading>
            <p>Follow us on 𝕏 for updates and reach out to us via DM.</p>
            <Link 
              className="button button--secondary button--lg" 
              href="https://x.com/beyond_bedrock"
            >
              Follow on 𝕏
            </Link>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <img src="img/social/github-icon.svg" alt="GitHub Icon" />
            </div>
            <Heading as="h3">GitHub Repository</Heading>
            <p>View our source code, contribute, or report issues on GitHub.</p>
            <Link 
              className="button button--secondary button--lg" 
              href="https://github.com/beyond-bedrock"
            >
              Visit GitHub
            </Link>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <img src="img/social/youtube-icon.svg" alt="YouTube Icon" />
            </div>
            <Heading as="h3">YouTube Channel</Heading>
            <p>Watch tutorials, updates, and Minecraft content on our YouTube channel.</p>
            <Link 
              className="button button--secondary button--lg" 
              href="https://www.youtube.com/@beyond-bedrock"
            >
              Watch on YouTube
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Contact Us | ${siteConfig.title}`}
      description="Get in touch with Beyond Bedrock team. Join our Discord community, reach out via email, or connect with us on social media."
    >
      <ContactHeader />
      <main>
        <ContactMethods />
      </main>
    </Layout>
  );
}
