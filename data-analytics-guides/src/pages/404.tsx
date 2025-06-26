// src/pages/404.tsx

import React from 'react';
import Layout from '@theme/Layout'; // Docusaurus のレイアウトコンポーネント
import Link from '@docusaurus/Link'; // Docusaurus の Link コンポーネント
import useBaseUrl from '@docusaurus/useBaseUrl'; // staticファイルへのパスを取得するフック

function NotFound() {
  // static/img/404-not-found.png へのパスを生成
  // useBaseUrl('/img/404-not-found.png') は、本番環境のベースURLを考慮した正しいパスを返します。
  const imageUrl = useBaseUrl('/img/404-not-found.png');

  return (
    <Layout
      title="ページが見つかりません"
      description="お探しのページは存在しません。"
    >
      <main
        style={{
          display: 'flex',
          flexDirection: 'column', // 要素を縦方向に並べる
          justifyContent: 'center', // 垂直方向の中央揃え
          alignItems: 'center',    // 水平方向の中央揃え
          minHeight: 'calc(100vh - var(--ifm-navbar-height) - var(--ifm-footer-height))', // NavbarとFooterの高さを考慮して全画面表示
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        {/* 画像の表示 */}
        <img
          src={imageUrl}
          alt="404 Not Found"
          style={{
            maxWidth: '600px', // 画像の最大幅を制限
            width: '80%',      // 親要素に対する幅の比率
            height: 'auto',    // アスペクト比を維持
            marginBottom: '2rem', // 画像の下に余白
          }}
        />

        <h1>お探しのページは見つかりませんでした。</h1>
        <p>
          URL を確認するか、以下のリンクからサイトを探索してください。
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Link
            className="button button--primary button--lg"
            to="/"
          >
            ホームに戻る
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/data-analysis/fundamentals/" // あなたのサイトのドキュメントトップへのパスに変更してください
          >
            ドキュメントトップへ
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;