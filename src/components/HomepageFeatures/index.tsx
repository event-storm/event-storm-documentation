import React from 'react';
import clsx from 'clsx';
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
        Event storm is designed from the ground up to be an easy replacement
        for your state management choice. Already fimiliar API with an optimized,
        decentialized subscription mechanism
      </>
    ),
  },
  {
    title: 'Performace centric',
    Svg: require('@site/static/img/performance-centric.svg').default,
    description: (
      <>
        Each feature of event storm is desgined with the performance and scale in mind.
        Event storm will allow you to minimize the application rendering to the rare minimum.
        Bundle size, integration cost, subscription mechanism, recomputions, etc.
      </>
    ),
  },
  {
    title: 'UI agnostic',
    Svg: require('@site/static/img/ui-agnostic.svg').default,
    description: (
      <>
        The event storm does not rely on any UI framework/library. You can use
        the event storm with any UI solution.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
