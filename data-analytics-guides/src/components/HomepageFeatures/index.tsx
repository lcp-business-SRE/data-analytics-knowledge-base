import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// SVG/PNG両対応: Svgまたはimgのどちらかを指定可能に

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  img?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'データ分析ノウハウを集約',
    img: require('@site/static/img/data-analysis.png').default,
    description: (
      <>
        データ分析初学者から中級者までに必要な、実務で必要な基礎だけでなく
        実践的な分析の流れを、ステップバイステップで身につけることができる.
      </>
    ),
  },
  {
    title: 'データ基盤技術の理解',
    img: require('@site/static/img/data-platform.png').default,
    description: (
      <>
        データ分析を行なううえで重要となるデータ基盤技術についても開設します。
        昨今はデータ分析基盤は様々なサービスをつなぎ合わせて構築することが一般的です。
      </>
    ),
  },
  {
    title: 'データ分析界隈のニュース',
    img: require('@site/static/img/news.png').default,
    description: (
      <>
        データ分析界隈のニュースやトピックを定期的に更新し、最新の技術やトレンドをキャッチアップできます。
        また、データ分析に関する書籍やオンラインコースのレビューも掲載し、学習リソースを充実させます。
        `blog`で発信します。
      </>
    ),
  },
];

function Feature({title, Svg, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : img ? (
          <img src={img} className={styles.featureSvg} alt={title} style={{maxWidth: 180, height: 'auto'}} />
        ) : null}
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
