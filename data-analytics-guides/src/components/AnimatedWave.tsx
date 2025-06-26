import React from 'react';

// SVGアニメーション波＋バブル・点群・可視化パターンのコンポーネント
const AnimatedWave: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1440 590"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    style={{ display: 'block', position: 'absolute', left: 0, right: 0, bottom: 0, width: '100%', height: 'auto', zIndex: 0 }}
    {...props}
  >
    <style>{`
      .path-0{ animation:pathAnim-0 4s linear infinite; }
      @keyframes pathAnim-0{
        0%{ d: path('M 0,600 L 0,150 C 84.23923444976077,180.91866028708134 168.47846889952154,211.83732057416267 258,209 C 347.52153110047846,206.16267942583733 442.32535885167454,169.5693779904306 535,153 C 627.6746411483255,136.4306220095694 718.2200956937799,139.88516746411486 810,153 C 901.7799043062201,166.11483253588514 994.7942583732058,188.88995215311004 1100,190 C 1205.2057416267942,191.11004784688996 1322.6028708133972,170.555023923445 1440,150 L 1440,600 L 0,600 Z'); }
        25%{ d: path('M 0,600 L 0,150 C 61.90430622009572,168.9377990430622 123.80861244019144,187.8755980861244 238,174 C 352.19138755980856,160.1244019138756 518.66985645933,113.4354066985646 618,121 C 717.33014354067,128.5645933014354 749.5119617224881,190.3827751196172 825,195 C 900.4880382775119,199.6172248803828 1019.2822966507176,147.03349282296648 1129,130 C 1238.7177033492824,112.9665071770335 1339.3588516746413,131.48325358851676 1440,150 L 1440,600 L 0,600 Z'); }
        50%{ d: path('M 0,600 L 0,150 C 71.39712918660285,156.41148325358853 142.7942583732057,162.82296650717703 249,173 C 355.2057416267943,183.17703349282297 496.22009569377997,197.1196172248804 589,171 C 681.77990430622,144.8803827751196 726.3253588516748,78.69856459330144 811,86 C 895.6746411483252,93.30143540669856 1020.4784688995214,174.08612440191388 1132,197 C 1243.5215311004786,219.91387559808612 1341.7607655502393,184.95693779904306 1440,150 L 1440,600 L 0,600 Z'); }
        75%{ d: path('M 0,600 L 0,150 C 92.91866028708134,179.68421052631578 185.83732057416267,209.3684210526316 283,214 C 380.1626794258373,218.6315789473684 481.56937799043067,198.21052631578948 578,190 C 674.4306220095693,181.78947368421052 765.8851674641147,185.7894736842105 867,167 C 968.1148325358853,148.2105263157895 1078.88995215311,106.63157894736842 1176,100 C 1273.11004784689,93.36842105263158 1356.5550239234449,121.68421052631578 1440,150 L 1440,600 L 0,600 Z'); }
        100%{ d: path('M 0,600 L 0,150 C 84.23923444976077,180.91866028708134 168.47846889952154,211.83732057416267 258,209 C 347.52153110047846,206.16267942583733 442.32535885167454,169.5693779904306 535,153 C 627.6746411483255,136.4306220095694 718.2200956937799,139.88516746411486 810,153 C 901.7799043062201,166.11483253588514 994.7942583732058,188.88995215311004 1100,190 C 1205.2057416267942,191.11004784688996 1322.6028708133972,170.555023923445 1440,150 L 1440,600 L 0,600 Z'); }
      }
      .path-1{ animation:pathAnim-1 4s linear infinite; }
      @keyframes pathAnim-1{
        0%{ d: path('M 0,600 L 0,350 C 106.77511961722487,320.47846889952154 213.55023923444975,290.95693779904303 311,296 C 408.44976076555025,301.04306220095697 496.57416267942585,340.65071770334936 573,366 C 649.4258373205741,391.34928229665064 714.153110047847,402.4401913875598 818,388 C 921.846889952153,373.5598086124402 1064.8133971291866,333.58851674641147 1175,323 C 1285.1866028708134,312.41148325358853 1362.5933014354068,331.2057416267943 1440,350 L 1440,600 L 0,600 Z'); }
        25%{ d: path('M 0,600 L 0,350 C 89.92344497607655,339.09090909090907 179.8468899521531,328.18181818181813 289,346 C 398.1531100478469,363.81818181818187 526.5358851674641,410.3636363636364 616,411 C 705.4641148325359,411.6363636363636 756.0095693779904,366.3636363636364 851,346 C 945.9904306220096,325.6363636363636 1085.4258373205741,330.1818181818182 1191,335 C 1296.5741626794259,339.8181818181818 1368.287081339713,344.9090909090909 1440,350 L 1440,600 L 0,600 Z'); }
        50%{ d: path('M 0,600 L 0,350 C 121.27272727272728,331.8755980861244 242.54545454545456,313.7511961722488 329,335 C 415.45454545454544,356.2488038277512 467.0909090909091,416.8708133971292 566,423 C 664.9090909090909,429.1291866028708 811.0909090909092,380.76555023923447 905,360 C 998.9090909090908,339.23444976076553 1040.5454545454545,346.0669856459331 1121,349 C 1201.4545454545455,351.9330143540669 1320.7272727272727,350.96650717703346 1440,350 L 1440,600 L 0,600 Z'); }
        75%{ d: path('M 0,600 L 0,350 C 94.97607655502392,393.5598086124402 189.95215311004785,437.1196172248804 275,415 C 360.04784688995215,392.8803827751196 435.16746411483257,305.08133971291863 542,300 C 648.8325358851674,294.91866028708137 787.377990430622,372.555023923445 899,385 C 1010.622009569378,397.444976076555 1095.3205741626793,344.69856459330146 1181,328 C 1266.6794258373207,311.30143540669854 1353.3397129186603,330.6507177033493 1440,350 L 1440,600 L 0,600 Z'); }
        100%{ d: path('M 0,600 L 0,350 C 106.77511961722487,320.47846889952154 213.55023923444975,290.95693779904303 311,296 C 408.44976076555025,301.04306220095697 496.57416267942585,340.65071770334936 573,366 C 649.4258373205741,391.34928229665064 714.153110047847,402.4401913875598 818,388 C 921.846889952153,373.5598086124402 1064.8133971291866,333.58851674641147 1175,323 C 1285.1866028708134,312.41148325358853 1362.5933014354068,331.2057416267943 1440,350 L 1440,600 L 0,600 Z'); }
      }
      /* バブルアニメーション */
      .bubble { opacity: 0.7; animation: bubbleMove 8s ease-in-out infinite; }
      .bubble2 { opacity: 0.5; animation: bubbleMove2 10s ease-in-out infinite; }
      .bubble3 { opacity: 0.4; animation: bubbleMove3 12s ease-in-out infinite; }
      @keyframes bubbleMove { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(-40px) scale(1.1); } 100% { transform: translateY(0) scale(1); } }
      @keyframes bubbleMove2 { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(-60px) scale(1.15); } 100% { transform: translateY(0) scale(1); } }
      @keyframes bubbleMove3 { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(-30px) scale(0.95); } 100% { transform: translateY(0) scale(1); } }
      /* 棒グラフアニメーション */
      .bar { opacity: 0.7; }
      .bar-anim { animation: barGrow 2.5s cubic-bezier(.4,2,.6,1) infinite alternate; }
      @keyframes barGrow { 0% { height: 30px; } 100% { height: 80px; } }
      /* 折れ線グラフアニメーション */
      .line-anim { stroke-dasharray: 200; stroke-dashoffset: 200; animation: lineDraw 2.5s linear forwards; }
      @keyframes lineDraw { to { stroke-dashoffset: 0; } }
      /* 数式・コード断片フェードインアニメーション */
      .fadein-text { opacity: 0; animation: fadeinText 12s linear infinite; }
      .fadein-1 { animation-delay: 0s; }
      .fadein-2 { animation-delay: 3s; }
      .fadein-3 { animation-delay: 6s; }
      .fadein-4 { animation-delay: 9s; }
      @keyframes fadeinText {
        0% { opacity: 0; }
        10% { opacity: 1; }
        30% { opacity: 1; }
        40% { opacity: 0; }
        100% { opacity: 0; }
      }
    `}</style>
    {/* データサイエンスらしい要素: 数式・記号・データフロー（SVG最背面に移動・色を変更して視認性UP） */}
    <g>
      <text x="220" y="120" fontSize="38" fill="#2196f3" opacity="0.38" fontWeight="bold">Σ</text>
      <text x="420" y="80" fontSize="32" fill="#43a047" opacity="0.32" fontWeight="bold">π</text>
      <text x="700" y="100" fontSize="30" fill="#e53935" opacity="0.32" fontWeight="bold">λ</text>
      <text x="1100" y="130" fontSize="36" fill="#ffb300" opacity="0.35" fontWeight="bold">∑</text>
      {/* フェードインする数式・コード断片 */}
      <text x="1200" y="80" fontSize="22" fill="#fff" fontWeight="bold" className="fadein-text fadein-1">E = mc²</text>
      <text x="180" y="90" fontSize="20" fill="#fff" fontWeight="bold" className="fadein-text fadein-2">import pandas as pd</text>
      <text x="900" y="70" fontSize="20" fill="#fff" fontWeight="bold" className="fadein-text fadein-3">SELECT * FROM data</text>
      <text x="350" y="60" fontSize="20" fill="#fff" fontWeight="bold" className="fadein-text fadein-4">y = wx + b</text>
      <polyline points="250,180 300,160 350,180" fill="none" stroke="#2196f3" strokeWidth="3.5" opacity="0.32" markerEnd="url(#arrowhead)" />
      <polyline points="800,200 850,170 900,200" fill="none" stroke="#e53935" strokeWidth="3.5" opacity="0.32" markerEnd="url(#arrowhead)" />
      <g opacity="0.32">
        <circle cx="1200" cy="120" r="10" fill="#2196f3" />
        <circle cx="1220" cy="140" r="7" fill="#43a047" />
        <circle cx="1240" cy="120" r="10" fill="#e53935" />
        <line x1="1200" y1="120" x2="1220" y2="140" stroke="#2196f3" strokeWidth="3.5" />
        <line x1="1220" y1="140" x2="1240" y2="120" stroke="#e53935" strokeWidth="3.5" />
      </g>
    </g>
    {/* 波 */}
    <path d="M 0,600 L 0,150 C 84.23923444976077,180.91866028708134 168.47846889952154,211.83732057416267 258,209 C 347.52153110047846,206.16267942583733 442.32535885167454,169.5693779904306 535,153 C 627.6746411483255,136.4306220095694 718.2200956937799,139.88516746411486 810,153 C 901.7799043062201,166.11483253588514 994.7942583732058,188.88995215311004 1100,190 C 1205.2057416267942,191.11004784688996 1322.6028708133972,170.555023923445 1440,150 L 1440,600 L 0,600 Z" fill="#2193b0" fillOpacity="0.53" className="path-0" />
    <path d="M 0,600 L 0,350 C 106.77511961722487,320.47846889952154 213.55023923444975,290.95693779904303 311,296 C 408.44976076555025,301.04306220095697 496.57416267942585,340.65071770334936 573,366 C 649.4258373205741,391.34928229665064 714.153110047847,402.4401913875598 818,388 C 921.846889952153,373.5598086124402 1064.8133971291866,333.58851674641147 1175,323 C 1285.1866028708134,312.41148325358853 1362.5933014354068,331.2057416267943 1440,350 L 1440,600 L 0,600 Z" fill="#2193b0" fillOpacity="1" className="path-1" />
    {/* バブル・点群（データポイント） */}
    <circle className="bubble" cx="180" cy="400" r="18" fill="#6dd5ed" />
    <circle className="bubble2" cx="600" cy="420" r="12" fill="#2193b0" />
    <circle className="bubble3" cx="900" cy="390" r="10" fill="#87CEEB" />
    <circle className="bubble" cx="1200" cy="410" r="16" fill="#0d47a1" />
    <circle className="bubble2" cx="1050" cy="370" r="8" fill="#6dd5ed" />
    <circle className="bubble3" cx="400" cy="370" r="7" fill="#2193b0" />
    {/* 小さな点群（データポイント） */}
    <circle cx="350" cy="440" r="3" fill="#fff" opacity="0.7" />
    <circle cx="700" cy="430" r="2.5" fill="#fff" opacity="0.6" />
    <circle cx="1100" cy="450" r="2.5" fill="#fff" opacity="0.5" />
    <circle cx="800" cy="410" r="2" fill="#fff" opacity="0.5" />
    <circle cx="1250" cy="430" r="2" fill="#fff" opacity="0.4" />
    {/* 散布図風の点群 */}
    <circle cx="500" cy="410" r="4" fill="#ffb300" opacity="0.7" />
    <circle cx="520" cy="430" r="3" fill="#43a047" opacity="0.7" />
    <circle cx="540" cy="420" r="2.5" fill="#e53935" opacity="0.7" />
    <circle cx="560" cy="440" r="3.5" fill="#1e88e5" opacity="0.7" />
    <circle cx="580" cy="415" r="2.5" fill="#8e24aa" opacity="0.7" />
    {/* 折れ線グラフ（y座標を+60下げる） */}
    <polyline points="200,490 250,470 300,480 350,460 400,470 450,450 500,460" fill="none" stroke="#ffb300" strokeWidth="3" className="line-anim" />
    {/* 折れ線グラフ（y座標を+100下げてさらに下部に移動） */}
    <polyline points="200,530 250,510 300,520 350,500 400,510 450,490 500,500" fill="none" stroke="#ffb300" strokeWidth="3" className="line-anim" />
    {/* 右側に青系の折れ線グラフを追加 */}
    <polyline points="950,540 1000,520 1050,530 1100,510 1150,520 1200,500 1250,510" fill="none" stroke="#2196f3" strokeWidth="3" className="line-anim" />
    {/* 棒グラフ */}
    <g>
      <rect x="1000" y="420" width="12" height="60" fill="#43a047" className="bar bar-anim" style={{animationDelay: '0s'}} />
      <rect x="1020" y="440" width="12" height="40" fill="#1e88e5" className="bar bar-anim" style={{animationDelay: '0.3s'}} />
      <rect x="1040" y="410" width="12" height="70" fill="#e53935" className="bar bar-anim" style={{animationDelay: '0.6s'}} />
      <rect x="1060" y="430" width="12" height="50" fill="#ffb300" className="bar bar-anim" style={{animationDelay: '0.9s'}} />
    </g>
    {/* 円グラフ（小さなpie chart） */}
    <g transform="translate(1300,420)">
      <circle r="12" fill="#fff" opacity="0.7" />
      <path d="M0,0 L12,0 A12,12 0 0,1 6,-10.4 Z" fill="#43a047" />
      <path d="M0,0 L6,-10.4 A12,12 0 0,1 -9.6,6.8 Z" fill="#e53935" />
      <path d="M0,0 L-9.6,6.8 A12,12 0 0,1 12,0 Z" fill="#1e88e5" />
    </g>
    {/* ブランドイメージ強化: ロゴ/アイコン・ブランドカラーのグラデーション */}
    {/* ブランドカラーのグラデーション円 */}
    <circle cx="1300" cy="100" r="38" fill="url(#brandGrad)" opacity="0.18" />
    <circle cx="200" cy="180" r="28" fill="url(#brandGrad2)" opacity="0.13" />
    {/* データサイエンス象徴アイコン例（AI脳/グラフ/データ波） */}
    <g opacity="0.22">
      {/* AI脳アイコン（抽象化） */}
      <ellipse cx="300" cy="120" rx="22" ry="14" fill="#2196f3" />
      <circle cx="288" cy="120" r="3" fill="#fff" />
      <circle cx="312" cy="120" r="3" fill="#fff" />
      <circle cx="300" cy="110" r="2.5" fill="#fff" />
      <circle cx="300" cy="130" r="2.5" fill="#fff" />
      <line x1="288" y1="120" x2="300" y2="110" stroke="#fff" strokeWidth="1.5" />
      <line x1="312" y1="120" x2="300" y2="130" stroke="#fff" strokeWidth="1.5" />
      {/* データ波アイコン */}
      <path d="M260,160 Q270,150 280,160 T300,160 T320,160 T340,160" fill="none" stroke="#43a047" strokeWidth="2.5" />
      {/* グラフアイコン */}
      <rect x="1250" y="70" width="6" height="18" fill="#e53935" />
      <rect x="1260" y="80" width="6" height="8" fill="#ffb300" />
      <rect x="1270" y="60" width="6" height="28" fill="#2196f3" />
    </g>
    <defs>
      <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
        <polygon points="0 0, 8 3, 0 6" fill="#fff" />
      </marker>
      <linearGradient id="brandGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2196f3" />
        <stop offset="100%" stopColor="#6dd5ed" />
      </linearGradient>
      <linearGradient id="brandGrad2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#e53935" />
        <stop offset="100%" stopColor="#ffb300" />
      </linearGradient>
    </defs>
  </svg>
);

export default AnimatedWave;
