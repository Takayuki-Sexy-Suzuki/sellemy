// js/ga4.js
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }

gtag('js', new Date());

// 測定IDだけ書き換えて使ってください
gtag('config', 'G-SZ5RQR5H7L', {
  anonymize_ip: true,   // IP匿名化（プライバシー保護）
  transport_type: 'beacon'  // パフォーマンス改善
});

// ▼ここからクリック計測処理を追加
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.link-button').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = link.href;
      let label = '';

      if (href.includes('amzn.to') || href.includes('amazon.co.jp')) {
        label = 'amazon';
      } else if (href.includes('rakuten.co.jp') || href.includes('rakuten.ne.jp')) {
        label = 'rakuten';
      } else if (href.includes('shopping.yahoo.co.jp') || href.includes('yahoo.co.jp')) {
        label = 'yahoo';
      } else {
        return; // 無関係なリンクは無視
      }

      gtag('event', 'click', {
        event_category: 'affiliate',
        event_label: label
      });

      // 必要に応じて計測待ち処理も追加可能
       e.preventDefault();
       setTimeout(() => window.open(href, '_blank'), 100);
    });
  });
});
