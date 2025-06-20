import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import CustomFooterMarkdownContent from '@site/docs/homepage-footer-content.md';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContent)}>
        {/* 左側：タイトル・サブタイトル・説明テキスト */}
        <div className={styles.heroTextContent}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p style={{marginBottom: '2rem'}}>
            このサイトは、データ分析とデータ基盤に関する知識を習得するための包括的なリソースです。<br />
            基礎から応用まで、実践的な学習コンテンツを提供しています。
          </p>
          {/* <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/data-analysis">
              データ分析はこちら
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/data-platform">
              データ基盤はこちら
            </Link>
          </div> */}
        </div>
        <div className={styles.heroRightContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', marginBottom: '0.25rem', fontSize: '0.98rem', fontWeight: 500 }}>
            SRE データ分析（名前募集）
          </div>
          <img
            src={require('@site/static/img/mascot-top.png').default}
            alt="SREデータ分析マスコット"
            className={styles.heroRightLogo}
            style={{ display: 'block', margin: 0, maxWidth: '180px', width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`ようこそ ${siteConfig.title}`}
      description="ようこそLECIP ビジネス開発センター SREチーム データ分析学習サイトへ <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className={styles.homepageFooterContent}>
          {/* <CustomFooterMarkdownContent /> */}
        </div>
      </main>
    </Layout>
  );
}