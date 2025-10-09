import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import TopWaveSvg from '@site/static/img/top-wave.svg';
import AnimatedWave from '@site/src/components/AnimatedWave';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{position: 'relative', overflow: 'hidden'}}>
      {/* ▼波アニメーション背景を最背面に絶対配置 */}
      <AnimatedWave />
      <div className={clsx('container', styles.heroContent)} style={{position: 'relative', zIndex: 1}}>
        {/* 左側：タイトル・サブタイトル・説明テキスト */}
        <div className={styles.heroTextContent}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p style={{marginBottom: '2rem'}}>
            データ分析とデータ基盤に関する技術を習得するためのサイトです。<br />
            基礎から応用まで、実践的な学習コンテンツを提供していきます。
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
          <TopWaveSvg
            alt="SREデータ分析マスコット"
            className={styles.heroRightLogo}
            style={{ display: 'block', margin: 0, maxWidth: '350px', width: '100%', height: 'auto' }}
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
      </main>
    </Layout>
  );
}