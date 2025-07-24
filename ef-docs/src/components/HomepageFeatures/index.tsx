import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Dive back into the Hollow Lands.',
    description: (
      <>
      When Spellbreak was passed to the community, it wasn't designed for scaling up to how it was while the game was live. While Elemental Fracture has carried the mantle by doing much of the scaling up, the setup is now quite less intuitive. We've curated this page filled with helpful resources to help get started!
      </>
    ),
  },
  {
    title: 'We\'re so glad you\'re here.',
    description: (
      <>
      At Elemental Fracture, our mission is simple: we want to bring our Spellbreak community together to resurrect the game we love. Whether you're a seasoned pro or just discovering this game, we want to welcome you to our community where friendships are made and flourish, skills sharpen, and the passion for Spellbreak burns brighter than ever.
      </>
    ),
  },
  {
    title: 'Join our community for more.',
    description: (
      <>
        Elemental Fracture is an ever-growing community. Come be a part of the action in our Discord Server!
      </>
    ),
  },
    {
    title: 'Support our cause!',
    description: (
      <>
        We're committed to keeping the game completely free and accessible for everyone. You’ll never be asked to contribute financially to enjoy the game. That said, if you’re passionate about supporting our growing community, we gladly welcome any contributions to help us maintain and improve our server infrastructure or volunteering as support staff in our Discord. If you choose to contribute financially, all funds collected are dedicated solely to expenses like server infrastructure and website. Our dedicated team, volunteer their time, talents, and efforts.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
