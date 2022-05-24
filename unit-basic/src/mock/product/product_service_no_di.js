const ProductClient = require('./product_client');

class ProductService {
  constructor() {
    // 💩 no dependency injection
    this.productClient = new ProductClient();
  }

  // 테스트 할 함수
  fetchAvailableItems() {
    return this.productClient.fetchItems().then((items) =>
      // 비즈니스 로직
      items.filter((item) => item.available)
    );
  }
}

module.exports = ProductService;
