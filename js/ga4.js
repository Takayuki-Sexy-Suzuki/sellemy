// js/ga4.js
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }

gtag('js', new Date());

// 測定IDだけ書き換えて使ってください
gtag('config', 'G-SZ5RQR5H7L', {
  anonymize_ip: true,   // IP匿名化（プライバシー保護）
  transport_type: 'beacon'  // パフォーマンス改善
});
