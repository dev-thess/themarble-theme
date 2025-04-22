function formatVnPrice(price) {
  if (price >= 1_000_000) {
    return (price / 1_000_000).toFixed(2) + " triệu ₫";
  } else if (price >= 1_000) {
    return price.toLocaleString("vi-VN") + " ₫";
  } else {
    return price + " ₫";
  }
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lấy raw shortcode pattern (giữ nguyên space nếu có)
    const shortcode = /\{\{\s*tagline\s*\}\}/g;
  
    // 2. Lấy đúng value tagline, strip hết HTML lộn xộn
    const tagline = {{ product.metafields.custom.tagline | json }};
  
    // 3. Chọn tất cả .rte và replace
    document.querySelectorAll('.rte').forEach(el => {
      // Cẩn thận: nếu el.innerHTML dùng, replace HTML string
      el.innerHTML = el.innerHTML.replace(shortcode, tagline);
    });
  });
