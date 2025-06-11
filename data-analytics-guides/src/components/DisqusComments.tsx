// src/components/DisqusComments.js
import React, { useEffect, useRef } from 'react';
import { useLocation } from '@docusaurus/router'; // Docusaurusのhookを使って現在のパスを取得

export default function DisqusComments() {
  const disqusContainer = useRef(null);
  const location = useLocation(); // 現在のページのパス

  useEffect(() => {
    // Disqusスクリプトがロードされているか確認
    if (typeof window !== 'undefined' && window.DISQUS) {
      // 既存のコメントをリセットして新しいページ用にロード
      window.DISQUS.reset({
        reload: true,
        config: function () {
          // 各ページのURLとIDを正確に設定
          this.page.url = window.location.href; // 現在のページの完全なURL
          this.page.identifier = location.pathname; // 現在のページのパス (ユニークなID)
        }
      });
    } else {
      // Disqusスクリプトを動的にロード
      window.disqus_config = function () {
        this.page.url = window.location.href;
        this.page.identifier = location.pathname;
      };

      const script = document.createElement('script');
      script.src = `https://data-analytics-guides.disqus.com/embed.js`; // ★ショートネームをここに！
      script.setAttribute('data-timestamp', +new Date());
      script.setAttribute('data-count-url', 'true'); // コメントカウントを表示したい場合
      script.async = true;
      (document.head || document.body).appendChild(script);
    }
  }, [location.pathname]); // パスが変わったら再ロード

  return (
    <div id="disqus_thread" ref={disqusContainer}></div>
  );
}