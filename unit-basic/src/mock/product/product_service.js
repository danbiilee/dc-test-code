class ProductService {
  constructor(productClient) {
    this.productClient = productClient;
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
