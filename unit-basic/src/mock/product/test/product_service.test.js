const ProductService = require('../product_service');
const StubProductClient = require('./stub_procut_client');

describe('ProductService - Stub', () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: 'milk', available: true }]);
  });
});