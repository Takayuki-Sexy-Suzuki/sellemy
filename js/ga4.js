// js/ga4.js
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }

gtag('js', new Date());

// 測定IDだけ書き換えて使ってください
gtag('config', 'G-SZ5RQR5H7L', {
  anonymize_ip: true,   // IP匿名化（プライバシー保護）
  transport_type: 'beacon'  // パフォーマンス改善
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.link-button').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = link.href;
      let label = '';
      let platform = '';

      // どのプラットフォームかを判定
      if (href.includes('amzn.to') || href.includes('amazon.co.jp')) {
        platform = 'amazon';
      } else if (href.includes('rakuten.co.jp') || href.includes('rakuten.ne.jp')) {
        platform = 'rakuten';
      } else if (href.includes('shopping.yahoo.co.jp') || href.includes('yahoo.co.jp')) {
        platform = 'yahoo';
      } else {
        return; // 無関係リンクは無視
      }

      // 商品名（h3）を探す
      let productName = '';
      const card = link.closest('.item-card');
      if (card) {
        const h3 = card.querySelector('h3');
        if (h3) {
          productName = h3.textContent.trim();
        }
      }

      // GA4に送信（custom paramも渡せる）
      gtag('event', 'click', {
        event_category: 'affiliate',
        event_label: platform,
        product_name: productName  // ← カスタムパラメータとして送信
      });

      // 必要に応じて遷移ディレイ（未使用ならコメントアウトのままでOK）
       e.preventDefault();
       setTimeout(() => window.open(href, '_blank'), 100);
    });
  });
});
