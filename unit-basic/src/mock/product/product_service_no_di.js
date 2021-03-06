const ProductClient = require('./product_client');

class ProductService {
  constructor() {
    // π© no dependency injection
    this.productClient = new ProductClient();
  }

  // νμ€νΈ ν  ν¨μ
  fetchAvailableItems() {
    return this.productClient.fetchItems().then((items) =>
      // λΉμ¦λμ€ λ‘μ§
      items.filter((item) => item.available)
    );
  }
}

module.exports = ProductService;
