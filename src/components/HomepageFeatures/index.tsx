import React from 'react';
import clsx from 'clsx';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Integrate',
    Svg: require('@site/static/img/easy-to-integrate.svg').default,
    description: (
      <>
        Event Storm is designed from the ground up to be an easy replacement
        for your state management choice. Already familiar API with an optimized,
        decentralized subscription mechanism
      </>
    ),
  },
  {
    title: 'Performance Centric',
    Svg: require('@site/static/img/performance-centric.svg').default,
    description: (
      <>
        Each feature of Event Storm is desgined with the performance and scale in mind.
        Event Storm will allow you to minimize the application rendering to the rare minimum.
        Bundle size, integration cost, subscription mechanism, recomputions, etc.
      </>
    ),
  },
  {
    title: 'UI Agnostic',
    Svg: require('@site/static/img/ui-agnostic.svg').default,
    description: (
      <>
        The Event Storm does not rely on any UI framework/library. You can use
        the Event Storm with any UI solution on your target platform(browser, backend and native)
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  const { colorMode } = useColorMode();
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={clsx(styles.featureSvg, { [styles.invert]: colorMode === 'dark' })} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
