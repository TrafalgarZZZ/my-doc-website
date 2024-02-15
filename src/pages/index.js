import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle"><Translate>{siteConfig.tagline}</Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            <Translate>Getting Started</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Power Data Accessing on Kubernetes`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div align="center">
          <Translate>Fluid is a Cloud Native Computing Foundation Sandbox Project.</Translate>
          <p></p> 
          <a href="https://www.cncf.io/">
            <img src="https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/CNCF.png" width="20%" height="20%" align="center"/>
          </a>
          <p></p>
        </div>
      </main>
    </Layout>
  );
}
