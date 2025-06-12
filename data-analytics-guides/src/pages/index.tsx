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
      {/* ★★★ ここから変更 ★★★ */}
      <div className={clsx("container", styles.heroContent)}> {/* flexboxコンテナとして利用 */}
        <div className={styles.heroTextContent}> {/* 左側のタイトル、サブタイトル、ボタン */}
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/data-analysis/fundamentals">
              データ分析はこちら
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/data-platform/fundamentals">
              データ基盤はこちら
            </Link>
          </div>
        </div>
        
        <div className={styles.heroRightContent}> {/* 右側の説明テキストなど */}
          <p>
            このサイトは、データ分析とデータ基盤に関する知識を習得するための包括的なリソースです。
            基礎から応用まで、実践的な学習コンテンツを提供しています。
          </p>
          {/* markuplint.devのように、ここにロゴや短いテキストを配置しても良いでしょう */}
          {/* <img src="/img/your-logo.svg" alt="ロゴ" className={styles.heroRightLogo} /> */}
        </div>
      </div>
      {/* ★★★ ここまで変更 ★★★ */}
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