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
        {
          <Heading as="h1" className="hero__title">
          {"This is"}
          </Heading>
        }
        {
          <img src='https://api.elefrac.com/cdn/api/v1/buckets/assets/objects/download?preview=true&prefix=Logos%2Fhero-logo-white.png' alt='Elemental Fracture Main Logo'> 
          </img>
        }
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