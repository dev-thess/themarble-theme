function formatVnPrice(price) {
  if (price >= 1_000_000) {
    return (price / 1_000_000).toFixed(2) + " triệu ₫";
  } else if (price >= 1_000) {
    return price.toLocaleString("vi-VN") + " ₫";
  } else {
    return price + " ₫";
  }
}
