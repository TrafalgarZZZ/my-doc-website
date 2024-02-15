import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Dataset Abstraction',
    Svg: require('@site/static/img/homepage/abstr-icon.png').default,
    description: (
      <>
        Provide Dataset abstraction for underlying heterogeneous data sources 
        with multidimensional management in cloud environment.
      </>
    ),
  },
  {
    title: 'Data Acceleration',
    Svg: require('@site/static/img/homepage/accelerate-icon.png').default,
    description: (
      <>
        Enable dataset warmup and acceleration for data-intensive applications by 
        using distributed cache in Kubernetes with observability, portability and scalability.
      </>
    ),
  },
  {
    title: 'Data-aware Scheduling',
    Svg: require('@site/static/img/homepage/schedule-icon.png').default,
    description: (
      <>
        Taking characteristics of application and data into consideration 
        for cloud application/dataset scheduling to improve the performance.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} role="img"/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
