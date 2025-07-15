import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading'; // Ensure this is imported

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // This header will now take the full viewport width
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      {/* The content container that centers the text and button */}
      <div className="container">
        {/* Your title text. If the logo is in the background, you might want to hide this or make it transparent. */}
        <Heading as="h1" className="hero__title">
          {siteConfig.title} {/* This is "Elemental Fracture" */}
        </Heading>
        {/* Your tagline */}
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Dive back into the Hollow Lands {/* Updated text from your image */}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Docs`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}